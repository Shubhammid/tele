"use client";

import { useCallback, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { LoadingSpinner } from "./LoadingSpinner";
import streamClient from "@/lib/stream";
import { createToken } from "@/actions/createToken";

const UserSyncWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createOrUpdateUser = useMutation(api.users.upsertUser);

  const syncUser = useCallback(async () => {
    if (!user?.id) return;

    try {
      setIsLoading(true);
      setError(null);

      const tokenProvider = async () => {
        if (!user?.id) {
          throw new Error("User is not authenticated");
        }
        const token = await createToken(user.id);
        return token;
      };

      await createOrUpdateUser({
        userId: user.id,
        name:
          user.fullName ||
          user.firstName ||
          user.emailAddresses[0]?.emailAddress ||
          "Unknown User",
        email: user.emailAddresses[0]?.emailAddress || "",
        imageUrl: user.imageUrl || "",
      });

      await streamClient.connectUser(
        {
          id: user.id,
          name:
            user.fullName ||
            user.firstName ||
            user.emailAddresses[0]?.emailAddress ||
            "Unknown User",
          image: user.imageUrl || "",
        },
        tokenProvider
      );
    } catch (err) {
      console.error("User sync failed:", err);
      setError(err instanceof Error ? err.message : "Failed to sync user");
    } finally {
      setIsLoading(false);
    }
  }, [createOrUpdateUser, user]);

  const disconnectUser = useCallback(async () => {
    try {
      await streamClient.disconnectUser();
    } catch (err) {
      console.error("Failed to disconnect User:", err);
    }
  }, []);


  useEffect(() => {
    if (!isUserLoaded) return;

    if (user) {
      syncUser();
    } else {
      disconnectUser();
      setIsLoading(false);
    }

    return () => {
      if (user) {
        disconnectUser();
      }
    };
  }, [user, isUserLoaded, syncUser, disconnectUser]);



  if (!isUserLoaded || isLoading) {
    return (
      <LoadingSpinner
        size="lg"
        message={!isUserLoaded ? "Loading..." : "Syncing user data..."}
        className="min-h-screen"
      />
    );
  }



  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-6">
        <p className="text-red-500 text-lg font-semibold mb-2">Sync error</p>
        <p className="text-gray-600 text-center mb-4">{error}</p>
        <button
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
          onClick={syncUser}
        >
          Retry
        </button>
        <p className="text-gray-500 text-center text-sm mt-2">
          Please try restarting the app or contact support if this issue
          persists.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserSyncWrapper;

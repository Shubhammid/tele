"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { useUserSearch } from "@/hooks/useUserSearch";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Search, UserIcon, X } from "lucide-react";
import { Input } from "./ui/input";
import { InlineSpinner } from "./LoadingSpinner";

function UserSearch({
  onSelectUser,
  placeholder = "Select user by name or email...",
  className,
}: {
  onSelectUser: (user: Doc<"users">) => void;
  placeholder?: string;
  className?: string;
}) {
  const { searchTerm, setSerchTerm, searchResults, isLoading } =
    useUserSearch();

  const { user } = useUser();

  const filteredResults = searchResults.filter(
    (searchUser) => searchUser.userId !== user?.id
  );

  const clearSearch = () => {
    setSerchTerm("");
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSerchTerm(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {searchTerm.trim() && (
        <div className="mt-2 bg-card border border-border rounded-lg shadow-lg max-h-96 overflow-auto">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <InlineSpinner size="sm" />
                <span>Searching...</span>
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <UserIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No users found matching &quot;{searchTerm}&quot;</p>
            </div>
          ) : (
            <div>users</div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserSearch;

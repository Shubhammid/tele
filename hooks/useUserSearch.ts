import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { Doc } from "@/convex/_generated/dataModel";

export function useUserSearch() {
  const [searchTerm, setSerchTerm] = useState("");
  const debouncedSerchTerm = useDebounce(searchTerm, 300);

  const searchResults = useQuery(
    api.users.searchUsers,
    debouncedSerchTerm.trim() ? { searchTerm: debouncedSerchTerm } : "skip"
  );
  return {
    searchTerm,
    setSerchTerm,
    searchResults: (searchResults || []) as Doc<"users">[],
    isLoading: searchResults === undefined && debouncedSerchTerm.trim() !== "",
  };
}

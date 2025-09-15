"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Doc } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export function NewChatDialog({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const [selectedUsers, setSelectedUsers] = useState<Doc<"users">[]>([]);
    const [groupName, setGroupName] = useState("");
    const createNewChat = useCreateNewChat();
    const { user } = useUser();
    const { setActiveChannel } = useChatContext();


  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start a New Chat</DialogTitle>
          <DialogDescription>
            Create a new conversation with other users.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter user ID or email"
            className="w-full rounded border px-3 py-2 text-sm"
          />
          <button className="px-4 py-2 bg-primary text-white rounded">
            Start Chat
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

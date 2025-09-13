import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUserByClerkUserID = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    if (!userId) return null;
    return await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
  },
});

export const upsertUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, { userId, name, email, imageUrl }) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name,
        email,
        imageUrl,
      });
      return await ctx.db.get(existingUser._id);
    }

    const newUserId = await ctx.db.insert("users", {
      userId,
      name,
      email,
      imageUrl,
    });

    return await ctx.db.get(newUserId);
  },
});

export const searchUser = query({
  args: {
    searchTerm: v.string(),
  },
  handler: async (ctx, { searchTerm }) => {
    if (!searchTerm.trim()) return [];

    const normalisedSearch = searchTerm.toLowerCase().trim();

    const allUsers = await ctx.db.query("users").collect();

    const filteredUsers = allUsers
      .filter(
        (user) =>
          user.name.toLowerCase().includes(normalisedSearch) ||
          user.email.toLowerCase().includes(normalisedSearch)
      )
      .slice(0, 20);

    return filteredUsers;
  },
});

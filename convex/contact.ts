import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("contactSubmissions", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      subject: args.subject,
      message: args.message,
      status: "new",
    });
    return id;
  },
});

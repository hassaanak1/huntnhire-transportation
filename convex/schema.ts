import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),

  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    status: v.union(v.literal("new"), v.literal("read"), v.literal("replied")),
  }),

  bookingRequests: defineTable({
    // Service & vehicle
    serviceType: v.string(),
    vehiclePreference: v.optional(v.string()),
    // Schedule
    pickupDate: v.string(),
    pickupTime: v.string(),
    // Locations
    pickupLocation: v.string(),
    dropoffLocation: v.string(),
    // Group
    passengers: v.number(),
    // Contact info
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    // Extra
    specialRequests: v.optional(v.string()),
    // Status
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
    ),
  }),
});

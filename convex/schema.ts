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
    // Client info
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    // Event
    eventDate: v.string(),
    eventType: v.string(),
    // Trip
    pickupTime: v.string(),
    pickupAddress: v.string(),
    stopsAddress: v.optional(v.string()),
    destinationAddress: v.string(),
    dropoffTime: v.string(),
    // Group & vehicle
    passengers: v.number(),
    vehicleNeeded: v.string(),
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

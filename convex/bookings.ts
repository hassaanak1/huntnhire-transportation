import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createBookingRequest = mutation({
  args: {
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    eventDate: v.string(),
    eventType: v.string(),
    pickupTime: v.string(),
    pickupAddress: v.string(),
    stopsAddress: v.optional(v.string()),
    destinationAddress: v.string(),
    dropoffTime: v.string(),
    passengers: v.number(),
    hoursNeeded: v.number(),
    vehicleNeeded: v.string(),
    specialRequests: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("bookingRequests", {
      fullName: args.fullName,
      email: args.email,
      phone: args.phone,
      eventDate: args.eventDate,
      eventType: args.eventType,
      pickupTime: args.pickupTime,
      pickupAddress: args.pickupAddress,
      stopsAddress: args.stopsAddress,
      destinationAddress: args.destinationAddress,
      dropoffTime: args.dropoffTime,
      passengers: args.passengers,
      hoursNeeded: args.hoursNeeded,
      vehicleNeeded: args.vehicleNeeded,
      specialRequests: args.specialRequests,
      status: "pending",
    });
    return id;
  },
});

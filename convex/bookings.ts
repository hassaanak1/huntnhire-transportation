import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createBookingRequest = mutation({
  args: {
    serviceType: v.string(),
    vehiclePreference: v.optional(v.string()),
    pickupDate: v.string(),
    pickupTime: v.string(),
    pickupLocation: v.string(),
    dropoffLocation: v.string(),
    passengers: v.number(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    specialRequests: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("bookingRequests", {
      serviceType: args.serviceType,
      vehiclePreference: args.vehiclePreference,
      pickupDate: args.pickupDate,
      pickupTime: args.pickupTime,
      pickupLocation: args.pickupLocation,
      dropoffLocation: args.dropoffLocation,
      passengers: args.passengers,
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      specialRequests: args.specialRequests,
      status: "pending",
    });
    return id;
  },
});

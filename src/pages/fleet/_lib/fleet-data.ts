import type { LucideIcon } from "lucide-react";
import {
  Car,
  Crown,
  Users,
  Wifi,
  Shield,
  Wine,
  Music,
  Sparkles,
  Briefcase,
} from "lucide-react";

import beuford from "@/assets/fleet/beuford.jpg";
import chrysler from "@/assets/fleet/chrysler-limo.jpg";
import escalade from "@/assets/fleet/escalade-limo.webp";
import hummer from "@/assets/fleet/hummer-limo.webp";
import jetSprinter from "@/assets/fleet/jet-sprinter.jpg";
import rollsRoyce from "@/assets/fleet/vintage-rolls-royce.jpg";
import coachBus from "@/assets/fleet/coach-bus.jpg";
import partyBus from "@/assets/fleet/party-bus.jpg";

export type VehicleAmenity = {
  icon: LucideIcon;
  label: string;
};

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  image: string;
  passengers: string;
  luggage: string;
  description: string;
  amenities: VehicleAmenity[];
  idealFor: string[];
};

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "vintage-rolls-royce",
    name: "Vintage Rolls Royce",
    category: "Classic Collection",
    image: rollsRoyce,
    passengers: "Up to 3",
    luggage: "2 bags",
    description:
      "The epitome of timeless elegance. Our vintage Rolls Royce provides a majestic presence for your most special occasions, featuring classic wood trim and wool carpeting.",
    amenities: [
      { icon: Crown, label: "Heritage Interior" },
      { icon: Wine, label: "Champagne Service" },
      { icon: Sparkles, label: "Classic Ornament" },
      { icon: Shield, label: "Chauffeur Service" },
    ],
    idealFor: ["Weddings", "Anniversaries", "Film Shoots", "VIP Appearances"],
  },
  {
    id: "beuford-1920",
    name: "Beuford 1920",
    category: "Classic Collection",
    image: beuford,
    passengers: "Up to 3",
    luggage: "1 bag",
    description:
      "A stunning open-top vintage tourer that captures the romance of the 1920s. Perfect for making a grand entrance and creating unforgettable photographs.",
    amenities: [
      { icon: Sparkles, label: "Convertible Top" },
      { icon: Crown, label: "Lace Details" },
      { icon: Wine, label: "Chilled Refreshments" },
      { icon: Music, label: "Period Style" },
    ],
    idealFor: [
      "Summer Weddings",
      "Garden Parties",
      "Photo Sessions",
      "Parades",
    ],
  },
  {
    id: "escalado-limo",
    name: "Escalade Limo",
    category: "Limousines",
    image: escalade,
    passengers: "Up to 18",
    luggage: "4 bags",
    description:
      "The modern standard of luxury transport. This stretched SUV combines the rugged power of an Escalade with an interior designed for high-end entertainment.",
    amenities: [
      { icon: Wifi, label: "Fiber Optic Lighting" },
      { icon: Music, label: "Surround Sound" },
      { icon: Wine, label: "Full Bar" },
      { icon: Users, label: "Wraparound Seating" },
    ],
    idealFor: ["Corporate Galas", "Bachelor Parties", "Concerts", "Red Carpet"],
  },
  {
    id: "chrysler-limo",
    name: "Chrysler Limo",
    category: "Limousines",
    image: chrysler,
    passengers: "Up to 10",
    luggage: "2 bags",
    description:
      "Sleek, sophisticated, and urban. The Chrysler 300 stretch offers a bold profile with a modern interior that feels like a private lounge on wheels.",
    amenities: [
      { icon: Sparkles, label: "LED Starlight Headliner" },
      { icon: Music, label: "Bluetooth Audio" },
      { icon: Wine, label: "Cocktail Station" },
      { icon: Shield, label: "Privacy Glass" },
    ],
    idealFor: ["Proms", "Business Dinners", "City Tours", "Birthdays"],
  },
  {
    id: "hummer-limo",
    name: "Hummer Limo",
    category: "Limousines",
    image: hummer,
    passengers: "Up to 20",
    luggage: "3 bags",
    description:
      "Make a massive statement. Our Hummer H2 stretch is the ultimate party vehicle, featuring an expansive interior that can accommodate large groups with ease.",
    amenities: [
      { icon: Sparkles, label: "Neon Light Show" },
      { icon: Music, label: "Subwoofer System" },
      { icon: Wine, label: "Multiple Chillers" },
      { icon: Users, label: "Massive Capacity" },
    ],
    idealFor: [
      "Large Group Outings",
      "Night Out",
      "Festivals",
      "Sporting Events",
    ],
  },
  {
    id: "jet-sprinter",
    name: "Jet Sprinter",
    category: "Vans",
    image: jetSprinter,
    passengers: "Up to 9",
    luggage: "10 bags",
    description:
      "Designed for those who prefer a private jet experience on the ground. Custom-built with reclining captain chairs and high-end work amenities.",
    amenities: [
      { icon: Briefcase, label: "Executive Workdesk" },
      { icon: Wifi, label: "Dedicated Hotspot" },
      { icon: Shield, label: "Smart TV System" },
      { icon: Crown, label: "Reclining Seats" },
    ],
    idealFor: [
      "Executive Travel",
      "Mobile Meetings",
      "Golf Trips",
      "Family Roadtrips",
    ],
  },
  {
    id: "coach-bus",
    name: "Coach Bus",
    category: "Buses",
    image: coachBus,
    passengers: "Up to 56",
    luggage: "50+ bags",
    description:
      "Our high-capacity motor coach provides comfortable, efficient transportation for very large groups, featuring climate control and under-carriage storage.",
    amenities: [
      { icon: Users, label: "Extra Legroom" },
      { icon: Shield, label: "Climate Control" },
      { icon: Car, label: "Ample Storage" },
      { icon: Music, label: "PA System" },
    ],
    idealFor: [
      "Conventions",
      "Tour Groups",
      "Wedding Shuttles",
      "Corporate Retreats",
    ],
  },
  {
    id: "luxury-suv",
    name: "Luxury SUV",
    category: "SUVs",
    image:
      "https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?auto=format&fit=crop&w=800&q=80",
    passengers: "Up to 6",
    luggage: "6 bags",
    description:
      "Command the road in our premium luxury SUVs. Spacious interiors accommodate families, executive groups, and anyone who demands extra room without compromising on style.",
    amenities: [
      { icon: Users, label: "Spacious seating" },
      { icon: Wifi, label: "Complimentary Wi-Fi" },
      { icon: Shield, label: "Climate zones" },
      { icon: Crown, label: "Premium sound" },
    ],
    idealFor: [
      "Family travel",
      "Group transfers",
      "Corporate events",
      "Airport runs with luggage",
    ],
  },
  {
    id: "stretch-limo",
    name: "Stretch Limousine",
    category: "Limousines",
    image:
      "https://images.unsplash.com/photo-1676107773690-9d670f8b1afa?auto=format&fit=crop&w=800&q=80",
    passengers: "Up to 10",
    luggage: "2 bags",
    description:
      "The ultimate symbol of luxury. Our stretch limousines transform every occasion into a red-carpet event with spacious interiors, mood lighting, and complimentary champagne service.",
    amenities: [
      { icon: Wine, label: "Champagne service" },
      { icon: Sparkles, label: "Mood lighting" },
      { icon: Music, label: "Premium audio" },
      { icon: Crown, label: "Red carpet arrival" },
    ],
    idealFor: ["Weddings", "Proms", "Anniversaries", "Birthday celebrations"],
  },
  {
    id: "white-stretch",
    name: "White Stretch Limousine",
    category: "Limousines",
    image:
      "https://images.unsplash.com/photo-1676107648535-931375db52e2?auto=format&fit=crop&w=800&q=80",
    passengers: "Up to 12",
    luggage: "2 bags",
    description:
      "Our pristine white stretch limousines are the top choice for weddings and formal events. Impeccably maintained with custom decoration options and bridal party amenities.",
    amenities: [
      { icon: Wine, label: "Bridal champagne" },
      { icon: Sparkles, label: "Custom decorations" },
      { icon: Music, label: "Bluetooth audio" },
      { icon: Crown, label: "Photo-ready interior" },
    ],
    idealFor: ["Weddings", "Quinceañeras", "Galas", "VIP arrivals"],
  },
  {
    id: "party-bus",
    name: "Party Bus",
    category: "Party Buses",
    image: partyBus,
    passengers: "20 – 40",
    luggage: "Limited",
    description:
      "A mobile nightclub on wheels. Our party buses feature concert-quality sound systems, LED dance floors, full bar setups, and enough space for your entire crew to celebrate.",
    amenities: [
      { icon: Music, label: "DJ sound system" },
      { icon: Sparkles, label: "LED light show" },
      { icon: Wine, label: "Full bar setup" },
      { icon: Users, label: "Dance floor" },
    ],
    idealFor: [
      "Bachelor/bachelorette parties",
      "Club hopping",
      "Concert shuttles",
      "Birthday bashes",
    ],
  },
  {
    id: "executive-van",
    name: "Executive Sprinter Van",
    category: "Vans",
    image: jetSprinter,
    passengers: "Up to 14",
    luggage: "14 bags",
    description:
      "The perfect blend of capacity and luxury. Our executive Sprinter vans offer airline-style seating, conference capability, and generous luggage space for group travel.",
    amenities: [
      { icon: Wifi, label: "High-speed Wi-Fi" },
      { icon: Briefcase, label: "Conference seating" },
      { icon: Car, label: "Luggage space" },
      { icon: Shield, label: "USB charging" },
    ],
    idealFor: [
      "Corporate groups",
      "Conference shuttles",
      "Sports teams",
      "Airport groups",
    ],
  },
];

export const FLEET_CATEGORIES = [
  ...new Set(FLEET_VEHICLES.map((v) => v.category)),
];

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
      "A rare expression of heritage luxury, this vintage Rolls Royce delivers an iconic arrival experience defined by craftsmanship, prestige, and timeless automotive design.",
    amenities: [
      { icon: Crown, label: "Handcrafted Interior" },
      { icon: Wine, label: "Premium Beverage Service" },
      { icon: Sparkles, label: "Restored Classic Finish" },
      { icon: Shield, label: "Professional Chauffeur" },
    ],
    idealFor: [
      "Luxury Weddings",
      "Anniversary Events",
      "Film Productions",
      "VIP Arrivals",
    ],
  },

  {
    id: "beuford-1920",
    name: "Beuford 1920",
    category: "Classic Collection",
    image: beuford,
    passengers: "Up to 3",
    luggage: "1 bag",
    description:
      "An authentic open-top vintage touring car offering a nostalgic 1920s experience, ideal for scenic drives and unforgettable ceremonial entrances.",
    amenities: [
      { icon: Sparkles, label: "Open-Top Convertible" },
      { icon: Crown, label: "Vintage Detailing" },
      { icon: Wine, label: "Chilled Refreshments" },
      { icon: Music, label: "Classic Era Styling" },
    ],
    idealFor: [
      "Outdoor Weddings",
      "Editorial Shoots",
      "Heritage Events",
      "Luxury Parades",
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
      "A bold luxury SUV limousine designed for group travel, combining spacious interiors with modern entertainment features and a commanding road presence.",
    amenities: [
      { icon: Wifi, label: "Ambient LED Lighting" },
      { icon: Music, label: "Surround Entertainment System" },
      { icon: Wine, label: "Integrated Bar Area" },
      { icon: Users, label: "Luxury Lounge Seating" },
    ],
    idealFor: [
      "Corporate Events",
      "Group Celebrations",
      "Concert Transfers",
      "VIP Transport",
    ],
  },

  {
    id: "chrysler-limo",
    name: "Chrysler Limo",
    category: "Limousines",
    image: chrysler,
    passengers: "Up to 10",
    luggage: "2 bags",
    description:
      "A refined urban limousine offering a sleek exterior and a comfortable lounge-style interior designed for stylish city travel and formal occasions.",
    amenities: [
      { icon: Sparkles, label: "Starlight Ceiling" },
      { icon: Music, label: "Wireless Audio System" },
      { icon: Wine, label: "Refreshment Bar" },
      { icon: Shield, label: "Tinted Privacy Glass" },
    ],
    idealFor: [
      "Prom Nights",
      "Business Travel",
      "City Tours",
      "Special Occasions",
    ],
  },

  {
    id: "hummer-limo",
    name: "Hummer Limo",
    category: "Limousines",
    image: hummer,
    passengers: "Up to 20",
    luggage: "3 bags",
    description:
      "A high-impact luxury vehicle built for large groups, delivering a bold presence with expansive interior space and premium entertainment features.",
    amenities: [
      { icon: Sparkles, label: "Dynamic Interior Lighting" },
      { icon: Music, label: "High-Power Audio System" },
      { icon: Wine, label: "Multiple Beverage Stations" },
      { icon: Users, label: "Extra-Large Capacity Cabin" },
    ],
    idealFor: ["Group Events", "Night Outs", "Festivals", "Sports Travel"],
  },

  {
    id: "jet-sprinter",
    name: "Jet Sprinter",
    category: "Vans",
    image: jetSprinter,
    passengers: "Up to 9",
    luggage: "10 bags",
    description:
      "A premium executive van designed to replicate a private jet cabin experience, offering unmatched comfort for business and long-distance travel.",
    amenities: [
      { icon: Briefcase, label: "Workstation Setup" },
      { icon: Wifi, label: "Onboard Connectivity" },
      { icon: Shield, label: "Entertainment Display System" },
      { icon: Crown, label: "Reclining Executive Seating" },
    ],
    idealFor: [
      "Executive Travel",
      "Business Meetings",
      "Golf Trips",
      "Family Transfers",
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
      "A full-size motor coach designed for efficient large-group transportation with maximum comfort, storage capacity, and long-distance reliability.",
    amenities: [
      { icon: Users, label: "Reclining Seats" },
      { icon: Shield, label: "Climate Controlled Cabin" },
      { icon: Car, label: "High-Capacity Storage Bays" },
      { icon: Music, label: "Onboard PA System" },
    ],
    idealFor: [
      "Tour Groups",
      "Corporate Shuttles",
      "Wedding Transport",
      "Large Events",
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
      "A premium SUV offering elevated comfort, spacious seating, and refined styling for families and executive travelers who require versatility and luxury.",
    amenities: [
      { icon: Users, label: "Spacious Interior Seating" },
      { icon: Wifi, label: "Onboard Connectivity" },
      { icon: Shield, label: "Dual-Zone Climate Control" },
      { icon: Crown, label: "Premium Audio System" },
    ],
    idealFor: [
      "Family Travel",
      "Airport Transfers",
      "Corporate Use",
      "Group Transport",
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
      "A classic luxury limousine designed for premium celebrations, offering elegant interiors, smooth rides, and a refined red-carpet experience.",
    amenities: [
      { icon: Wine, label: "Complimentary Bar Service" },
      { icon: Sparkles, label: "Ambient Interior Lighting" },
      { icon: Music, label: "Premium Sound System" },
      { icon: Crown, label: "Red Carpet Experience" },
    ],
    idealFor: ["Weddings", "Proms", "Anniversaries", "Celebrations"],
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
      "A luxury white stretch limousine tailored for formal occasions, offering elegant presentation, comfort, and customization options for special events.",
    amenities: [
      { icon: Wine, label: "Celebration Service" },
      { icon: Sparkles, label: "Custom Interior Styling" },
      { icon: Music, label: "Bluetooth Audio System" },
      { icon: Crown, label: "Premium Event Presentation" },
    ],
    idealFor: ["Weddings", "Formal Events", "Galas", "VIP Transport"],
  },

  {
    id: "party-bus",
    name: "Party Bus",
    category: "Party Buses",
    image: partyBus,
    passengers: "20 – 40",
    luggage: "Limited",
    description:
      "A fully equipped entertainment vehicle designed for group celebrations, combining music, lighting, and space for a high-energy mobile party experience.",
    amenities: [
      { icon: Music, label: "Club-Grade Sound System" },
      { icon: Sparkles, label: "LED Party Lighting" },
      { icon: Wine, label: "Onboard Beverage Station" },
      { icon: Users, label: "Open Dance Space" },
    ],
    idealFor: ["Bachelor Parties", "Club Nights", "Concerts", "Birthdays"],
  },

  {
    id: "executive-van",
    name: "Executive Sprinter Van",
    category: "Vans",
    image: jetSprinter,
    passengers: "Up to 14",
    luggage: "14 bags",
    description:
      "A premium group transport solution offering executive seating, generous luggage capacity, and a comfortable environment for business or leisure travel.",
    amenities: [
      { icon: Wifi, label: "High-Speed Connectivity" },
      { icon: Briefcase, label: "Conference Seating Layout" },
      { icon: Car, label: "Expanded Cargo Space" },
      { icon: Shield, label: "USB Charging Ports" },
    ],
    idealFor: [
      "Corporate Travel",
      "Group Transfers",
      "Sports Teams",
      "Airport Runs",
    ],
  },
];

export const FLEET_CATEGORIES = [
  ...new Set(FLEET_VEHICLES.map((v) => v.category)),
];

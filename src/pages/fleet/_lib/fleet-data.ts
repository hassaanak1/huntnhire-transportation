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
    id: "executive-sedan",
    name: "Executive Sedan",
    category: "Sedans",
    image:
      "https://images.unsplash.com/photo-1764090317623-06968349ad23?auto=format&fit=crop&w=800&q=80",
    passengers: "Up to 3",
    luggage: "3 bags",
    description:
      "Our flagship executive sedans deliver refined luxury for business travelers and discerning individuals. Featuring premium leather interiors, whisper-quiet cabins, and cutting-edge technology.",
    amenities: [
      { icon: Wifi, label: "Complimentary Wi-Fi" },
      { icon: Shield, label: "Privacy partition" },
      { icon: Briefcase, label: "Mobile workspace" },
      { icon: Crown, label: "VIP amenities" },
    ],
    idealFor: [
      "Airport transfers",
      "Corporate meetings",
      "City tours",
      "Date nights",
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
    idealFor: [
      "Weddings",
      "Proms",
      "Anniversaries",
      "Birthday celebrations",
    ],
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
    idealFor: [
      "Weddings",
      "Quinceañeras",
      "Galas",
      "VIP arrivals",
    ],
  },
  {
    id: "party-bus",
    name: "Party Bus",
    category: "Party Buses",
    image:
      "https://images.unsplash.com/photo-1631222193608-b887bb1f3c23?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1764089859665-7d417664c5de?auto=format&fit=crop&w=800&q=80",
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

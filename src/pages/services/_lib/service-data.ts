import type { LucideIcon } from "lucide-react";
import {
  Car,
  PartyPopper,
  Briefcase,
  Plane,
  Heart,
  Shield,
  Clock,
  Award,
  Users,
  Star,
  Wine,
  Music,
  Wifi,
  DollarSign,
  Crown,
  Sparkles,
  Calendar,
  Navigation,
  Headphones,
  Camera,
  Gem,
  MapPin,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  navIcon: LucideIcon;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  contentImage: string;
  overview: string[];
  features: ServiceFeature[];
  benefits: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const SERVICES: Record<string, ServiceData> = {
  "limo-service": {
    slug: "limo-service",
    navIcon: Car,
    title: "Premium Limousine Service",
    shortTitle: "Limo Service",
    subtitle: "Experience the pinnacle of luxury transportation",
    tagline: "Limo Service Near Me",
    heroImage:
      "https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    contentImage:
      "https://images.unsplash.com/photo-1705682433884-f5ec3c3f979b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0",
    overview: [
      "Our limousine service delivers a refined travel experience combining comfort, privacy, and professionalism for every occasion.",
      "Ideal for weddings, corporate travel, and special events where presentation and reliability matter most.",
      "Each ride is supported by a premium fleet maintained to the highest standards with trained chauffeurs.",
    ],
    features: [
      {
        icon: Crown,
        title: "VIP Experience",
        description:
          "Luxury service designed to provide comfort, privacy, and a premium travel atmosphere.",
      },
      {
        icon: Award,
        title: "Expert Chauffeurs",
        description:
          "Professionally trained drivers ensuring safe, punctual, and smooth transportation.",
      },
      {
        icon: Star,
        title: "Premium Fleet Quality",
        description:
          "High-end limousines with luxury interiors and advanced comfort features.",
      },
      {
        icon: Clock,
        title: "Reliable Timing",
        description:
          "On-time arrivals supported by real-time coordination and route optimization.",
      },
      {
        icon: DollarSign,
        title: "Transparent Pricing",
        description:
          "Clear pricing structure with no hidden fees or unexpected charges.",
      },
      {
        icon: Shield,
        title: "Safety Assured",
        description:
          "Fully insured service with strict safety and compliance standards.",
      },
    ],
    benefits: [
      "24/7 availability",
      "Luxury interiors",
      "Professional chauffeurs",
      "Complimentary refreshments",
      "Private travel experience",
      "Wi-Fi onboard",
      "Custom routing",
      "Climate control",
    ],
    faqs: [
      {
        question: "How early should I book?",
        answer:
          "We recommend booking at least 24–48 hours in advance for guaranteed availability.",
      },
      {
        question: "What is included in pricing?",
        answer:
          "Vehicle, chauffeur, fuel, and standard amenities are included with no hidden fees.",
      },
      {
        question: "Can I customize my ride?",
        answer: "Yes, customization options are available upon request.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Free cancellation is available within the allowed timeframe before pickup.",
      },
      {
        question: "Passenger capacity?",
        answer: "Varies depending on limousine model and configuration.",
      },
      {
        question: "Do you operate nationwide?",
        answer: "Yes, we operate across major cities in the United States.",
      },
    ],
    relatedSlugs: ["party-bus", "wedding", "corporate"],
  },

  "party-bus": {
    slug: "party-bus",
    navIcon: PartyPopper,
    title: "Luxury Party Bus Rentals",
    shortTitle: "Party Bus Rentals",
    subtitle: "Turn any celebration into an unforgettable experience",
    tagline: "Party Bus Rental Near Me",
    heroImage:
      "https://www.bosslimos.ca/photos/freightliner-m2-luxury-limo-bus-1.jpg",
    contentImage:
      "https://jaclimo.com/wp-content/uploads/2024/12/Party-Bus.jpg",
    overview: [
      "Our party buses offer a premium mobile entertainment experience designed for group celebrations.",
      "Perfect for nightlife events, birthdays, and special occasions requiring group travel with style.",
      "Equipped with professional drivers and luxury interiors for safe and enjoyable journeys.",
    ],
    features: [
      {
        icon: Music,
        title: "Premium Audio",
        description: "High-quality sound system with seamless connectivity.",
      },
      {
        icon: Sparkles,
        title: "Lighting System",
        description: "Dynamic LED lighting for immersive party atmosphere.",
      },
      {
        icon: Wine,
        title: "Refreshment Setup",
        description: "Onboard beverage storage and serving area.",
      },
      {
        icon: Users,
        title: "Group Capacity",
        description: "Spacious interiors designed for large groups.",
      },
      {
        icon: Shield,
        title: "Safe Transport",
        description: "Fully compliant and professionally operated service.",
      },
      {
        icon: Camera,
        title: "Modern Interiors",
        description: "Stylish interiors designed for comfort and visuals.",
      },
    ],
    benefits: [
      "Large group seating",
      "Entertainment systems",
      "Custom routes",
      "Climate control",
      "Professional chauffeur",
      "Event flexibility",
      "Safe travel",
      "Onboard lighting",
    ],
    faqs: [
      {
        question: "Capacity?",
        answer: "Varies based on vehicle size and configuration.",
      },
      {
        question: "Can we bring drinks?",
        answer: "Yes, subject to local regulations.",
      },
      {
        question: "Minimum duration?",
        answer: "Hourly minimum applies depending on booking type.",
      },
      {
        question: "Multiple stops allowed?",
        answer: "Yes, route flexibility is available.",
      },
      {
        question: "Breakdown support?",
        answer: "Backup vehicles are available if required.",
      },
      {
        question: "Decorations allowed?",
        answer: "Light decorations are permitted with restrictions.",
      },
    ],
    relatedSlugs: ["limo-service", "wedding", "corporate"],
  },

  corporate: {
    slug: "corporate",
    navIcon: Briefcase,
    title: "Executive Corporate Transportation",
    shortTitle: "Corporate Transportation",
    subtitle: "Elevate your business image with premium executive service",
    tagline: "Corporate Limo Service",
    heroImage:
      "https://images.unsplash.com/photo-1632656269435-77b10f3fcbc6?q=80&w=1470&auto=format&fit=crop",
    contentImage:
      "https://www.bmw.com.mt/en/topics/offers-and-services/bmw-special-sales/bmw-corporate-sales/_jcr_content/root/maincontent/contentblueprint_875251150/contentblueprint/contentblueprint/image.coreimg.jpeg",
    overview: [
      "Executive transportation designed for business professionals and corporate teams.",
      "Reliable service ensuring punctual arrivals for meetings and events.",
      "Scalable solutions for individuals and large organizations.",
    ],
    features: [
      {
        icon: BadgeCheck,
        title: "Dedicated Support",
        description: "Personal account management for corporate clients.",
      },
      {
        icon: Wifi,
        title: "Mobile Office",
        description: "Wi-Fi and workspace-enabled vehicles.",
      },
      {
        icon: Clock,
        title: "High Punctuality",
        description: "Optimized routes ensuring on-time arrivals.",
      },
      {
        icon: Navigation,
        title: "Flight Tracking",
        description: "Real-time monitoring for airport coordination.",
      },
      {
        icon: DollarSign,
        title: "Simplified Billing",
        description: "Consolidated invoicing for corporate accounts.",
      },
      {
        icon: Users,
        title: "Fleet Coordination",
        description: "Large-scale transport management for events.",
      },
    ],
    benefits: [
      "Corporate accounts",
      "Monthly billing",
      "Priority booking",
      "Wi-Fi enabled fleet",
      "Executive chauffeurs",
      "24/7 availability",
      "Scalable logistics",
      "Confidential service",
    ],
    faqs: [],
    relatedSlugs: ["airport-transfers", "limo-service", "party-bus"],
  },

  "airport-transfers": {
    slug: "airport-transfers",
    navIcon: Plane,
    title: "Premium Airport Transfer Service",
    shortTitle: "Airport Transfers",
    subtitle: "Start and end every journey in comfort and style",
    tagline: "Airport Limo Service",
    heroImage:
      "https://luxvan.com.au/wp-content/uploads/2026/02/luxury-airport-transfer-van-australia-luxvan.png",
    contentImage:
      "https://airport.wroclaw.pl/wp-content/uploads/2025/09/VipService-1350-logo-1-scaled.jpg",
    overview: [
      "Reliable airport transportation with real-time flight tracking.",
      "Stress-free pickup and drop-off services across major airports.",
      "Comfort-focused travel experience with professional chauffeurs.",
    ],
    features: [
      {
        icon: Plane,
        title: "Flight Tracking",
        description: "Automatic adjustments based on flight status.",
      },
      {
        icon: MapPin,
        title: "Meet & Greet",
        description: "Personal pickup at arrival terminals.",
      },
      {
        icon: Clock,
        title: "Free Wait Time",
        description: "Complimentary waiting period included.",
      },
      {
        icon: Navigation,
        title: "Nationwide Coverage",
        description: "Service across all major airports.",
      },
      {
        icon: DollarSign,
        title: "Flat Rates",
        description: "Fixed pricing with no surge charges.",
      },
      {
        icon: Headphones,
        title: "24/7 Support",
        description: "Always available customer assistance.",
      },
    ],
    benefits: [
      "Flight monitoring",
      "Meet & greet",
      "Luggage assistance",
      "Flat pricing",
      "Nationwide airports",
      "Free wait time",
      "Comfort vehicles",
      "24/7 availability",
    ],
    faqs: [],
    relatedSlugs: ["corporate", "limo-service", "wedding"],
  },

  wedding: {
    slug: "wedding",
    navIcon: Heart,
    title: "Elegant Wedding Transportation",
    shortTitle: "Wedding Transportation",
    subtitle: "Make your special day truly extraordinary",
    tagline: "Wedding Limo Rental",
    heroImage:
      "https://londonexecutivetours.com/wp-content/uploads/2026/01/Luxury-Wedding-Cars-for-an-Elegant-Arrival-1024x768.jpg",
    contentImage:
      "https://www.brides.com/thmb/sziGossviHtujKGTekMTOvzJOt0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17.Weddingcardecoration-interior_BlueNoteWeddings.jpg",
    overview: [
      "Premium wedding transportation ensuring elegance and timing precision.",
      "Coordinated services for bridal parties and guests.",
      "Luxury vehicles designed for memorable wedding moments.",
    ],
    features: [
      {
        icon: HeartHandshake,
        title: "Wedding Coordination",
        description: "Dedicated planning support for wedding logistics.",
      },
      {
        icon: Gem,
        title: "Custom Styling",
        description: "Decorated vehicles aligned with wedding themes.",
      },
      {
        icon: Wine,
        title: "Celebration Toast",
        description: "Complimentary champagne service for couples.",
      },
      {
        icon: Users,
        title: "Group Transport",
        description: "Bridal party and guest transportation.",
      },
      {
        icon: Calendar,
        title: "Full-Day Coverage",
        description: "Entire wedding day transport support.",
      },
      {
        icon: Camera,
        title: "Photo Ready",
        description: "Vehicles prepared for wedding photography.",
      },
    ],
    benefits: [
      "Wedding coordination",
      "Decor options",
      "Multiple vehicles",
      "Champagne service",
      "Guest transport",
      "Formal chauffeurs",
      "Backup vehicles",
      "Flexible scheduling",
    ],
    faqs: [],
    relatedSlugs: ["limo-service", "party-bus", "airport-transfers"],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES[slug];
}

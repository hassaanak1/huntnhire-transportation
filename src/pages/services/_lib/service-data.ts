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
  CheckCircle,
  Crown,
  Sparkles,
  Calendar,
  Navigation,
  Phone,
  HeartHandshake,
  BadgeCheck,
  MapPin,
  Headphones,
  Camera,
  Gem,
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
      "https://images.unsplash.com/photo-1771775751121-3091d79073d4?auto=format&fit=crop&w=1920&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1741027072267-fa4e622dd918?auto=format&fit=crop&w=900&q=80",
    overview: [
      "When you need a luxury limousine service that combines elegance, reliability, and professionalism, Vortex Lmntirx delivers an unmatched experience. Our premium stretch limousines are the gold standard in luxury transportation, offering spacious interiors, top-shelf amenities, and professional chauffeurs who treat every ride as a VIP experience.",
      "Whether you're celebrating a milestone birthday, planning a romantic anniversary, attending a red-carpet gala, or simply want to elevate an ordinary evening into something extraordinary — our limo service transforms every journey into a first-class experience. From the moment your chauffeur opens the door, you'll know you've made the right choice.",
      "Our fleet of meticulously maintained stretch limousines features premium leather seating, ambient mood lighting, state-of-the-art entertainment systems, and complimentary refreshments. We service all major cities across the United States, providing door-to-door luxury that arrives on time, every time.",
    ],
    features: [
      {
        icon: Crown,
        title: "VIP Treatment",
        description:
          "Red carpet service with complimentary champagne, personalized greetings, and door-to-door luxury that makes every passenger feel like royalty.",
      },
      {
        icon: Award,
        title: "Professional Chauffeurs",
        description:
          "Background-checked, professionally trained drivers in formal attire. Our chauffeurs know every route and always arrive 15 minutes early.",
      },
      {
        icon: Star,
        title: "Premium Fleet",
        description:
          "Immaculately maintained stretch limousines with premium leather, ambient lighting, entertainment systems, and complimentary refreshments.",
      },
      {
        icon: Clock,
        title: "Always On Time",
        description:
          "Our GPS-tracked fleet and dedicated dispatch team ensure you never wait. Real-time tracking and proactive communication keep you informed.",
      },
      {
        icon: DollarSign,
        title: "Transparent Pricing",
        description:
          "No hidden fees or surge pricing. Get a clear, competitive quote upfront before you book. Premium luxury at prices that make sense.",
      },
      {
        icon: Shield,
        title: "Fully Insured",
        description:
          "Complete peace of mind with comprehensive insurance, DOT compliance, and an impeccable safety record spanning over 15 years of service.",
      },
    ],
    benefits: [
      "Available 24/7, 365 days a year",
      "Complimentary champagne and refreshments",
      "Red carpet arrival service",
      "Privacy partition for VIP guests",
      "Premium sound system with Bluetooth",
      "Climate-controlled comfort",
      "Free Wi-Fi on board",
      "Custom route planning",
    ],
    faqs: [
      {
        question: "How far in advance should I book a limo?",
        answer:
          "We recommend booking at least 48 hours in advance for standard reservations. For peak seasons (prom, New Year's Eve, wedding season), we suggest booking 2-4 weeks ahead. However, we do accommodate last-minute requests when availability permits.",
      },
      {
        question: "What is included in the limo rental price?",
        answer:
          "Our all-inclusive pricing covers the vehicle, professional chauffeur, fuel, gratuity, complimentary champagne, bottled water, and ice. There are no hidden fees — the price you're quoted is the price you pay.",
      },
      {
        question: "Can I customize the limo experience?",
        answer:
          "Absolutely! We offer custom decorations, specific beverage requests, custom music playlists, and special signage. Just let us know your preferences when booking and we'll handle the rest.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We offer free cancellation up to 48 hours before your scheduled pickup. Cancellations within 24-48 hours incur a 50% fee. Cancellations within 24 hours are non-refundable. We understand plans change and we're always happy to reschedule.",
      },
      {
        question: "How many passengers can a stretch limo accommodate?",
        answer:
          "Our standard stretch limousines comfortably seat 8-10 passengers. We also offer super-stretch models that accommodate up to 14 passengers. For larger groups, consider our party bus options.",
      },
      {
        question: "Do you service my area?",
        answer:
          "Vortex Lmntirx operates in all major metropolitan areas across the United States. We cover New York, Los Angeles, Chicago, Miami, Dallas, Atlanta, Las Vegas, and many more cities. Contact us to confirm service in your area.",
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
      "https://images.unsplash.com/photo-1631222193608-b887bb1f3c23?auto=format&fit=crop&w=1920&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1545185105-a81262517cf4?auto=format&fit=crop&w=900&q=80",
    overview: [
      "Looking for the ultimate party on wheels? Vortex Lmntirx party bus rentals transform any celebration into an unforgettable experience. Our luxury party buses are mobile nightclubs featuring state-of-the-art sound systems, mesmerizing LED lighting, full bar setups, and spacious dance floors that keep the energy going all night long.",
      "From birthday bashes and bachelor/bachelorette parties to prom nights and concert shuttles, our party buses are designed for groups who want to celebrate in style. Why settle for a cramped rideshare when you can roll through the city in a fully equipped luxury party bus with your entire crew?",
      "Every Vortex Lmntirx party bus comes with a professional chauffeur who handles the driving so your entire group can focus on having fun. Our fleet ranges from intimate 20-passenger buses to massive 40-passenger cruisers, all equipped with premium amenities and impeccably maintained for your safety and comfort.",
    ],
    features: [
      {
        icon: Music,
        title: "Premium Sound System",
        description:
          "Concert-quality surround sound with Bluetooth connectivity, AUX input, and built-in DJ booth. Control the playlist from your phone.",
      },
      {
        icon: Sparkles,
        title: "LED Light Show",
        description:
          "Programmable LED lighting that pulses to the beat, fiber optic ceilings, laser effects, and customizable color themes for any occasion.",
      },
      {
        icon: Wine,
        title: "Full Bar Setup",
        description:
          "Granite-top bars with ice wells, glassware, and coolers. Bring your own beverages or let us arrange a fully stocked bar for your event.",
      },
      {
        icon: Users,
        title: "Spacious Capacity",
        description:
          "From 20 to 40 passengers, our party buses feature open floor plans with comfortable seating, dance floors, and pole dancing areas.",
      },
      {
        icon: Shield,
        title: "Safe & Licensed",
        description:
          "Fully DOT compliant with comprehensive insurance. Our professional chauffeurs ensure you celebrate safely while they handle the road.",
      },
      {
        icon: Camera,
        title: "Photo-Ready Interior",
        description:
          "Instagram-worthy interiors with mirrored ceilings, VIP lounge seating, and dramatic lighting that makes every photo look amazing.",
      },
    ],
    benefits: [
      "Capacity for 20 to 40 passengers",
      "Bluetooth and AUX audio connectivity",
      "Programmable LED and laser lighting",
      "Complimentary ice and coolers",
      "Professional chauffeur included",
      "Multiple TV screens with HDMI",
      "Climate-controlled comfort",
      "Custom route and stop planning",
    ],
    faqs: [
      {
        question: "How many people can fit on a party bus?",
        answer:
          "Our party bus fleet ranges from 20-passenger mini party buses to 40-passenger mega cruisers. We'll help you select the right size for your group. We recommend booking slightly larger than your expected headcount for maximum comfort.",
      },
      {
        question: "Can we bring our own alcohol?",
        answer:
          "Yes! BYOB is welcome on all our party buses. We provide ice, coolers, and glassware. Just note that all passengers must be 21+ when alcohol is present. We can also arrange pre-stocked bar packages for an additional fee.",
      },
      {
        question: "What is the minimum rental time?",
        answer:
          "Our minimum rental is typically 3 hours. Most groups book 4-6 hour packages which allow plenty of time for bar hopping, club nights, or event transportation. We offer competitive hourly rates with discounts for extended rentals.",
      },
      {
        question: "Can we make multiple stops?",
        answer:
          "Absolutely! Multi-stop itineraries are our specialty. Bar crawls, restaurant hopping, club hopping — just provide your desired stops and we'll map the most efficient route. Changes during the ride are also accommodated.",
      },
      {
        question: "What happens if the party bus breaks down?",
        answer:
          "While extremely rare due to our rigorous maintenance program, we have a backup fleet ready at all times. In the unlikely event of a mechanical issue, we'll dispatch a replacement vehicle within 30 minutes at no additional cost.",
      },
      {
        question: "Can we decorate the party bus?",
        answer:
          "Yes! You're welcome to bring decorations like balloons, banners, and streamers. We ask that you avoid anything that could damage the interior (confetti, glitter, tape on walls). We also offer professional decoration packages.",
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
      "https://images.unsplash.com/photo-1765292784374-e061c5b3d111?auto=format&fit=crop&w=1920&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1604442132605-c36c123d2ba9?auto=format&fit=crop&w=900&q=80",
    overview: [
      "In the corporate world, first impressions are everything. Vortex Lmntirx executive corporate transportation ensures your team, clients, and VIP guests travel with the professionalism and prestige your brand demands. Our corporate limo service is trusted by Fortune 500 companies, law firms, and executives nationwide.",
      "From boardroom-to-airport transfers and client entertainment to multi-day conference shuttles and roadshow logistics, our dedicated corporate team handles every detail. We understand that in business, reliability isn't a luxury — it's a requirement. That's why our on-time rate exceeds 99.5%.",
      "Our corporate fleet includes executive sedans, luxury SUVs, and premium limousines — all equipped with Wi-Fi, power outlets, and privacy partitions so your team can stay productive on the move. Dedicated account managers, streamlined billing, and 24/7 dispatch make Vortex Lmntirx the smart choice for corporate transportation.",
    ],
    features: [
      {
        icon: BadgeCheck,
        title: "Dedicated Account Manager",
        description:
          "A single point of contact who knows your preferences, manages reservations, and ensures a seamless experience every time you book.",
      },
      {
        icon: Wifi,
        title: "Mobile Office",
        description:
          "Complimentary Wi-Fi, power outlets, and privacy partitions. Turn travel time into productive time with a quiet, comfortable workspace.",
      },
      {
        icon: Clock,
        title: "99.5% On-Time Rate",
        description:
          "GPS-tracked vehicles, proactive route optimization, and flight monitoring ensure your team never misses a meeting or connection.",
      },
      {
        icon: Navigation,
        title: "Flight Tracking",
        description:
          "We monitor your flights in real time. If your flight is early or delayed, we adjust pickup times automatically — no need to call.",
      },
      {
        icon: DollarSign,
        title: "Streamlined Billing",
        description:
          "Consolidated monthly invoicing, department codes, project billing, and expense report integration. Simplify your corporate travel spend.",
      },
      {
        icon: Users,
        title: "Multi-Vehicle Coordination",
        description:
          "Need 50 cars for a conference? Our logistics team coordinates multi-vehicle events with military precision. One call, every detail handled.",
      },
    ],
    benefits: [
      "Dedicated corporate account manager",
      "Monthly consolidated billing",
      "Real-time flight tracking",
      "Wi-Fi and power in every vehicle",
      "99.5% on-time guarantee",
      "Executive dress code for all chauffeurs",
      "Priority 24/7 dispatch line",
      "Custom corporate travel policies",
    ],
    faqs: [
      {
        question: "Do you offer corporate account rates?",
        answer:
          "Yes! We offer preferred pricing for corporate accounts with volume commitments. The more you ride, the more you save. Contact our corporate team for a customized rate proposal based on your projected usage.",
      },
      {
        question: "Can you handle large-scale corporate events?",
        answer:
          "Absolutely. We routinely manage transportation for conferences, product launches, and corporate retreats with 50-500+ attendees. Our logistics team will create a comprehensive ground transportation plan.",
      },
      {
        question: "How does corporate billing work?",
        answer:
          "We offer consolidated monthly invoicing with detailed trip reports. Each trip can be coded by department, project, or cost center. We integrate with major expense management platforms for seamless reconciliation.",
      },
      {
        question: "What vehicles are available for corporate travel?",
        answer:
          "Our corporate fleet includes Mercedes S-Class and BMW 7-Series sedans, Cadillac Escalade and Lincoln Navigator SUVs, Sprinter executive vans, and stretch limousines. All vehicles are current model year and impeccably maintained.",
      },
      {
        question: "Is there a minimum notice for bookings?",
        answer:
          "While we appreciate advance bookings, our 24/7 dispatch team can often accommodate same-day and even same-hour requests. Corporate accounts receive priority booking and guaranteed availability with 2 hours notice.",
      },
      {
        question: "Do your chauffeurs sign NDAs?",
        answer:
          "Yes. All our chauffeurs sign confidentiality agreements as standard. For executive-level clients and sensitive engagements, we can provide additional security clearance and enhanced background checks.",
      },
    ],
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
      "https://images.unsplash.com/photo-1679587833052-8f1ac182d85c?auto=format&fit=crop&w=1920&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1679587837163-61a88043076c?auto=format&fit=crop&w=900&q=80",
    overview: [
      "Skip the taxi lines and rideshare uncertainty. Vortex Lmntirx premium airport transfer service ensures you start and end every trip with the comfort, reliability, and luxury you deserve. Our airport limo service covers every major airport in the United States with meet-and-greet pickup and curbside drop-off.",
      "We take the stress out of airport travel with real-time flight monitoring. If your flight arrives early, your chauffeur will be there. If it's delayed, we adjust — automatically. No frantic phone calls, no waiting, no worrying. Just seamless door-to-airport-to-door luxury.",
      "Choose from executive sedans for solo business travelers, luxury SUVs for families with luggage, or stretch limousines for VIP arrivals. Every vehicle is stocked with complimentary water, mints, and charging cables. Your chauffeur will assist with luggage and ensure you arrive at your destination refreshed and on time.",
    ],
    features: [
      {
        icon: Plane,
        title: "Real-Time Flight Tracking",
        description:
          "We monitor your flight status in real time. Early arrivals, delays, gate changes — we adjust automatically so your ride is always ready.",
      },
      {
        icon: MapPin,
        title: "Meet & Greet Service",
        description:
          "Your chauffeur waits in arrivals holding a name sign. They assist with luggage and escort you directly to your vehicle — stress-free.",
      },
      {
        icon: Clock,
        title: "Complimentary Wait Time",
        description:
          "60 minutes of complimentary wait time for domestic flights, 90 minutes for international. We wait for you, not the other way around.",
      },
      {
        icon: Navigation,
        title: "All Major Airports",
        description:
          "We service JFK, LAX, ORD, MIA, DFW, ATL, LAS, SFO, and every major airport nationwide. Same premium service, coast to coast.",
      },
      {
        icon: DollarSign,
        title: "Flat-Rate Pricing",
        description:
          "No surge pricing, no metered rates. Get a flat-rate quote before you book so there are never any surprises on your final bill.",
      },
      {
        icon: Headphones,
        title: "24/7 Support",
        description:
          "Red-eye flights, crack-of-dawn departures, holiday travel — our dispatch team is available around the clock for any schedule.",
      },
    ],
    benefits: [
      "Flat-rate pricing with no surge fees",
      "60-90 minutes complimentary wait time",
      "Real-time flight status monitoring",
      "Meet and greet at arrivals terminal",
      "Complimentary luggage assistance",
      "All major US airports covered",
      "Child car seats available on request",
      "Complimentary water and charging cables",
    ],
    faqs: [
      {
        question: "What if my flight is delayed?",
        answer:
          "We monitor all flights in real time. If your flight is delayed, we automatically adjust your pickup time at no additional charge. You never need to call us — we'll be there when you land, no matter what time that is.",
      },
      {
        question: "How far in advance should I book an airport transfer?",
        answer:
          "We recommend booking at least 24 hours in advance. For peak travel periods (holidays, major events), booking 3-7 days ahead ensures availability. However, we can often accommodate same-day bookings for corporate accounts.",
      },
      {
        question: "Which airports do you service?",
        answer:
          "We cover every major airport in the United States including JFK, LaGuardia, Newark, LAX, O'Hare, Midway, Miami, Fort Lauderdale, DFW, Love Field, Hartsfield-Jackson Atlanta, Las Vegas McCarran, and many more.",
      },
      {
        question: "Is there a charge for wait time?",
        answer:
          "We provide 60 minutes of complimentary wait time for domestic flights and 90 minutes for international flights, starting from actual landing time. Additional wait time beyond that is billed at a reasonable per-minute rate.",
      },
      {
        question: "Can you accommodate large luggage or equipment?",
        answer:
          "Absolutely. Just let us know about oversized luggage, golf clubs, musical instruments, or special equipment when booking and we'll assign the appropriate vehicle. Our SUVs and vans handle any luggage situation with ease.",
      },
      {
        question: "Do you offer round-trip airport packages?",
        answer:
          "Yes! We offer discounted round-trip packages that include both pickup and drop-off. Frequent travelers can save even more with our corporate account and loyalty programs.",
      },
    ],
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
      "https://images.unsplash.com/photo-1639497366184-abc2260cca65?auto=format&fit=crop&w=1920&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1561100966-f6aa0145e8e6?auto=format&fit=crop&w=900&q=80",
    overview: [
      "Your wedding day deserves nothing less than perfection. Vortex Lmntirx wedding transportation service ensures that every arrival, every exit, and every moment in between is wrapped in elegance, romance, and flawless execution. We've been a trusted partner for thousands of weddings across the United States.",
      "From the bridal party's grand entrance to the couple's getaway car adorned with flowers and \"Just Married\" signage, our wedding coordinators work closely with you and your planner to orchestrate seamless transportation. We understand the timeline pressures, the photo opportunities, and the emotions of the day.",
      "Choose from our stunning collection of white stretch limousines, classic town cars, luxury SUV caravans, and vintage-inspired vehicles. Every wedding vehicle can be customized with floral arrangements, ribbons, champagne service, and red carpet arrivals. Because on your wedding day, every detail matters.",
    ],
    features: [
      {
        icon: HeartHandshake,
        title: "Dedicated Wedding Coordinator",
        description:
          "A personal coordinator works with you and your wedding planner to create a transportation timeline that fits every moment of your special day.",
      },
      {
        icon: Gem,
        title: "Custom Decorations",
        description:
          "Floral arrangements, ribbons, \"Just Married\" signage, custom color themes — we'll match your wedding aesthetic for a picture-perfect vehicle.",
      },
      {
        icon: Wine,
        title: "Champagne Toast",
        description:
          "Complimentary champagne toast for the bride and groom. Premium glassware, chilled bottles, and a beautifully presented celebration on wheels.",
      },
      {
        icon: Users,
        title: "Bridal Party Fleet",
        description:
          "Coordinate vehicles for bridesmaids, groomsmen, parents, and guests. One contact, one plan, every vehicle on time and on theme.",
      },
      {
        icon: Calendar,
        title: "Rehearsal & Reception",
        description:
          "We cover the entire wedding weekend — rehearsal dinner transportation, ceremony arrivals, reception shuttles, and after-party transfers.",
      },
      {
        icon: Camera,
        title: "Photo-Ready Vehicles",
        description:
          "Our vehicles are detailed and dressed to be photo-ready. Interior and exterior, every angle is Instagram-worthy for your wedding album.",
      },
    ],
    benefits: [
      "Dedicated wedding transportation coordinator",
      "Custom floral and ribbon decorations",
      "Complimentary champagne for the couple",
      "Red carpet arrival service",
      "Multiple vehicle coordination",
      "Rehearsal dinner transportation included",
      "Professional chauffeurs in formal attire",
      "Backup vehicle guarantee",
    ],
    faqs: [
      {
        question: "How far in advance should I book wedding transportation?",
        answer:
          "For weddings, we recommend booking 3-6 months in advance, especially for peak season (May-October). Popular dates like Saturday evenings book quickly. Early booking also gives us time to plan custom decorations and coordinate with your wedding planner.",
      },
      {
        question: "Can you coordinate transportation for the entire wedding?",
        answer:
          "Yes! We specialize in full-wedding transportation packages including rehearsal dinner, ceremony, cocktail hour shuttles, reception transportation, and the grand getaway. We can also provide guest shuttle services between venues and hotels.",
      },
      {
        question: "What vehicles are available for weddings?",
        answer:
          "Our wedding fleet includes white stretch limousines, classic black town cars, luxury SUV caravans, Sprinter vans for bridal parties, and party buses for wedding party transportation. All vehicles can be customized with decorations.",
      },
      {
        question: "Do you provide decorations for the wedding vehicle?",
        answer:
          "Yes! We offer complimentary basic decoration (ribbons and signage). Premium decoration packages include fresh floral arrangements, custom color themes, \"Just Married\" banners, and champagne setups. We'll coordinate with your florist for a cohesive look.",
      },
      {
        question: "What if the wedding timeline changes on the day?",
        answer:
          "Weddings are dynamic and we understand that. Our chauffeurs stay on-site and flexible throughout the day. We build buffer time into every wedding timeline and our dedicated coordinator is on call for any last-minute changes.",
      },
      {
        question: "Is there a package deal for multiple wedding vehicles?",
        answer:
          "Absolutely! We offer comprehensive wedding packages with significant savings when booking 3+ vehicles. Our wedding coordinator will create a custom proposal based on your specific needs, timeline, and budget.",
      },
    ],
    relatedSlugs: ["limo-service", "party-bus", "airport-transfers"],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES[slug];
}

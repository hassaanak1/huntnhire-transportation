import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  Phone,
  ChevronRight,
  CheckCircle,
  MapPin,
  Trophy,
  Users,
  Plane,
  Shield,
  Clock,
  Star,
  Briefcase,
  Bus,
  Music,
  Zap,
  Car,
} from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta.ts";
import { BreadcrumbSchema } from "@/components/seo/structured-data.tsx";
import heroImg from "@/assets/events/fifa-2026/hero.png";
import matchDayImg from "@/assets/events/fifa-2026/match-day-transportation.png";

const HERO_IMAGE = heroImg;
const WHY_IMAGE =
  "https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0";
const PARTY_BUS_IMAGE =
  "https://jaclimo.com/wp-content/uploads/2024/12/Party-Bus.jpg";
const CORPORATE_IMAGE =
  "https://images.unsplash.com/photo-1632656269435-77b10f3fcbc6?q=80&w=1470&auto=format&fit=crop";
const CHARTER_IMAGE =
  "https://www.bosslimos.ca/photos/freightliner-m2-luxury-limo-bus-1.jpg";
const AIRPORT_IMAGE =
  "https://luxvan.com.au/wp-content/uploads/2026/02/luxury-airport-transfer-van-australia-luxvan.png";

const BASE_URL = "https://huntnhire.co";

const WHY_CHOOSE_ITEMS = [
  "Professional Chauffeurs",
  "Luxury Fleet Maintained to the Highest Standards",
  "Airport Transfers from DFW & Love Field",
  "VIP Match Transportation",
  "Corporate Event Transportation",
  "Large Group & Fan Transportation",
  "Point-to-Point Service",
  "Hourly Charters Available",
  "24/7 Customer Support",
  "Licensed & Insured Transportation Provider",
];

const PARTY_BUS_FEATURES = [
  "Premium Sound Systems",
  "LED Mood Lighting",
  "Luxury Leather Seating",
  "Bluetooth Connectivity",
  "Beverage Areas",
  "Spacious Interiors",
];

const PARTY_BUS_SIZES = [
  "16 Passenger Party Bus",
  "20 Passenger Party Bus",
  "30 Passenger Party Bus",
  "40 Passenger Party Bus",
];

const CORPORATE_VEHICLES = [
  "Executive Sprinter Vans",
  "Luxury SUVs",
  "Executive Sedans",
  "Corporate Shuttle Services",
  "VIP Transportation Management",
];

const CORPORATE_IDEAL = [
  "Sponsors",
  "Corporate Hospitality Events",
  "Business Meetings",
  "Networking Events",
  "Executive Travel",
];

const CHARTER_SIZES = [
  "30 Passenger Charter Bus",
  "40 Passenger Charter Bus",
  "50 Passenger Charter Bus",
];

const CHARTER_GROUPS = [
  "Sports Fans",
  "Tour Groups",
  "Corporate Teams",
  "International Visitors",
  "Travel Agencies",
];

const MATCH_DAY_IDEAL = [
  "Soccer Fans",
  "International Visitors",
  "Family Groups",
  "Supporter Clubs",
  "VIP Guests",
];

const AIRPORT_SERVICES = [
  "Meet & Greet Service",
  "Flight Monitoring",
  "Group Airport Transfers",
  "VIP Airport Transportation",
];

const SERVED_CITIES = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Frisco",
  "Plano",
  "Irving",
  "Grapevine",
  "McKinney",
  "Richardson",
  "Southlake",
  "Allen",
  "Denton",
];

const SERVICE_HIGHLIGHTS = [
  { icon: Trophy, label: "VIP Match Transport" },
  { icon: Users, label: "Group Solutions" },
  { icon: Plane, label: "Airport Transfers" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Star, label: "Luxury Fleet" },
  { icon: Briefcase, label: "Corporate Events" },
  { icon: Bus, label: "Charter Buses" },
  { icon: Music, label: "Party Bus Rentals" },
  { icon: Zap, label: "Surge-Free Pricing" },
  { icon: Car, label: "Executive Sedans" },
  { icon: MapPin, label: "DFW Metroplex" },
];

export default function Fifa2026Page() {
  usePageMeta({
    title:
      "FIFA World Cup 2026 Limo & Party Bus Rentals Dallas | Hunt&Hire",
    description:
      "Book luxury limos, party buses, charter buses, and executive transportation for FIFA World Cup 2026 in Dallas, Arlington, and Fort Worth. Professional chauffeurs, airport transfers, and VIP transportation available.",
    keywords:
      "FIFA World Cup 2026 transportation Dallas, limo rental FIFA 2026, party bus Dallas FIFA, executive transportation World Cup, airport transfer DFW FIFA 2026",
    canonical: `${BASE_URL}/fifa-2026`,
  });

  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          {
            name: "FIFA World Cup 2026 Transportation",
            url: `${BASE_URL}/fifa-2026`,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative min-h-[65vh] sm:min-h-[75vh] overflow-hidden flex items-center">
          <img
            src={HERO_IMAGE}
            alt="FIFA World Cup 2026 luxury transportation Dallas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="size-3" />
                <span className="text-primary">FIFA World Cup 2026</span>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 px-4 py-1.5 mb-6"
              >
                <Trophy className="size-4 text-primary" />
                <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
                  Special Event Transportation — Dallas, TX
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] max-w-4xl"
              >
                Arrive Like a{" "}
                <span className="text-primary italic">Champion</span>
                <br />
                at FIFA World Cup 2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Luxury Limos, Party Buses & Group Transportation for FIFA World
                Cup 2026 in Dallas, TX. Serving DFW, Fort Worth, Arlington, and
                the entire DFW Metroplex.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link to="/book">
                  <Button
                    size="lg"
                    className="rounded-none text-sm sm:text-base px-8 py-6 font-semibold uppercase tracking-wider"
                  >
                    Reserve Your Ride
                    <ChevronRight className="size-5" />
                  </Button>
                </Link>
                <a href="tel:+12142538405">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto rounded-none text-sm sm:text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10 font-semibold uppercase tracking-wider"
                  >
                    <Phone className="size-5" />
                    (214) 253-8405
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights Grid */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {SERVICE_HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground font-medium leading-tight">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Hunt&Hire */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Why Hunt&Hire
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Hunt&Hire During FIFA World Cup 2026?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
                With unprecedented demand for transportation throughout DFW
                during the World Cup, experience the difference of a licensed,
                professional luxury provider committed to your comfort and
                on-time arrival.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/book">
                  <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                    Request a Quote
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
                <a href="tel:+12142538405">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold px-8"
                  >
                    <Phone className="size-4" />
                    (214) 253-8405
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={WHY_IMAGE}
                  alt="Hunt&Hire luxury fleet FIFA World Cup 2026"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Match Day Transportation */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={matchDayImg}
                  alt="Match day transportation Dallas stadium FIFA 2026"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Game Day Service
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Match Day Transportation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Avoid parking headaches, traffic congestion, and rideshare surge
                pricing. Arrive at the stadium comfortably and on time with our
                professional chauffeurs.
              </p>
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Ideal For:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {MATCH_DAY_IDEAL.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                  Book Match Day Transport
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Party Bus Rentals */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Celebration Transport
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Party Bus Rentals for FIFA World Cup Celebrations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Keep the celebration going before and after the match. Our
                luxury party buses are perfect for fan groups, bachelor parties,
                corporate outings, and match day celebrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Features Include:
                  </p>
                  <div className="space-y-2">
                    {PARTY_BUS_FEATURES.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Available Sizes:
                  </p>
                  <div className="space-y-2">
                    {PARTY_BUS_SIZES.map((size) => (
                      <div key={size} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                  Book a Party Bus
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PARTY_BUS_IMAGE}
                  alt="Luxury party bus rental FIFA World Cup 2026 Dallas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Transportation */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={CORPORATE_IMAGE}
                  alt="Corporate executive transportation FIFA World Cup 2026 Dallas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Business Travel
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Corporate FIFA Transportation Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Hosting clients or executives during the World Cup? We provide
                premium corporate transportation solutions for sponsors,
                hospitality events, and executive travel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    We Provide:
                  </p>
                  <div className="space-y-2">
                    {CORPORATE_VEHICLES.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Ideal For:
                  </p>
                  <div className="space-y-2">
                    {CORPORATE_IDEAL.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                  Get Corporate Quote
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Charter Bus */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Group Transportation
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Charter Bus Transportation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Traveling with a large group? Our charter buses accommodate
                sports fans, tour groups, corporate teams, and international
                visitors traveling throughout DFW for the World Cup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Available Options:
                  </p>
                  <div className="space-y-2">
                    {CHARTER_SIZES.map((size) => (
                      <div key={size} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Who We Serve:
                  </p>
                  <div className="space-y-2">
                    {CHARTER_GROUPS.map((group) => (
                      <div key={group} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {group}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                  Book Charter Transportation
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={CHARTER_IMAGE}
                  alt="Charter bus group transportation FIFA World Cup 2026 Dallas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airport Transportation */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={AIRPORT_IMAGE}
                  alt="Airport luxury transportation Dallas FIFA 2026"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full border border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Airport Transfers
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Airport Transportation During FIFA World Cup 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Flying into Dallas for the tournament? We provide seamless
                transportation from both Dallas airports to your hotel, stadium,
                or event venue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Serving Both Airports:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Dallas Fort Worth International Airport (DFW)",
                      "Dallas Love Field Airport (DAL)",
                    ].map((airport) => (
                      <div key={airport} className="flex items-start gap-2">
                        <Plane className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {airport}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                    Services Include:
                  </p>
                  <div className="space-y-2">
                    {AIRPORT_SERVICES.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
                  Book Airport Transfer
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              DFW Coverage
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Areas We Serve
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Hunt&Hire proudly serves Dallas, Fort Worth, and all surrounding
              DFW communities during FIFA World Cup 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SERVED_CITIES.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center gap-2 p-4 bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <MapPin className="size-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium truncate">
                  {city}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-primary font-medium mt-6">
            + All Surrounding DFW Communities
          </p>
        </div>
      </section>

      {/* Reserve Early CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="FIFA World Cup 2026 luxury transportation Dallas"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 px-4 py-1.5 mb-6">
              <Trophy className="size-4 text-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
                Limited Availability
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Reserve Your FIFA World Cup{" "}
              <span className="text-primary italic">Transportation Early</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              The FIFA World Cup 2026 is expected to create unprecedented demand
              for luxury transportation throughout Texas. Vehicle availability
              will become limited as match dates approach. Reserve your
              limousine, party bus, charter bus, or executive transportation
              today to secure the best vehicle for your group.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book">
                <Button
                  size="lg"
                  className="rounded-none text-sm sm:text-base px-10 py-6 font-semibold uppercase tracking-wider"
                >
                  Request a Quote Today
                  <ChevronRight className="size-5" />
                </Button>
              </Link>
              <a href="tel:+12142538405">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none text-sm sm:text-base px-10 py-6 border border-primary/30 text-primary hover:bg-primary/10 font-semibold uppercase tracking-wider"
                >
                  <Phone className="size-5" />
                  Call Now: (214) 253-8405
                </Button>
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground uppercase tracking-wider">
              No obligation &bull; Free estimates &bull; Instant confirmation
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

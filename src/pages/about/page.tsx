import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  Shield,
  Award,
  Heart,
  Clock,
  Users,
  Star,
  MapPin,
  Phone,
  ChevronRight,
  Target,
  Eye,
  Gem,
} from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta.ts";
import { OrganizationSchema } from "@/components/seo/structured-data.tsx";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1630705318048-184e6193d4ae?auto=format&fit=crop&w=1920&q=80";
const STORY_IMAGE =
  "https://images.unsplash.com/photo-1667846390709-d2104b2c8c66?auto=format&fit=crop&w=900&q=80";

const COMPANY_STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "200+", label: "Premium Vehicles" },
  { value: "500K+", label: "Rides Completed" },
  { value: "50+", label: "Cities Nationwide" },
] as const;

const CORE_VALUES = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every vehicle undergoes rigorous inspections. Every chauffeur passes comprehensive background checks. Every ride is fully insured. Your safety is non-negotiable.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "From the polish on our vehicles to the press of our chauffeurs' suits — we obsess over every detail so you experience nothing but excellence.",
  },
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description:
      "Luxury isn't just about the vehicle. It's about how we make you feel. We train our team to anticipate needs and exceed expectations at every turn.",
  },
  {
    icon: Clock,
    title: "Punctual Precision",
    description:
      "Our 99.5% on-time rate speaks volumes. GPS-tracked vehicles, proactive route optimization, and dedicated dispatch ensure you're never left waiting.",
  },
  {
    icon: Star,
    title: "Client-Centric",
    description:
      "Your preferences, your schedule, your vision. We build every experience around you — from first call to final destination.",
  },
  {
    icon: Gem,
    title: "Integrity Always",
    description:
      "Transparent pricing, honest communication, and confidentiality you can trust. We earn your loyalty through every interaction.",
  },
] as const;

const MILESTONES = [
  {
    year: "2009",
    title: "Founded in New York",
    description:
      "Vortex Lmntirx launches with a fleet of 5 executive sedans and a vision to redefine luxury transportation in the tri-state area.",
  },
  {
    year: "2012",
    title: "Expanded to 10 Cities",
    description:
      "Rapid growth driven by word-of-mouth referrals takes us to Los Angeles, Chicago, Miami, Dallas, and beyond.",
  },
  {
    year: "2015",
    title: "Corporate Division Launched",
    description:
      "Dedicated corporate accounts program introduced with streamlined billing, dedicated account managers, and Fortune 500 partnerships.",
  },
  {
    year: "2018",
    title: "200-Vehicle Milestone",
    description:
      "Fleet reaches 200 vehicles across sedans, SUVs, limousines, party buses, and executive vans — all current model year.",
  },
  {
    year: "2021",
    title: "Technology Overhaul",
    description:
      "Launch of real-time GPS tracking, flight monitoring integration, and our proprietary dispatch system for seamless operations.",
  },
  {
    year: "2024",
    title: "50+ Cities Nationwide",
    description:
      "Service now available in over 50 major metropolitan areas coast to coast, making Vortex Lmntirx a true national brand.",
  },
] as const;

const LEADERSHIP = [
  {
    name: "Alexander Voss",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1630705337159-7b95f34a9db5?auto=format&fit=crop&w=400&q=80",
    bio: "15+ years in luxury hospitality. Former concierge at The Ritz-Carlton before founding Vortex Lmntirx with a vision of redefining ground transportation.",
  },
  {
    name: "Victoria Chen",
    role: "VP of Operations",
    image:
      "https://images.unsplash.com/photo-1672909547926-cb81922f86bb?auto=format&fit=crop&w=400&q=80",
    bio: "Former logistics director at a Fortune 100 company. Oversees fleet operations, dispatch, and our industry-leading 99.5% on-time rate.",
  },
  {
    name: "Marcus Cole",
    role: "Director of Client Relations",
    image:
      "https://images.unsplash.com/photo-1630215195671-fcc845a7511b?auto=format&fit=crop&w=400&q=80",
    bio: "Hospitality veteran with a passion for client experience. Leads our corporate accounts team and wedding coordination division.",
  },
] as const;

function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Professional chauffeur with luxury vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            About Vortex Lmntirx
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Where Luxury Meets{" "}
            <span className="text-primary">Precision</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For over 15 years, we have set the standard for premium ground
            transportation — one impeccable ride at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={STORY_IMAGE}
                alt="Vortex Lmntirx chauffeur"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 hidden lg:block">
              <p className="text-primary-foreground font-serif text-3xl font-bold">
                15+
              </p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                Years
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built on a Promise of{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vortex Lmntirx was founded in 2009 with a simple belief: luxury
                transportation should be flawless, reliable, and accessible to
                everyone who demands the best. What started as a fleet of five
                executive sedans in New York has grown into a nationwide
                operation spanning 50+ cities with over 200 premium vehicles.
              </p>
              <p>
                Our founder, Alexander Voss, spent years in the luxury
                hospitality industry and noticed a glaring gap — ground
                transportation hadn't kept pace with the standards of five-star
                hotels and first-class air travel. He set out to change that.
              </p>
              <p>
                Today, Vortex Lmntirx is trusted by Fortune 500 executives,
                wedding planners, event coordinators, and discerning individuals
                who refuse to settle. We've completed over 500,000 rides with a
                99.5% on-time rate and a 4.9-star average rating.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-3">
                <div className="shrink-0 mt-1">
                  <Target className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">
                    Our Mission
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    To deliver luxury transportation that is as reliable as it
                    is extraordinary — every ride, every time.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 mt-1">
                  <Eye className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">
                    Our Vision
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    To be America's most trusted and admired luxury ground
                    transportation company.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            What Drives Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make, every driver we hire,
            and every experience we deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            The People Behind the Brand
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A team of industry veterans united by a shared obsession with
            exceptional service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {person.name}
                </h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-3">
                  {person.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Key <span className="text-primary">Milestones</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <span className="text-primary font-serif text-xl font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for alternation */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const cities = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Miami",
    "Dallas",
    "Atlanta",
    "Las Vegas",
    "San Francisco",
    "Washington DC",
    "Boston",
    "Seattle",
    "Denver",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Nationwide Coverage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            We Go Where <span className="text-primary">You Go</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium transportation available in all major metropolitan areas
            across the United States — with more cities added every quarter.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 p-4 bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <MapPin className="size-4 text-primary shrink-0" />
              <span className="text-sm text-foreground font-medium truncate">
                {city}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-primary font-medium mt-6">
          + All Major U.S. Cities
        </p>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Ready to Experience the{" "}
          <span className="text-primary">Difference?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Whether it's your first ride or your five hundredth, we promise the
          same thing: an experience that exceeds your expectations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book">
            <Button
              size="lg"
              className="rounded-none uppercase tracking-wider text-sm font-semibold px-10"
            >
              Book Your Ride
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </Link>
          <a
            href="tel:+18887778989"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Phone className="size-4" />
            (888) 777-8989
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  usePageMeta({
    title: "About Vortex Lmntirx | 15+ Years of Premium Luxury Transportation",
    description:
      "Learn about Vortex Lmntirx — founded in 2009, serving 50+ US cities with 200+ luxury vehicles. Meet our leadership team and discover our commitment to excellence.",
    keywords:
      "about Vortex Lmntirx, luxury transportation company, limousine company, corporate transportation provider",
  });

  return (
    <main>
      <OrganizationSchema />
      <AboutHero />
      <StatsBar />
      <OurStory />
      <CoreValues />
      <Leadership />
      <Timeline />
      <ServiceAreas />
      <AboutCta />
    </main>
  );
}

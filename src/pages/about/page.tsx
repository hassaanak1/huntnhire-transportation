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
      "Every journey begins with safety. Our vehicles are routinely inspected, and our chauffeurs are carefully vetted to ensure every ride is secure, reliable, and worry-free.",
  },
  {
    icon: Award,
    title: "Exceptional Standards",
    description:
      "We hold ourselves to uncompromising standards in every detail — from vehicle presentation to chauffeur professionalism — ensuring a consistently refined experience.",
  },
  {
    icon: Heart,
    title: "Thoughtful Service",
    description:
      "We believe true luxury lies in care. Our team focuses on anticipating needs and delivering a service experience that feels personal, warm, and effortless.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "Punctuality is at the core of our operations. With advanced routing and real-time coordination, we make sure every pickup and drop-off happens exactly when expected.",
  },
  {
    icon: Star,
    title: "Experience Focused",
    description:
      "Every ride is designed around you. From preferences to scheduling, we tailor each detail to deliver a seamless and enjoyable journey.",
  },
  {
    icon: Gem,
    title: "Trust & Transparency",
    description:
      "We operate with honesty and clarity at every step — fair pricing, open communication, and complete respect for your privacy.",
  },
] as const;

const MILESTONES = [
  {
    year: "2009",
    title: "Company Established in New York",
    description:
      "HuntnHire began with a small fleet of executive sedans, built on a vision to elevate the standard of luxury ground transportation.",
  },
  {
    year: "2012",
    title: "Regional Expansion Begins",
    description:
      "Growing demand and client trust helped us expand into major U.S. cities including Los Angeles, Chicago, Miami, and Dallas.",
  },
  {
    year: "2015",
    title: "Corporate Services Introduced",
    description:
      "We launched dedicated corporate travel solutions with streamlined billing, account management, and enterprise-level partnerships.",
  },
  {
    year: "2018",
    title: "Fleet Growth Milestone",
    description:
      "Our fleet expanded to over 200 luxury vehicles, covering sedans, SUVs, limousines, and executive transport options nationwide.",
  },
  {
    year: "2021",
    title: "Technology Enhancement",
    description:
      "We introduced real-time tracking, smarter dispatch systems, and flight-aware scheduling to improve coordination and reliability.",
  },
  {
    year: "2024",
    title: "Nationwide Presence Achieved",
    description:
      "HuntnHire now operates in more than 50 cities across the United States, serving clients coast to coast with consistent excellence.",
  },
] as const;

const LEADERSHIP = [
  {
    name: "Alexander Voss",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1630705337159-7b95f34a9db5?auto=format&fit=crop&w=400&q=80",
    bio: "A hospitality professional with over 15 years of experience, Alexander founded HuntnHire with a mission to redefine premium ground transportation through consistency and care.",
  },
  {
    name: "Victoria Chen",
    role: "VP of Operations",
    image:
      "https://images.unsplash.com/photo-1672909547926-cb81922f86bb?auto=format&fit=crop&w=400&q=80",
    bio: "Victoria brings extensive logistics expertise from leading global firms, overseeing operations to ensure precision, efficiency, and dependable service delivery.",
  },
  {
    name: "Marcus Cole",
    role: "Director of Client Relations",
    image:
      "https://images.unsplash.com/photo-1630215195671-fcc845a7511b?auto=format&fit=crop&w=400&q=80",
    bio: "With a strong background in luxury hospitality, Marcus leads client experience initiatives, ensuring every interaction reflects care and attention to detail.",
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
            About HuntnHire
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Redefining Luxury <span className="text-primary">Travel</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For more than 15 years, we’ve been committed to delivering smooth,
            reliable, and refined transportation experiences across the United
            States.
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
                alt="HuntnHire chauffeur"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 hidden lg:block">
              <p className="text-primary-foreground font-serif text-3xl font-bold">
                15+
              </p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                Years
              </p>
            </div>
          </motion.div>

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
              Built on a Foundation of{" "}
              <span className="text-primary">Trust</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HuntnHire started with a simple goal — to make luxury
                transportation more dependable and accessible. From a small
                beginning in New York, we’ve grown into a nationwide service
                trusted across major cities.
              </p>
              <p>
                Our founder recognized early on that clients deserved more than
                just transportation — they deserved consistency,
                professionalism, and peace of mind with every ride.
              </p>
              <p>
                Today, we proudly serve individuals, businesses, and event
                clients across the country, delivering hundreds of thousands of
                rides with a strong reputation for reliability and service
                quality.
              </p>
            </div>

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
                    To deliver dependable luxury transportation with a focus on
                    comfort, safety, and consistency.
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
                    To be the most trusted name in premium ground transportation
                    across the United States.
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
            These principles shape how we operate, how we serve, and how we
            continuously improve.
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
            A dedicated team focused on delivering consistent excellence in
            every aspect of our service.
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
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

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
            Premium transportation available across major U.S. cities, ensuring
            reliable service wherever your journey takes you.
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
          Every ride is an opportunity to deliver something better — a smooth,
          comfortable, and dependable experience from start to finish.
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
            href="tel:+12108019909"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Phone className="size-4" />
            (210) 801-9909
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  usePageMeta({
    title: "About HuntnHire | 15+ Years of Premium Luxury Transportation",
    description:
      "Learn about HuntnHire — founded in 2009, serving 50+ US cities with 200+ luxury vehicles. Meet our leadership team and discover our commitment to excellence.",
    keywords:
      "about HuntnHire, luxury transportation company, limousine company, corporate transportation provider",
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

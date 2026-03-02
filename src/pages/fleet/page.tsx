import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Users,
  Briefcase,
  ChevronRight,
  Phone,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils.ts";
import { FLEET_VEHICLES, FLEET_CATEGORIES } from "./_lib/fleet-data.ts";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1764605206511-7cb61cd4b916?auto=format&fit=crop&w=1920&q=80";

function FleetHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury fleet vehicles"
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
            Our Fleet
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            A Vehicle for Every{" "}
            <span className="text-primary">Occasion</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From executive sedans to party buses, every vehicle in our fleet is
            meticulously maintained, fully insured, and equipped with premium
            amenities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FleetFilter({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      <SlidersHorizontal className="size-4 text-muted-foreground mr-2 hidden sm:block" />
      <button
        onClick={() => onSelect("All")}
        className={cn(
          "px-5 py-2 text-sm uppercase tracking-wider font-medium border transition-all duration-300",
          active === "All"
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary",
        )}
      >
        All Vehicles
      </button>
      {FLEET_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "px-5 py-2 text-sm uppercase tracking-wider font-medium border transition-all duration-300",
            active === cat
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function FleetGrid({ filter }: { filter: string }) {
  const vehicles =
    filter === "All"
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((v) => v.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {vehicles.map((vehicle, i) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-background/90 text-foreground backdrop-blur-sm text-xs uppercase tracking-wider"
              >
                {vehicle.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              {vehicle.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {vehicle.description}
            </p>

            {/* Specs */}
            <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="size-4 text-primary" />
                <span>{vehicle.passengers}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="size-4 text-primary" />
                <span>{vehicle.luggage}</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {vehicle.amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <amenity.icon className="size-3.5 text-primary shrink-0" />
                  <span className="truncate">{amenity.label}</span>
                </div>
              ))}
            </div>

            {/* Ideal For */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {vehicle.idealFor.map((use) => (
                <span
                  key={use}
                  className="text-[11px] text-muted-foreground bg-secondary px-2 py-1 uppercase tracking-wider"
                >
                  {use}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link to="/book">
              <Button
                className="w-full rounded-none uppercase tracking-wider text-xs font-semibold"
              >
                Reserve This Vehicle
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function FleetCta() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Not Sure Which Vehicle <span className="text-primary">Fits?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Our transportation specialists will help you choose the perfect
          vehicle for your event, group size, and budget. Consultations are
          always complimentary.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book">
            <Button
              size="lg"
              className="rounded-none uppercase tracking-wider text-sm font-semibold px-10"
            >
              Get a Free Quote
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

function FleetTrust() {
  const stats = [
    { value: "200+", label: "Vehicles" },
    { value: "15+", label: "Years of Service" },
    { value: "50+", label: "Cities Covered" },
    { value: "99.5%", label: "On-Time Rate" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
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

export default function FleetPage() {
  usePageMeta({
    title: "Our Premium Fleet | Executive Sedans, Limos & Party Buses | Vortex Lmntirx",
    description:
      "Browse the Vortex Lmntirx luxury fleet: executive sedans, stretch limousines, SUVs, Sprinter vans, and party buses. 200+ vehicles, all current model year, fully insured.",
    keywords:
      "luxury fleet, limousine fleet, party bus fleet, executive sedan rental, stretch limo rental, Vortex Lmntirx vehicles",
  });

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main>
      <FleetHero />
      <FleetTrust />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore Our <span className="text-primary">Fleet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every vehicle is current model year, meticulously detailed, and
              equipped with premium amenities for your comfort and safety.
            </p>
          </div>
          <FleetFilter active={activeFilter} onSelect={setActiveFilter} />
          <FleetGrid filter={activeFilter} />
        </div>
      </section>
      <FleetCta />
    </main>
  );
}

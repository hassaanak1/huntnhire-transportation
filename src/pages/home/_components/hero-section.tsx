import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Phone, ChevronRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1607332623489-e8ddd788072d?auto=format&fit=crop&w=1920&q=80";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Premium luxury limousine service"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-primary uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-6"
          >
            Premium Luxury Transportation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] text-balance"
          >
            Arrive in{" "}
            <span className="text-primary italic">Luxury.</span>
            <br />
            Travel in{" "}
            <span className="text-primary italic">Style.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            className="mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Experience unmatched elegance with our premium limousine and party
            bus services. Professional chauffeurs, impeccable vehicles, and
            service that exceeds every expectation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book">
              <Button
                size="lg"
                className="rounded-none text-sm sm:text-base px-8 py-6 font-semibold uppercase tracking-wider"
              >
                Book Your Ride
                <ChevronRight className="size-5" />
              </Button>
            </Link>
            <a href="tel:+12108019909">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto rounded-none text-sm sm:text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10 font-semibold uppercase tracking-wider"
              >
                <Phone className="size-5" />
                (210) 801-9909
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Happy Clients" },
              { value: "200+", label: "Premium Vehicles" },
              { value: "24/7", label: "Availability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

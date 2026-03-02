import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Phone, ChevronRight } from "lucide-react";

const INTERIOR_IMAGE =
  "https://images.unsplash.com/photo-1753183514606-3aa17d649872?auto=format&fit=crop&w=1920&q=80";

export default function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={INTERIOR_IMAGE}
          alt="Luxury vehicle interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Gold line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Ready to Experience the Difference?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your Luxury Ride{" "}
            <span className="text-primary italic">Awaits</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Whether it{"'"}s a corporate event, wedding, airport transfer, or a
            night on the town — we{"'"}re here to make it extraordinary.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book">
              <Button
                size="lg"
                className="rounded-none text-sm sm:text-base px-10 py-6 font-semibold uppercase tracking-wider"
              >
                Get an Instant Quote
                <ChevronRight className="size-5" />
              </Button>
            </Link>
            <a href="tel:+18887778989">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-none text-sm sm:text-base px-10 py-6 border border-primary/30 text-primary hover:bg-primary/10 font-semibold uppercase tracking-wider"
              >
                <Phone className="size-5" />
                Call (888) 777-8989
              </Button>
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground uppercase tracking-wider">
            No obligation &bull; Free estimates &bull; Instant confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

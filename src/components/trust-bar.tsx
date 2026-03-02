import { motion } from "motion/react";
import { Shield, Star, Clock, Award } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Star, label: "4.9★ Average Rating" },
  { icon: Shield, label: "Fully Licensed & Insured" },
  { icon: Clock, label: "24/7 Availability" },
  { icon: Award, label: "15+ Years of Excellence" },
] as const;

/**
 * A slim trust banner displayed below the hero on the homepage.
 * Reinforces credibility and social proof above the fold.
 */
export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-primary/5 border-y border-primary/10 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80"
            >
              <item.icon className="size-4 text-primary shrink-0" />
              <span className="font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

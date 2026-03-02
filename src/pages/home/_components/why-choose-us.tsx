import { motion } from "motion/react";
import { Shield, Clock, Award, DollarSign } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "Professional Chauffeurs",
    description:
      "Every driver is background-checked, professionally trained, and dressed impeccably. They know every route and always arrive early.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Whether it's a 3 AM airport pickup or a midnight event, our team is available around the clock, 365 days a year.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Complete peace of mind with full DOT compliance, comprehensive insurance, and an impeccable safety record spanning 15+ years.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surge pricing. Get a clear, competitive quote upfront. Premium luxury doesn't have to break the bank.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
            The Vortex Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Vortex Lmntirx
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            We don{"'"}t just provide transportation — we deliver an experience.
            Here{"'"}s what sets us apart from the rest.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group text-center p-8 bg-card border border-border rounded hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <reason.icon className="size-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

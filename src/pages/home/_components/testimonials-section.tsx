import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { StructuredData } from "@/components/seo/structured-data.tsx";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Wedding Client",
    rating: 5,
    text: "Vortex Lmntirx made our wedding day absolutely magical. The white stretch limo was immaculate, and our chauffeur was incredibly professional and attentive. Every detail was perfect.",
  },
  {
    name: "Michael Reynolds",
    role: "Corporate Account Manager",
    rating: 5,
    text: "We use Vortex for all our corporate events and executive travel. Their reliability and professionalism are unmatched. Our executives always arrive in style and on time.",
  },
  {
    name: "Jessica Lee",
    role: "Birthday Celebration",
    rating: 5,
    text: "The party bus was absolutely incredible! Our group of 25 had the time of our lives. The LED lighting, the sound system, the space — everything was beyond perfect.",
  },
] as const;

function ReviewSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vortex Lmntirx",
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2847",
      bestRating: "5",
    },
  };
  return <StructuredData data={data} />;
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <ReviewSchema />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Don{"'"}t just take our word for it. Here{"'"}s what our valued
            clients have to say about their Vortex Lmntirx experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-8 bg-background border border-border rounded hover:border-primary/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="size-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-primary uppercase tracking-wider mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

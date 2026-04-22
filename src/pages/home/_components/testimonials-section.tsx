import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { StructuredData } from "@/components/seo/structured-data.tsx";

const TESTIMONIALS = [
  {
    name: "Emily Carter",
    role: "Bride",
    rating: 5,
    text: "Our wedding transportation experience was flawless from start to finish. The vehicle arrived spotless, and the chauffeur delivered exceptional service with great attention to timing and detail.",
  },
  {
    name: "Daniel Brooks",
    role: "Operations Director",
    rating: 5,
    text: "We rely on Vortex Lmntirx for executive and corporate travel. Their consistency, professionalism, and punctual service make them a dependable partner for our business needs.",
  },
  {
    name: "Alyssa Morgan",
    role: "Event Organizer",
    rating: 5,
    text: "The party bus experience exceeded expectations. Everything from lighting to sound and space was well managed, creating a smooth and enjoyable group celebration.",
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
            Client Feedback
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Experiences That Speak for Themselves
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Real feedback from clients who trust our service for their most
            important journeys and special occasions.
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
                  <Star key={i} className="size-4 fill-primary text-primary" />
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

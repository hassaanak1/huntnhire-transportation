import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { SERVICES, SERVICE_SLUGS } from "./_lib/service-data.ts";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

export default function ServicesPage() {
  usePageMeta({
    title:
      "Luxury Transportation Services | Limo, Party Bus, Corporate & Wedding | Vortex Lmntirx",
    description:
      "Explore our premium transportation services: limousine rentals, party bus services, corporate executive transport, airport transfers, and elegant wedding transportation. Serving 50+ US cities.",
    keywords:
      "luxury transportation services, limo service, party bus rental, corporate transportation, airport transfer service, wedding limo, Vortex Lmntirx",
  });

  const HERO_IMAGE =
    "https://images.unsplash.com/photo-1572194121169-d8cdfaa40ca7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      {/* Hero */}

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
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Luxury Transportation Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Premium <span className="text-primary">Services</span>
            </h1>
            <p className="mt-4 text-white max-w-2xl mx-auto text-base sm:text-lg">
              From intimate limousine rides to spectacular party bus
              celebrations, we offer a comprehensive suite of luxury
              transportation services tailored to exceed your every expectation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICE_SLUGS.map((slug, index) => {
              const service = SERVICES[slug];
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/services/${slug}`}
                    className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border rounded overflow-hidden hover:border-primary/20 transition-all duration-500`}
                  >
                    <div
                      className={`aspect-[16/10] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <img
                        src={service.heroImage}
                        alt={service.shortTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-4">
                        <service.navIcon className="size-6 text-primary" />
                      </div>
                      <p className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-2">
                        {service.tagline}
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                        {service.subtitle}. {service.overview[0].slice(0, 200)}
                        ...
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-primary uppercase tracking-wider font-medium">
                        Learn More
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Not Sure Which Service You Need?
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Let Us Help You Choose
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Call our experienced team and we{"'"}ll recommend the perfect
              vehicle and service for your occasion, group size, and budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book">
                <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8 py-5">
                  Get a Free Quote
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
              <a href="tel:+12108019909">
                <Button
                  variant="ghost"
                  className="rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold px-8 py-5"
                >
                  <Phone className="size-4" />
                  (210) 801-9909
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

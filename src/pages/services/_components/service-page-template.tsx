import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import {
  ChevronRight,
  Phone,
  CheckCircle,
  ArrowRight,
  ChevronRightIcon,
} from "lucide-react";
import type { ServiceData } from "../_lib/service-data.ts";
import { SERVICES } from "../_lib/service-data.ts";

type ServicePageTemplateProps = {
  data: ServiceData;
};

export default function ServicePageTemplate({
  data,
}: ServicePageTemplateProps) {
  const relatedServices = data.relatedSlugs
    .map((slug) => SERVICES[slug])
    .filter(Boolean);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-20">
        <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Link
                    to="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <ChevronRightIcon className="size-3" />
                  <Link
                    to="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                  <ChevronRightIcon className="size-3" />
                  <span className="text-primary">{data.shortTitle}</span>
                </nav>

                <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-3">
                  {data.tagline}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-3xl">
                  {data.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                  {data.subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                About This Service
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                {data.shortTitle}
              </h2>
              <div className="space-y-5">
                {data.overview.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/book">
                  <Button
                    className="rounded-none uppercase tracking-wider text-xs font-semibold px-8"
                  >
                    Get a Free Quote
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
                <a href="tel:+18887778989">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold px-8"
                  >
                    <Phone className="size-4" />
                    (888) 777-8989
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded">
                <img
                  src={data.contentImage}
                  alt={`${data.shortTitle} - luxury vehicle`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              What{"'"}s Included
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Features & Amenities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="p-6 bg-background border border-border rounded hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-4">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Why Vortex Lmntirx
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Everything You Need, Nothing You Don{"'"}t
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card border border-border rounded p-8 sm:p-10 flex flex-col justify-center"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Book?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Get a free, no-obligation quote for your {data.shortTitle.toLowerCase()}{" "}
                needs. Our team responds within minutes.
              </p>
              <div className="space-y-3">
                <Link to="/book">
                  <Button
                    className="w-full rounded-none uppercase tracking-wider text-xs font-semibold py-5"
                  >
                    Get an Instant Quote
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
                <a href="tel:+18887778989" className="block">
                  <Button
                    variant="ghost"
                    className="w-full rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold py-5"
                  >
                    <Phone className="size-4" />
                    Call (888) 777-8989
                  </Button>
                </a>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                No obligation &bull; Free estimates &bull; Instant confirmation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Explore More
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Related Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block overflow-hidden bg-card border border-border rounded hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.heroImage}
                      alt={service.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6 -mt-6 relative">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary uppercase tracking-wider font-medium mt-3">
                      Learn More
                      <ArrowRight className="size-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

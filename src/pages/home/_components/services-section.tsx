import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  Car,
  PartyPopper,
  Briefcase,
  Plane,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Car,
    title: "Limo Service",
    href: "/services/limo-service",
    description:
      "Experience the pinnacle of luxury with our premium stretch limousine service. Perfect for special occasions, date nights, and VIP events.",
    image:
      "https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: PartyPopper,
    title: "Party Bus Rentals",
    href: "/services/party-bus",
    description:
      "Turn any celebration into an unforgettable experience. Our party buses feature state-of-the-art sound systems, LED lighting, and full bar setups.",
    image: "https://jaclimo.com/wp-content/uploads/2024/12/Party-Bus.jpg",
  },
  {
    icon: Briefcase,
    title: "Corporate Transportation",
    href: "/services/corporate",
    description:
      "Elevate your business image with our executive transportation. Reliable, punctual, and impeccably professional service for all corporate needs.",
    image:
      "https://images.unsplash.com/photo-1632656269435-77b10f3fcbc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    href: "/services/airport-transfers",
    description:
      "Start and end every journey in comfort. We monitor your flight status for seamless pickups and drop-offs at every major airport.",
    image:
      "https://images.unsplash.com/photo-1684426133903-620526a5cd21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Heart,
    title: "Wedding Transportation",
    href: "/services/wedding",
    description:
      "Make your special day truly extraordinary. From bridal party arrivals to grand getaway exits, we handle every detail with care.",
    image:
      "https://images.unsplash.com/photo-1729022508881-866e115a51d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Users,
    title: "Event & Group Transportation",
    href: "/services",
    description:
      "Coordinated luxury transportation for groups of any size. Concerts, galas, sporting events, and more — arrive together in style.",
    image:
      "https://images.unsplash.com/photo-1637950634698-2e27e3d6f3db?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
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
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Premium Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            From intimate rides to grand celebrations, our comprehensive luxury
            transportation services are tailored to exceed your expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-card border border-border rounded hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-12">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-4">
                  <service.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary text-sm uppercase tracking-wider font-medium"
                  asChild
                >
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Users, Wifi, Wine, Music, Star, ArrowRight } from "lucide-react";

const FLEET = [
  {
    name: "Executive Sedans",
    description:
      "Sleek, sophisticated sedans perfect for executive travel, airport transfers, and intimate occasions. Experience first-class comfort in every ride.",
    image:
      "https://images.unsplash.com/photo-1604442132605-c36c123d2ba9?auto=format&fit=crop&w=900&q=80",
    capacity: "Up to 3 passengers",
    amenities: ["Premium Leather", "WiFi", "Privacy Partition", "Climate Control"],
    icons: [Star, Wifi],
  },
  {
    name: "Stretch Limousines",
    description:
      "Our signature stretch limousines define luxury. With a full bar, ambient lighting, and an entertainment system, every journey becomes a celebration.",
    image:
      "https://images.unsplash.com/photo-1771775751121-3091d79073d4?auto=format&fit=crop&w=900&q=80",
    capacity: "Up to 10 passengers",
    amenities: ["Full Bar", "Ambient Lighting", "Entertainment System", "Champagne"],
    icons: [Wine, Music],
  },
  {
    name: "Luxury Party Buses",
    description:
      "The ultimate mobile celebration. Our party buses feature dance floors, LED lighting, surround sound, and everything needed for an unforgettable experience.",
    image:
      "https://images.unsplash.com/photo-1631222193608-b887bb1f3c23?auto=format&fit=crop&w=900&q=80",
    capacity: "Up to 40 passengers",
    amenities: ["Dance Floor", "LED Lights", "Surround Sound", "Full Bar"],
    icons: [Music, Users],
  },
] as const;

export default function FleetSection() {
  return (
    <section className="py-24 sm:py-32 bg-card">
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
            Our Vehicles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Distinguished Fleet
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Every vehicle in our fleet is meticulously maintained and detailed to
            ensure the highest standard of luxury and comfort.
          </p>
        </motion.div>

        {/* Fleet Cards */}
        <div className="space-y-8">
          {FLEET.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-background border border-border rounded overflow-hidden hover:border-primary/20 transition-all duration-500 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`aspect-[16/10] lg:aspect-auto overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div
                className={`p-8 lg:p-12 flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-3">
                  {vehicle.capacity}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {vehicle.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {vehicle.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs uppercase tracking-wider text-primary/80 bg-primary/5 border border-primary/15 px-3 py-1.5 rounded-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <Link to="/book">
                  <Button
                    className="w-fit rounded-none uppercase tracking-wider text-xs font-semibold px-8"
                  >
                    Reserve Now
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/fleet">
            <Button
              variant="ghost"
              className="rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold px-8 py-5"
            >
              View Complete Fleet
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

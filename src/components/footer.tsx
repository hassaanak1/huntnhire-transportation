import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const SERVICE_LINKS = [
  { label: "Limo Service", href: "/services/limo-service" },
  { label: "Party Bus Rentals", href: "/services/party-bus" },
  { label: "Corporate Transportation", href: "/services/corporate" },
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "Wedding Transportation", href: "/services/wedding" },
  { label: "All Services", href: "/services" },
] as const;

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Ride", href: "/book" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-primary rotate-45 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-[10px] -rotate-45">
                  V
                </span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wide text-foreground">
                  VORTEX
                </span>
                <span className="font-serif text-lg font-light tracking-widest text-primary ml-1">
                  LMNTIRX
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium luxury transportation services across the United States.
              Professional chauffeurs, impeccable vehicles, and service that
              exceeds expectations.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18887778989"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="size-4 text-primary shrink-0" />
                (888) 777-8989
              </a>
              <a
                href="mailto:info@vortexlmntirx.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="size-4 text-primary shrink-0" />
                info@vortexlmntirx.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                Nationwide Service, USA
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary shrink-0" />
                Available 24/7
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-6 uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>New York City, NY</li>
              <li>Los Angeles, CA</li>
              <li>Chicago, IL</li>
              <li>Miami, FL</li>
              <li>Dallas, TX</li>
              <li>Atlanta, GA</li>
              <li>Las Vegas, NV</li>
              <li className="text-primary font-medium">
                + All Major US Cities
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {year} Vortex Lmntirx. All rights reserved. Premium Luxury
            Transportation Services.
          </p>
          <p className="text-xs text-muted-foreground">
            Licensed & Insured | DOT Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}

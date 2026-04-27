import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet.tsx";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils.ts";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show solid header on non-homepage routes or when scrolled
  const showSolid = scrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : showSolid
            ? "bg-background border-b border-border"
            : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs -rotate-45">
                HnH
              </span>
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wide text-foreground">
                Huntn
              </span>
              <span className="font-serif text-xl font-light tracking-widest text-primary">
                Hire
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-[0.15em] font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ||
                    (link.href === "/services" &&
                      location.pathname.startsWith("/services")) ||
                    (link.href === "/fleet" &&
                      location.pathname.startsWith("/fleet")) ||
                    (link.href === "/about" &&
                      location.pathname.startsWith("/about")) ||
                    (link.href === "/contact" &&
                      location.pathname.startsWith("/contact"))
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19783964667"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="size-4" />
              <span className="font-medium">(978) 396-4667</span>
            </a>
            <Button
              size="sm"
              className="rounded-none uppercase tracking-wider text-xs font-semibold px-6"
              onClick={() => navigate("/book")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:+19783964667" className="text-primary">
              <Phone className="size-5" />
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-border w-80"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-[10px] -rotate-45">
                        HnH
                      </span>
                    </div>
                    <span className="font-serif text-lg font-bold tracking-wide text-foreground">
                      HuntnHire
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-base uppercase tracking-[0.15em] font-medium py-3 px-4 rounded transition-colors",
                        location.pathname === link.href ||
                          (link.href === "/services" &&
                            location.pathname.startsWith("/services")) ||
                          (link.href === "/fleet" &&
                            location.pathname.startsWith("/fleet")) ||
                          (link.href === "/about" &&
                            location.pathname.startsWith("/about")) ||
                          (link.href === "/contact" &&
                            location.pathname.startsWith("/contact"))
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-border">
                  <Button
                    className="w-full rounded-none uppercase tracking-wider text-xs font-semibold"
                    onClick={() => {
                      navigate("/book");
                      setOpen(false);
                    }}
                  >
                    Book Your Ride
                  </Button>
                  <a
                    href="tel:+19783964667"
                    className="flex items-center justify-center gap-2 mt-4 text-sm text-primary"
                  >
                    <Phone className="size-4" />
                    (978) 396-4667
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

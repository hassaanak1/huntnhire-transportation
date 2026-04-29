import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils.ts";

/**
 * Sticky bottom bar on mobile devices that shows "Book Now" and phone CTA
 * once the user scrolls past the hero section. Hidden on the /book page.
 */
export default function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on the booking page — user is already converting
  const isBookPage = location.pathname === "/book";

  useEffect(() => {
    if (isBookPage) return;

    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isBookPage]);

  if (isBookPage) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate("/book")}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-xs uppercase tracking-widest font-semibold transition-colors hover:bg-primary/90"
        >
          <CalendarCheck className="size-4" />
          Book Now
        </button>
        <a
          href="tel:+12142538405"
          className="flex items-center justify-center gap-2 bg-card border border-border text-primary py-3 px-5 text-xs uppercase tracking-widest font-semibold transition-colors hover:bg-accent"
        >
          <Phone className="size-4" />
          Call
        </a>
      </div>
    </div>
  );
}

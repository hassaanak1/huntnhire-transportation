import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Gem } from "lucide-react";

const ITEMS = [
  "FIFA World Cup 2026 — Luxury Transportation in Dallas, TX",
  "FIFA 2026 Match Day Transportation — No Surge Pricing",
  "FIFA 2026 Party Buses & Limos — Book Early",
  "FIFA 2026 Airport Transfers: DFW & Love Field",
  "FIFA 2026 VIP Match Day Transport — Limited Availability",
  "FIFA 2026 Corporate & Group Packages Available",
  "FIFA 2026 Charter Buses — 30, 40 & 50 Passenger",
  "FIFA 2026 — Serving Dallas, Fort Worth, Arlington & All DFW",
];

const Separator = () => (
  <span className="mx-5 inline-flex items-center shrink-0">
    <Gem className="size-2.5 text-primary/60" />
  </span>
);

export default function AnnouncementMarquee() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <Link
      to="/fifa-2026"
      className="fixed left-0 right-0 z-[49] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out block"
      style={{
        top: "80px",
        height: "38px",
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: hidden ? "none" : "auto",
      }}
      aria-label="Learn about FIFA World Cup 2026 transportation"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.14_0.005_280)] border-b border-primary/25">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/8" />
      </div>

      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[oklch(0.14_0.005_280)] to-transparent pointer-events-none" />

      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[oklch(0.14_0.005_280)] to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <div className="relative h-full flex items-center overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap"
          style={{ animation: "marquee-x 42s linear infinite" }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span className="inline-flex items-center gap-2 shrink-0">
                <Trophy className="size-3 text-primary shrink-0" />
                <span className="text-[11px] text-foreground/85 font-medium tracking-[0.06em] uppercase">
                  {item}
                </span>
              </span>
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

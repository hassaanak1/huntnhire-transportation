import HeroSection from "./home/_components/hero-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import FleetSection from "./home/_components/fleet-section.tsx";
import WhyChooseUs from "./home/_components/why-choose-us.tsx";
import TestimonialsSection from "./home/_components/testimonials-section.tsx";
import CtaSection from "./home/_components/cta-section.tsx";
import TrustBar from "@/components/trust-bar.tsx";
import { LocalBusinessSchema } from "@/components/seo/structured-data.tsx";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

export default function Index() {
  usePageMeta({
    title: "Hunt&Hire | Premium Luxury Transportation Services",
    description:
      "Hunt&Hire offers premium limousine rentals, party bus services, corporate transportation, airport transfers, and wedding limo service across the United States. Book your luxury ride today.",
    keywords:
      "limo service near me, party bus rental, luxury transportation services, corporate limo service, airport limo service, wedding limo rental, limousine rental, party bus near me, executive car service",
  });

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <FleetSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

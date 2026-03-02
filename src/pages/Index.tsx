import HeroSection from "./home/_components/hero-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import FleetSection from "./home/_components/fleet-section.tsx";
import WhyChooseUs from "./home/_components/why-choose-us.tsx";
import TestimonialsSection from "./home/_components/testimonials-section.tsx";
import CtaSection from "./home/_components/cta-section.tsx";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

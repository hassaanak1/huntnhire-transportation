import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { DefaultProviders } from "./components/providers/default.tsx";
import ScrollToTop from "./components/scroll-to-top.tsx";
import SiteLayout from "./components/site-layout.tsx";

// Pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutPage from "./pages/about/page.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import BookingPage from "./pages/book/page.tsx";
import ContactPage from "./pages/contact/page.tsx";
import Fifa2026Page from "./pages/fifa-2026/page.tsx";
import FleetPage from "./pages/fleet/page.tsx";
import PrivacyPolicyPage from "./pages/privacy/page.tsx";

// Services Pages
import ServicesPage from "./pages/services/page.tsx";
import AirportTransfersPage from "./pages/services/airport-transfers/page.tsx";
import CorporatePage from "./pages/services/corporate/page.tsx";
import LimoServicePage from "./pages/services/limo-service/page.tsx";
import PartyBusPage from "./pages/services/party-bus/page.tsx";
import WeddingPage from "./pages/services/wedding/page.tsx";

// Fixes TypeScript error for window.gtag
declare global {
  interface Window {
    gtag?: (command: string, id: string, config?: Record<string, any>) => void;
  }
}

function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-2SPS2H4SE7", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <ScrollToTop />
        {/* Placed inside BrowserRouter context so useLocation works perfectly */}
        <GoogleAnalyticsTracker />

        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/limo-service"
              element={<LimoServicePage />}
            />
            <Route path="/services/party-bus" element={<PartyBusPage />} />
            <Route path="/services/corporate" element={<CorporatePage />} />
            <Route
              path="/services/airport-transfers"
              element={<AirportTransfersPage />}
            />
            <Route path="/services/wedding" element={<WeddingPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/fifa-2026" element={<Fifa2026Page />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </DefaultProviders>
  );
}

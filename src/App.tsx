import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import SiteLayout from "./components/site-layout.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/services/page.tsx";
import LimoServicePage from "./pages/services/limo-service/page.tsx";
import PartyBusPage from "./pages/services/party-bus/page.tsx";
import CorporatePage from "./pages/services/corporate/page.tsx";
import AirportTransfersPage from "./pages/services/airport-transfers/page.tsx";
import WeddingPage from "./pages/services/wedding/page.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/limo-service" element={<LimoServicePage />} />
            <Route path="/services/party-bus" element={<PartyBusPage />} />
            <Route path="/services/corporate" element={<CorporatePage />} />
            <Route path="/services/airport-transfers" element={<AirportTransfersPage />} />
            <Route path="/services/wedding" element={<WeddingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}

import { Outlet } from "react-router-dom";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import FloatingCta from "@/components/floating-cta.tsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Spacer so the floating CTA doesn't overlap footer on mobile */}
      <div className="h-16 lg:hidden" />
      <FloatingCta />
    </div>
  );
}

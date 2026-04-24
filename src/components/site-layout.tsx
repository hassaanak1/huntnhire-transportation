import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import FloatingCta from "@/components/floating-cta.tsx";

export default function SiteLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      {/* Spacer so the floating CTA doesn't overlap footer on mobile */}
      <div className="h-16 lg:hidden" />
      <FloatingCta />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

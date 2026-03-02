import ServicePageTemplate from "../_components/service-page-template.tsx";
import { getServiceBySlug } from "../_lib/service-data.ts";

export default function LimoServicePage() {
  const data = getServiceBySlug("limo-service");
  if (!data) return null;
  return <ServicePageTemplate data={data} />;
}

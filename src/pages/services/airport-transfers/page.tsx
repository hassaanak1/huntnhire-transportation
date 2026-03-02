import ServicePageTemplate from "../_components/service-page-template.tsx";
import { getServiceBySlug } from "../_lib/service-data.ts";

export default function AirportTransfersPage() {
  const data = getServiceBySlug("airport-transfers");
  if (!data) return null;
  return <ServicePageTemplate data={data} />;
}

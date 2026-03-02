import ServicePageTemplate from "../_components/service-page-template.tsx";
import { getServiceBySlug } from "../_lib/service-data.ts";

export default function PartyBusPage() {
  const data = getServiceBySlug("party-bus");
  if (!data) return null;
  return <ServicePageTemplate data={data} />;
}

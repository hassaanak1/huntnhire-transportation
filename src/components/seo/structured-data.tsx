/**
 * Renders a JSON-LD <script> tag for schema.org structured data.
 * Used to provide rich search engine results (rich snippets).
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** schema.org LocalBusiness for the homepage */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LimousineBus",
    name: "Vortex Lmntirx",
    description:
      "Premium luxury transportation services including limousine rentals, party bus services, corporate transportation, airport transfers, and wedding limo service across the United States.",
    url: "https://vortexlmntirx.com",
    telephone: "+1-888-777-8989",
    email: "info@vortexlmntirx.com",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2847",
      bestRating: "5",
    },
    sameAs: [],
  };
  return <StructuredData data={data} />;
}

/** schema.org Organization for the about page */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vortex Lmntirx",
    description:
      "Premium luxury transportation company operating in 50+ cities across the United States since 2009.",
    url: "https://vortexlmntirx.com",
    telephone: "+1-888-777-8989",
    email: "info@vortexlmntirx.com",
    foundingDate: "2009",
    founder: {
      "@type": "Person",
      name: "Alexander Voss",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 200,
    },
  };
  return <StructuredData data={data} />;
}

/** schema.org FAQPage for service pages */
export function FaqSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <StructuredData data={data} />;
}

/** schema.org BreadcrumbList for service pages */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <StructuredData data={data} />;
}

/** schema.org Service for service pages */
export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Vortex Lmntirx",
      telephone: "+1-888-777-8989",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
  return <StructuredData data={data} />;
}

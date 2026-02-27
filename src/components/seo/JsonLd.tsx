import { siteConfig } from "@/lib/constants";

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.siteName,
    alternateName: "PEARLMAN Designs SARL",
    description:
      "Luxury interior design studio and project management firm specializing in high-end alpine residential properties in the Swiss Alps, including Crans-Montana, Gstaad, and surrounding villages.",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo/pearlman-logo.svg`,
    image: `${siteConfig.siteUrl}/images/og/og-default.jpg`,
    telephone: "+41793558241",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.canton,
      postalCode: siteConfig.address.zip,
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    areaServed: [
      { "@type": "Place", name: "Crans-Montana, Switzerland" },
      { "@type": "Place", name: "Gstaad, Switzerland" },
      { "@type": "Place", name: "Verbier, Switzerland" },
      { "@type": "Place", name: "Swiss Alps" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Interior Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Architecture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Project Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FF&E Procurement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnkey Solutions",
          },
        },
      ],
    },
    founder: [
      {
        "@type": "Person",
        name: "Adriana Pearlman",
        jobTitle: "Founder & Creative Director",
      },
      {
        "@type": "Person",
        name: "Julien Falque",
        jobTitle: "Managing Director",
      },
    ],
    sameAs: ["https://www.instagram.com/pearlmandesigns"],
    priceRange: "$$$$",
    knowsLanguage: ["en", "fr", "es"],
  };

  return <JsonLdScript data={data} />;
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`,
    })),
  };

  return <JsonLdScript data={data} />;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  items: FAQItem[];
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

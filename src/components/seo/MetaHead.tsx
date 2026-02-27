import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/images/og/og-default.jpg",
  ogType = "website",
}: GenerateMetadataOptions): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.siteName}`,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.siteName}`,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.siteName}`,
      description,
      images: [ogImage],
    },
    other: {
      "geo.region": "CH-VS",
      "geo.placename": "Lens",
      "geo.position": `${siteConfig.coordinates.lat};${siteConfig.coordinates.lng}`,
      ICBM: `${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng}`,
    },
  };
}

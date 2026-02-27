import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pearlmandesigns.com"),
  title: {
    template: "%s | PEARLMAN Designs",
    default: "PEARLMAN Designs | Luxury Interior Design in the Swiss Alps",
  },
  description:
    "Luxury interior design and project management studio in the Swiss Alps. Creating bespoke homes in Crans-Montana, Gstaad and surrounding alpine villages.",
  openGraph: {
    title: "PEARLMAN Designs | Luxury Interior Design in the Swiss Alps",
    description:
      "Luxury interior design and project management studio in the Swiss Alps. Creating bespoke homes in Crans-Montana, Gstaad and surrounding alpine villages.",
    url: "https://pearlmandesigns.com",
    siteName: "PEARLMAN Designs",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "PEARLMAN Designs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEARLMAN Designs | Luxury Interior Design in the Swiss Alps",
    description:
      "Luxury interior design and project management studio in the Swiss Alps.",
    images: ["/images/og/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} font-sans antialiased bg-cream text-charcoal`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-warmgold focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <LocalBusinessJsonLd />
        <Header />
        <main id="main-content" className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

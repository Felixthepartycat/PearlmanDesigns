import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PEARLMAN Designs. Visit our studio in Lens, Switzerland or contact us to discuss your luxury interior design project in the Swiss Alps.",
};

export default function ContactPage() {
  const { address, phone, email } = siteConfig;

  return (
    <div>
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact PEARLMAN Designs",
            description: "Get in touch to discuss your luxury interior design project in the Swiss Alps.",
            url: `${siteConfig.siteUrl}/contact`,
            mainEntity: {
              "@type": "InteriorDesigner",
              name: siteConfig.siteName,
              telephone: phone.replace(/\s/g, ""),
              email,
              address: {
                "@type": "PostalAddress",
                streetAddress: address.street,
                addressLocality: address.city,
                addressRegion: address.canton,
                postalCode: address.zip,
                addressCountry: "CH",
              },
            },
          }),
        }}
      />

      {/* ─── Two-column layout ─── */}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left — Image */}
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="/images/contact/contact-bg.jpg"
            alt="PEARLMAN Designs studio interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 xl:px-28">
          <ScrollReveal>
            <h1 className="font-serif text-4xl text-charcoal">
              Let&apos;s Talk
            </h1>
            <p className="mt-3 font-sans text-base text-charcoal/60">
              We&apos;d love to hear about your project.
            </p>
          </ScrollReveal>

          {/* Form */}
          <div className="mt-10">
            <ScrollReveal delay={0.1}>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Contact Details */}
          <ScrollReveal delay={0.15}>
            <div className="mt-16 border-t border-softgray pt-10">
              <address className="flex flex-col gap-1 not-italic font-sans text-xs tracking-wide text-charcoal/60">
                <span className="font-medium text-charcoal">
                  PEARLMAN Designs SARL
                </span>
                <span>{address.street}</span>
                <span>
                  {address.zip} {address.city}, {address.canton}
                </span>
                <span>{address.country}</span>
              </address>
              <div className="mt-4 flex flex-col gap-1 font-sans text-xs tracking-wide">
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-charcoal/60 transition-colors duration-300 hover:text-warmgold"
                >
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="text-charcoal/60 transition-colors duration-300 hover:text-warmgold"
                >
                  {email}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10 overflow-hidden rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.5!2d7.433!3d46.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDE3JzAwLjAiTiA3wrAyNicwMC4wIkU!5e0!3m2!1sen!2sch!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PEARLMAN Designs studio location in Lens, Switzerland"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

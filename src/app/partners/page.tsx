import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnerLogo from "@/components/ui/PartnerLogo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";
import partners from "@/data/partners.json";
import type { Partner } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "PEARLMAN Designs works with the world\u2019s finest luxury brands and artisan suppliers. From Lefroy Brooks to Samuel Heath, we source exceptional products for Swiss alpine interiors.",
};

const allPartners = partners as Partner[];

/* Group partners by category, preserving insertion order */
const categories = allPartners.reduce<Record<string, Partner[]>>(
  (acc, partner) => {
    if (!acc[partner.category]) acc[partner.category] = [];
    acc[partner.category].push(partner);
    return acc;
  },
  {},
);

const faqItems = [
  {
    question: "What luxury brands does PEARLMAN Designs work with?",
    answer:
      "PEARLMAN Designs maintains direct trade relationships with premium brands including Lefroy Brooks, Waterworks, Samuel Heath, and Georg Jensen, among others. As an established design studio with a private showroom in Lens, Switzerland, we access trade pricing and exclusive products that are not available through standard retail channels.",
  },
  {
    question: "Can PEARLMAN Designs source products internationally?",
    answer:
      "Yes. PEARLMAN Designs sources furniture, fixtures, and accessories from suppliers across Europe and internationally. We handle all logistics including customs documentation, Swiss VAT, and delivery coordination to alpine locations.",
  },
];

export default function PartnersPage() {
  return (
    <div>
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Partners", href: "/partners" },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      {/* ─── SECTION 1: Hero ─── */}
      <section className="relative">
        <div className="aspect-[16/7] md:aspect-[21/7]">
          <Image
            src="/images/partners/partners-hero.jpg"
            alt="Luxury materials and finishes selected by PEARLMAN Designs"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <h1 className="font-serif text-4xl text-cream md:text-5xl">
            Our Partners
          </h1>
          <p className="mt-3 font-sans text-sm uppercase tracking-[0.25em] text-warmgold">
            Collaborating with the world&apos;s finest
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: Introduction ─── */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <ScrollReveal>
          <p className="font-serif text-xl leading-relaxed text-charcoal/70 md:text-2xl md:leading-relaxed">
            At PEARLMAN Designs, we believe exceptional interiors demand
            exceptional materials. We maintain direct relationships with leading
            luxury brands and artisan workshops across Europe and beyond,
            sourcing products that local suppliers cannot access. Every item is
            selected with care and presented in our private Lens showroom.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 3: Partner Categories Grid ─── */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:pb-32 lg:px-12">
        {Object.entries(categories).map(([category, categoryPartners], ci) => (
          <div key={category} className={ci > 0 ? "mt-16" : ""}>
            <ScrollReveal>
              <h2 className="mb-8 font-sans text-xs uppercase tracking-[0.25em] text-warmgold">
                {category}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {categoryPartners.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={i * 0.08}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex aspect-[3/2] items-center justify-center rounded bg-softgray/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    <PartnerLogo name={partner.name} logo={partner.logo} />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ─── SECTION 4: FAQ / AEO Content ─── */}
      <section className="bg-lightcream">
        <div className="mx-auto max-w-[800px] px-6 py-24 md:py-32">
          <ScrollReveal>
            <h2 className="mb-12 text-center font-serif text-3xl text-charcoal">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 5: CTA ─── */}
      <section className="bg-charcoal">
        <div className="px-6 py-24 text-center md:py-32">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-cream">
              Interested in our sourcing capabilities?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-cream/60 px-10 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-charcoal"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

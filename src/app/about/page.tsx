import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by Adriana Pearlman and Julien Falque, PEARLMAN Designs brings over 30 years of international interior design experience to luxury alpine properties in Switzerland.",
};

const faqItems = [
  {
    question: "Who founded PEARLMAN Designs?",
    answer:
      "PEARLMAN Designs was founded by Adriana Pearlman, an international interior designer with experience across London, Paris, Argentina and Uruguay, and Julien Falque, a managing director with a background in mechanical engineering.",
  },
  {
    question: "What areas does PEARLMAN Designs serve?",
    answer:
      "We serve clients across the Swiss Alps, with particular focus on Crans-Montana, Gstaad, Verbier, Nendaz, Anz\u00e8re, and surrounding alpine villages in the canton of Valais.",
  },
  {
    question: "Does PEARLMAN Designs have a showroom?",
    answer:
      "Yes. Our private design studio and showroom is located in Lens, Valais, Switzerland, where clients can view and select materials, finishes, and furnishings in person.",
  },
];

const steps = [
  {
    number: "01",
    title: "Listen & Discover",
    description:
      "Every project begins with your story. We take time to understand how you live, what inspires you, and what your home needs to feel like.",
  },
  {
    number: "02",
    title: "Design & Curate",
    description:
      "From architectural plans to the selection of every finish, fabric, and fixture. We source globally and present in our private Lens showroom.",
  },
  {
    number: "03",
    title: "Deliver & Transform",
    description:
      "Meticulous project management, coordination of master trades, and comprehensive snagging ensure the highest quality workmanship.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      {/* ─── SECTION 1: Hero ─── */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/about/studio.jpg"
            alt="PEARLMAN Designs studio in Lens, Switzerland"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="font-serif text-4xl text-cream md:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      {/* ─── SECTION 2: Studio Introduction ─── */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-softgray">
              <Image
                src="/images/about/philosophy.jpg"
                alt="Interior design concept by PEARLMAN Designs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <h2 className="font-serif text-3xl text-charcoal">
                Built for Life
              </h2>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-charcoal/70">
                <p>
                  PEARLMAN Designs is a luxury interior design and project
                  management studio based in Lens, Switzerland. Founded by
                  Adriana Pearlman and Julien Falque, we bring over 30 years of
                  combined international experience to high-end alpine
                  properties.
                </p>
                <p>
                  Our aim is to infuse every project with passion and creativity,
                  with a particular focus on the impact of light and space. We
                  create luxurious yet livable homes with exceptionally high,
                  personalized levels of service.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 3: Team ─── */}
      <section className="bg-lightcream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 lg:px-12">
          {/* Adriana — image right, text left */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal className="order-2 md:order-1">
              <div>
                <h3 className="font-serif text-2xl text-charcoal">
                  Adriana Pearlman
                </h3>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-warmgold">
                  Founder &amp; Creative Director
                </p>
                <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/70">
                  Adriana is the creative soul of the studio. Having worked for
                  some of the biggest names in the industry across London, Paris,
                  Argentina and Uruguay, she brings a rich international
                  perspective to every project. Her eye for detail and ability to
                  translate a client&apos;s story into a unique living
                  environment is the hallmark of PEARLMAN Designs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-softgray">
                <Image
                  src="/images/about/team.jpg"
                  alt="Adriana Pearlman — Founder and Creative Director of PEARLMAN Designs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Julien — image left, text right */}
          <div className="mt-24 grid grid-cols-1 items-center gap-12 md:mt-32 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-softgray">
                <Image
                  src="/images/about/julien.jpg"
                  alt="Julien Falque — Managing Director of PEARLMAN Designs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-serif text-2xl text-charcoal">
                  Julien Falque
                </h3>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-warmgold">
                  Managing Director
                </p>
                <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/70">
                  Julien&apos;s background in mechanical engineering brings
                  technical precision and insight to complement the design
                  process. His ability to manage complex multi-trade projects,
                  international procurement, and Swiss regulatory requirements
                  ensures every detail is executed to the highest standard.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Our Approach ─── */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 lg:px-12">
        <ScrollReveal>
          <h2 className="mb-16 text-center font-serif text-3xl text-charcoal">
            How We Work
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-warmgold">
                  <span className="font-sans text-xs tracking-wide text-warmgold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/60">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: FAQ / AEO Content ─── */}
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

      {/* ─── SECTION 6: CTA ─── */}
      <section className="bg-charcoal">
        <div className="px-6 py-24 text-center md:py-32">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-cream">
              Ready to start your project?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-cream/60 px-10 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-charcoal"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

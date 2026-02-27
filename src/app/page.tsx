import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/sections/HeroCarousel";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "PEARLMAN Designs | Luxury Interior Design, Swiss Alps",
  description:
    "PEARLMAN Designs is a luxury interior design and project management studio in Lens, Switzerland. Bespoke alpine interiors in Crans-Montana, Gstaad, and the Swiss Alps.",
};

const featuredProjects = (projects as Project[]).filter((p) => p.featured).slice(0, 4);

const faqItems = [
  {
    question: "Where is PEARLMAN Designs located?",
    answer:
      "PEARLMAN Designs is based in Lens, Valais, Switzerland — minutes from Crans-Montana\u2019s ski slopes and luxury boutiques. Our private showroom and design studio serves clients across the Swiss Alps.",
  },
  {
    question: "What types of projects does PEARLMAN Designs work on?",
    answer:
      "We specialize in high-end residential interior design for alpine properties including chalets, apartments, and private residences in Crans-Montana, Gstaad, Verbier, Nendaz, and surrounding villages.",
  },
  {
    question: "Does PEARLMAN Designs offer turnkey interior design?",
    answer:
      "Yes. We provide complete turnkey solutions from initial design concept through to FF&E procurement, project management, installation, and final styling — including bespoke furniture, lighting, art, and accessories.",
  },
];

const services = [
  {
    title: "Interior Design",
    description:
      "Bespoke design schemes reflecting the individuality of each client. From concept to completion.",
  },
  {
    title: "Project Management",
    description:
      "Meticulous coordination of every trade, timeline, and detail across your alpine property.",
  },
  {
    title: "Turnkey Solutions",
    description:
      "Complete procurement, installation, and styling. Move in and exhale.",
  },
];

export default function Home() {
  return (
    <div>
      {/* FAQ Schema */}
      <FAQJsonLd items={faqItems} />

      {/* ─── SECTION 1: Hero Carousel ─── */}
      <HeroCarousel />

      {/* ─── SECTION 2: Introduction ─── */}
      <section className="bg-lightcream">
        <div className="mx-auto max-w-[800px] px-6 py-24 text-center md:py-32">
          <ScrollReveal>
            <p className="font-serif text-xl leading-relaxed text-charcoal md:text-2xl md:leading-relaxed">
              Based in Lens, a stone&apos;s throw from Crans-Montana, PEARLMAN
              Designs creates bespoke interiors for discerning clients across the
              Swiss Alps. We bring over 30 years of international experience to
              every project — from architectural plans to the final styling
              details.
            </p>
            <div className="mx-auto mt-10 h-[1px] w-10 bg-warmgold" />
            <Link
              href="/about"
              className="group mt-8 inline-block font-sans text-xs uppercase tracking-[0.2em] text-warmgold transition-colors duration-300 hover:text-charcoal"
            >
              Discover Our Approach
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="block h-[1px] w-0 bg-charcoal transition-all duration-300 group-hover:w-full" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 3: Featured Projects ─── */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 lg:px-12">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-serif text-3xl text-charcoal md:mb-16">
            Selected Projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-softgray">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — ${project.clientType} in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-charcoal">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-warmgold">
                    {project.clientType}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              className="group inline-block font-sans text-xs uppercase tracking-[0.2em] text-warmgold transition-colors duration-300 hover:text-charcoal"
            >
              View All Projects
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="block h-[1px] w-0 bg-charcoal transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 4: Services ─── */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 lg:px-12">
          <ScrollReveal>
            <h2 className="mb-16 text-center font-serif text-3xl text-cream">
              Our Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.12}>
                <div className="border-t border-warmgold pt-6">
                  <h3 className="font-serif text-xl text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-cream/60">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="group inline-block font-sans text-xs uppercase tracking-[0.2em] text-warmgold transition-colors duration-300 hover:text-cream"
              >
                Discuss Your Project
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
                <span className="block h-[1px] w-0 bg-cream transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </ScrollReveal>
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
    </div>
  );
}

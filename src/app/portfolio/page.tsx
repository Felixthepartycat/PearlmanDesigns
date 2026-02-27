import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of luxury interior design projects across the Swiss Alps. Bespoke chalets, private residences, and alpine properties in Crans-Montana and beyond.",
};

const allProjects = projects as Project[];

export default function PortfolioPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/portfolio/portfolio-hero.jpg"
            alt="PEARLMAN Designs portfolio of luxury alpine interiors"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="font-serif text-4xl text-cream md:text-5xl">
            Our Work
          </h1>
        </div>
      </section>

      {/* ─── Filter (future use) ─── */}
      <div className="mx-auto max-w-[1440px] px-6 pt-12 lg:px-12">
        <div className="flex justify-center gap-6">
          <span className="border-b border-warmgold pb-1 font-sans text-xs uppercase tracking-[0.2em] text-charcoal">
            All
          </span>
          <span className="pb-1 font-sans text-xs uppercase tracking-[0.2em] text-charcoal/30 cursor-default">
            Residential
          </span>
          <span className="pb-1 font-sans text-xs uppercase tracking-[0.2em] text-charcoal/30 cursor-default">
            Hospitality
          </span>
        </div>
      </div>

      {/* ─── Project Grid ─── */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {allProjects.map((project, i) => (
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
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/40">
                    <span className="font-serif text-xl text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {project.title}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="font-serif text-xl text-charcoal">
                    {project.title}
                  </h2>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-warmgold">
                    {project.location}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

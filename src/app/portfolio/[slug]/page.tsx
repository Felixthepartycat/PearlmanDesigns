import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import projects from "@/data/projects.json";
import { siteConfig } from "@/lib/constants";
import type { Project } from "@/lib/types";

const allProjects = projects as Project[];

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Portfolio`,
    description: `${project.description} — Luxury interior design by PEARLMAN Designs in ${project.location}, Switzerland.`,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div>
      {/* Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />

      {/* ImageObject schema for gallery images */}
      {project.images.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              name: `${project.title} — Interior Design Gallery`,
              about: {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
              },
              image: project.images.map((src, i) => ({
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}${src}`,
                name: `${project.title} — Image ${i + 1}`,
                description: `Interior design photography of ${project.title} by PEARLMAN Designs in ${project.location}`,
                creator: {
                  "@type": "Organization",
                  name: "PEARLMAN Designs",
                },
              })),
            }),
          }}
        />
      )}

      {/* ─── Hero ─── */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={project.coverImage}
            alt={`${project.title} — Luxury interior design in ${project.location}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* ─── Project Info Bar ─── */}
      <section className="mx-auto max-w-[1440px] px-6 py-10 md:py-14 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <h1 className="font-serif text-3xl text-charcoal md:text-4xl">
              {project.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-xs uppercase tracking-[0.15em] text-warmgold">
              <span>{project.location}</span>
              <span className="text-warmgold/40">&middot;</span>
              <span>{project.clientType}</span>
              <span className="text-warmgold/40">&middot;</span>
              <span>{project.services.join(", ")}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Description ─── */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-4 text-center md:pb-24">
        <ScrollReveal>
          <p className="font-serif text-lg leading-relaxed text-charcoal/70 md:text-xl md:leading-relaxed">
            {project.description}
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Image Gallery ─── */}
      {project.images.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:pb-32 lg:px-12">
          <div className="flex flex-col gap-8">
            {project.images.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.08}>
                <div className="relative aspect-[3/2] overflow-hidden bg-softgray">
                  <Image
                    src={src}
                    alt={`${project.title} interior design detail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ─── Navigation ─── */}
      <section className="border-t border-softgray">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-10 lg:px-12">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60 transition-colors duration-300 hover:text-charcoal"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              &larr;
            </span>
            Back to Portfolio
          </Link>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-warmgold transition-colors duration-300 hover:text-charcoal"
          >
            {nextProject.title}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

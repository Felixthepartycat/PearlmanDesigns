import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 5-4 5" />
      <path d="M9.5 15.5L8 22" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialLinks = [
  {
    href: siteConfig.socialLinks.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: siteConfig.socialLinks.pinterest,
    label: "Pinterest",
    icon: PinterestIcon,
  },
  {
    href: siteConfig.socialLinks.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  const { address, phone, email } = siteConfig;

  return (
    <footer className="bg-charcoal text-cream/80" role="contentinfo">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Link href="/" aria-label="PEARLMAN Designs — Return to homepage">
              <Image
                src="/images/logo/pearlman-logo-light.svg"
                alt="PEARLMAN Designs"
                width={170}
                height={52}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-6 font-serif text-lg italic text-cream/60">
              Creating Homes, Not Houses
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-5 font-sans text-[10px] uppercase tracking-[0.25em] text-warmgold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs tracking-[0.15em] text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div>
            <h3 className="mb-5 font-sans text-[10px] uppercase tracking-[0.25em] text-warmgold">
              Contact
            </h3>
            <address className="flex flex-col gap-2 not-italic font-sans text-xs tracking-wide text-cream/60">
              <span>{address.street}</span>
              <span>
                {address.zip} {address.city}, {address.canton}
              </span>
              <span>{address.country}</span>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-2 transition-colors duration-300 hover:text-cream"
              >
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="transition-colors duration-300 hover:text-cream"
              >
                {email}
              </a>
            </address>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {socialLinks
                .filter((s) => s.href)
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    className="text-cream/40 transition-colors duration-300 hover:text-warmgold"
                  >
                    <social.icon />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-6 py-6 text-center font-sans text-[10px] tracking-[0.15em] text-cream/40 sm:flex-row lg:px-12">
          <span>&copy; 2026 PEARLMAN Designs SARL. All rights reserved.</span>
          <span>Lens, Switzerland</span>
        </div>
      </div>

      {/* LocalBusiness Schema (footer address association) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: address.canton,
            postalCode: address.zip,
            addressCountry: "CH",
          }),
        }}
      />
    </footer>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <span className="font-serif text-lg text-charcoal/70 transition-colors duration-300 group-hover:text-charcoal">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={name}
      width={140}
      height={60}
      className="h-auto max-h-[60px] w-auto max-w-[140px] object-contain"
      onError={() => setFailed(true)}
    />
  );
}

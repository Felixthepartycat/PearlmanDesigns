"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Luxury alpine chalet interior designed by PEARLMAN Designs",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Bespoke mountain living room with panoramic Swiss Alps views",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Contemporary chalet bedroom with natural materials and warm textures",
  },
  {
    src: "/images/hero/hero-4.jpg",
    alt: "Elegant dining space in a Crans-Montana residence",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Featured interiors">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Ken Burns wrapper */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            {imageErrors.has(current) ? (
              <div className="h-full w-full bg-charcoal/80" />
            ) : (
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover"
                priority={current === 0}
                sizes="100vw"
                onError={() => handleImageError(current)}
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      {/* Text overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl leading-tight text-cream md:text-6xl lg:text-7xl">
          Creating Homes, Not Houses
        </h1>
        <p className="mt-5 font-sans text-sm uppercase tracking-[0.3em] text-warmgold">
          Luxury Interior Design &middot; Swiss Alps
        </p>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? "w-8 bg-warmgold" : "w-4 bg-cream/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-cream/50">
          Scroll
        </span>
        <motion.div
          className="h-6 w-[1px] bg-cream/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}

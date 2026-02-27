"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-softgray">
      {items.map((item, i) => (
        <div key={i} className="py-6 first:pt-0 last:pb-0">
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-start justify-between gap-4 text-left"
            aria-expanded={openIndex === i}
          >
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-charcoal md:text-base">
              {item.question}
            </h3>
            <motion.span
              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-warmgold"
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <line x1="7" y1="1" x2="7" y2="13" />
                <line x1="1" y1="7" x2="13" y2="7" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="pt-4 font-serif text-base leading-relaxed text-charcoal/70 md:text-lg md:leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

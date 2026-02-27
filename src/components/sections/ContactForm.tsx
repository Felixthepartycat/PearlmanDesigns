"use client";

import { useState, type FormEvent } from "react";

const projectTypes = ["New Build", "Renovation", "Consultation", "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact form submission:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start py-12">
        <p className="font-serif text-2xl text-charcoal">Thank you.</p>
        <p className="mt-3 font-sans text-sm text-charcoal/60">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-warmgold"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-warmgold"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="w-full border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-warmgold"
        />
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full appearance-none border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 focus:border-warmgold"
        >
          <option value="">Select&hellip;</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Project Location */}
      <div>
        <label
          htmlFor="location"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Project Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="e.g., Crans-Montana"
          className="w-full border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-warmgold"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none border-0 border-b border-softgray bg-transparent py-2 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-warmgold"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 bg-charcoal px-10 py-3 font-sans text-xs uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-warmgold"
      >
        Send Message
      </button>
    </form>
  );
}

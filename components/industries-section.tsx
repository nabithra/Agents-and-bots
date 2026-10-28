"use client";

import { motion } from "framer-motion";
import { industryEnquiryUrl } from "@/lib/config";
import { industries } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import { bandBody, bandHeading, bandPad } from "@/lib/ui";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className={`scroll-mt-24 bg-white pt-4 pb-24 sm:pt-8 sm:pb-32 ${bandPad}`}
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 id="industries-heading" className={bandHeading}>
            Made for your industry
          </h2>
          <p className={`mt-5 sm:mt-6 ${bandBody}`}>Tap a tile and WhatsApp opens with a note about that work.</p>
        </motion.div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.name} className="min-w-0">
              <motion.a
                href={industryEnquiryUrl(industry.name, industry.whoFor)}
                target="_blank"
                rel="noopener noreferrer"
                className="industry-tile flex h-full flex-col rounded-2xl border border-line bg-white px-4 py-4 sm:px-5 sm:py-5"
                style={{ borderColor: "#ececec" }}
                whileHover={{ borderColor: "#111111" }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink sm:text-[16px]">{industry.name}</span>
                <span className="mt-1.5 text-pretty text-[13px] leading-5 text-[#7d8b9c]">{industry.whoFor}</span>
                <span className="sr-only"> Opens WhatsApp.</span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

export function ToolsBand() {
  return (
    <section
      id="tools-band"
      aria-labelledby="tools-heading"
      className="flex min-h-dvh scroll-mt-24 items-start bg-white px-3.5 pb-16 pt-24 sm:px-10 sm:pt-28 md:px-14 md:pt-32"
    >
      <motion.div
        className="mx-auto grid w-full max-w-[1120px] items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div className="max-w-[34rem]">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-agent sm:text-[13px]">
            What we do
          </p>
          <h2
            id="tools-heading"
            className="mt-4 text-[2.35rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0d1b2e] sm:text-5xl lg:text-[3.55rem]"
          >
            Powerful tools for every stage of your business.
          </h2>
          <p className="mt-5 max-w-[28rem] text-[16.5px] leading-[1.55] text-[#7d8b9c] sm:mt-6 sm:text-[18px]">
            From smart chatbots to custom AI agents, we build solutions that save time, bring in leads and help you grow.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/mascot.png"
            alt="Actionpackd on WhatsApp: a business assistant that can show products, book a service, get a quote, or talk to the team."
            width={600}
            height={416}
            className="h-auto w-full max-w-[540px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

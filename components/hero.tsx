"use client";

import { motion } from "framer-motion";
import { heroStatsParts } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";

type HeroProps = {
  inert?: boolean;
};

export function Hero({ inert }: HeroProps) {
  return (
    <section
      inert={inert || undefined}
      className="relative flex h-dvh w-full items-center justify-center px-3"
    >
      <div className="flex w-full min-w-0 flex-col items-center">
        <motion.h1
          className="hero-lockup mb-[0.28em] flex items-baseline justify-center whitespace-nowrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.05 }}
        >
          <span className="hero-agents font-script leading-none text-agent">Agents</span>
          <span className="hero-amp font-sans font-black leading-none text-amp">&</span>
          <span className="hero-bots font-serif font-medium leading-none tracking-[-0.02em] text-bot">bots</span>
        </motion.h1>
        <motion.p
          className="hero-stats text-center text-[13px] font-medium leading-snug text-[#7d8b9c] sm:text-[15px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.22 }}
        >
          {heroStatsParts().join(" · ")}
        </motion.p>
      </div>
    </section>
  );
}

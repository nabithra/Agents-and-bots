"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

type HeroProps = {
  inert?: boolean;
};

export function Hero({ inert }: HeroProps) {
  return (
    <main
      inert={inert || undefined}
      className="absolute inset-0 z-0 flex items-center justify-center px-3"
    >
      <motion.h1
        className="hero-lockup flex items-baseline justify-center whitespace-nowrap"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.05 }}
      >
        <span className="font-script text-[1em] leading-none text-agent">Agents</span>
        <span className="hero-amp relative mx-[0.045em] font-serif text-[0.56em] leading-none font-bold italic text-amp">
          &
        </span>
        <span className="font-serif text-[0.66em] leading-none font-medium tracking-[-0.02em] text-bot">
          bots
        </span>
      </motion.h1>
    </main>
  );
}

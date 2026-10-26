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
      className="relative flex h-dvh w-full items-center justify-center px-3"
    >
      <motion.h1
        className="hero-lockup flex items-baseline justify-center whitespace-nowrap"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.05 }}
      >
        <span className="hero-agents font-script leading-none text-agent">Agents</span>
        <span className="hero-amp font-sans font-black leading-none text-amp">&</span>
        <span className="hero-bots font-serif font-medium leading-none tracking-[-0.02em] text-bot">bots</span>
      </motion.h1>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/config";
import { Logo } from "@/components/logo";
import { pillClass, pillMotion } from "@/lib/ui";

type HeaderProps = {
  open: boolean;
  onToggle: () => void;
  inert?: boolean;
};

export function Header({ open, onToggle, inert }: HeaderProps) {
  return (
    <header
      inert={inert || undefined}
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 bg-white px-3.5 pt-[max(0.85rem,env(safe-area-inset-top))] pb-3 sm:px-10 sm:pt-8 sm:pb-6 md:px-14 md:pt-9"
    >
      <Logo />
      <nav aria-label="Primary" className="flex shrink-0 items-center gap-2 sm:gap-3.5 md:gap-8">
        <motion.button
          type="button"
          className={pillClass}
          style={{ backgroundColor: "#ffffff", color: "#111111" }}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls="what-we-do-panel"
          aria-haspopup="dialog"
          {...pillMotion}
        >
          What we do
        </motion.button>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass}
          style={{ backgroundColor: "#ffffff", color: "#111111" }}
          aria-label="Talk to us on WhatsApp"
          {...pillMotion}
        >
          Talk to us
        </motion.a>
      </nav>
    </header>
  );
}

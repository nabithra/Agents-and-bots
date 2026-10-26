"use client";

import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ToolsBand } from "@/components/tools-band";
import { WhatWeDoPanel } from "@/components/what-we-do-panel";

export function HomePage() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((value) => !value), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative h-dvh w-full overflow-hidden bg-white">
        <div
          className={`h-full overscroll-y-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${open ? "overflow-hidden" : "overflow-y-auto"}`}
          inert={open || undefined}
        >
          <Hero />
          <ToolsBand />
        </div>
        <Header open={open} onToggle={toggle} inert={open} />
        <WhatWeDoPanel open={open} onClose={close} />
      </div>
    </MotionConfig>
  );
}

"use client";

import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import { AgentPanel } from "@/components/agent-panel";
import { AgentsSection } from "@/components/agents-section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IndustriesSection } from "@/components/industries-section";
import { ToolsBand } from "@/components/tools-band";
import { WhatWeDoPanel } from "@/components/what-we-do-panel";
import type { Agent } from "@/lib/catalog";

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [agent, setAgent] = useState<Agent | null>(null);
  const locked = open || agent !== null;

  const toggle = useCallback(() => {
    setOpen((value) => !value);
    setAgent(null);
  }, []);
  const close = useCallback(() => setOpen(false), []);
  const closeAgent = useCallback(() => setAgent(null), []);
  const selectAgent = useCallback((next: Agent) => {
    setOpen(false);
    setAgent(next);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative h-dvh w-full overflow-clip bg-white">
        <Header open={open} onToggle={toggle} inert={locked} />
        <main
          className={`h-full scroll-pt-24 overscroll-y-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${locked ? "overflow-hidden" : "overflow-y-auto"}`}
          inert={locked || undefined}
        >
          <Hero />
          <ToolsBand />
          <AgentsSection onSelect={selectAgent} />
          <IndustriesSection />
        </main>
        <WhatWeDoPanel open={open} onClose={close} />
        <AgentPanel agent={agent} onClose={closeAgent} />
      </div>
    </MotionConfig>
  );
}

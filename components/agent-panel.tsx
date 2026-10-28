"use client";

import { useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { agentEnquiryUrl } from "@/lib/config";
import type { Agent } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import { pillClass, pillMotion } from "@/lib/ui";

type AgentPanelProps = {
  agent: Agent | null;
  onClose: () => void;
};

export function AgentPanel({ agent, onClose }: AgentPanelProps) {
  return (
    <AnimatePresence>
      {agent ? <Backdrop key="agent-backdrop" onClose={onClose} /> : null}
      {agent ? <PanelSurface key="agent-panel" agent={agent} onClose={onClose} /> : null}
    </AnimatePresence>
  );
}

function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: easeOut }}
      onClick={onClose}
      aria-hidden="true"
    />
  );
}

function PanelSurface({ agent, onClose }: { agent: Agent; onClose: () => void }) {
  const panelRef = useRef<HTMLElement>(null);
  const showCovers = agent.covers.length > 0;

  useLayoutEffect(() => {
    const root = panelRef.current;
    if (!root) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const closeButton = root.querySelector<HTMLElement>("[data-autofocus]");
    (closeButton ?? root).focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable(root);
      if (focusable.length === 0) {
        event.preventDefault();
        root.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !root.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <motion.aside
      ref={panelRef}
      id="agent-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="agent-panel-title"
      aria-describedby="agent-panel-summary"
      tabIndex={-1}
      className="fixed top-0 right-0 z-50 flex h-dvh w-[min(440px,calc(100vw-18px))] flex-col overflow-hidden bg-white shadow-[-24px_0_70px_rgba(0,0,0,0.08)] outline-none ring-1 ring-black/[0.05]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-6 pt-[max(1.35rem,env(safe-area-inset-top))] pb-5 sm:px-8 sm:pt-8">
        <h2 id="agent-panel-title" className="text-pretty text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
          {agent.name}
        </h2>
        <motion.button
          type="button"
          data-autofocus
          className="close-btn -mr-2 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink"
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          aria-label={`Close ${agent.name}`}
          onClick={onClose}
          whileHover={{ backgroundColor: "#f3f3f3" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.18, ease: easeOut }}
        >
          <CloseIcon />
        </motion.button>
      </div>

      <div className="panel-scroll min-h-0 flex-1 px-6 sm:px-8">
        <div className="pt-6 pb-[max(1.75rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-line px-2.5 py-[3px] text-[12px] font-medium leading-none tracking-[-0.011em] text-[#5c6b7a]">
              {agent.category}
            </span>
            {agent.ai ? (
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5c6b7a]">AI</span>
            ) : null}
          </div>
          <p id="agent-panel-summary" className="mt-5 text-pretty text-[16px] leading-7 tracking-[-0.011em] text-ink">
            {agent.whatItDoes}
          </p>
          {showCovers ? (
            <div className="mt-8">
              <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-muted">Example uses</h3>
              <ul className="mt-2">
                {agent.covers.map((item, index) => (
                  <motion.li
                    key={`${item}-${index}`}
                    className="border-b border-line py-[1.05rem] text-pretty text-[15px] leading-6 tracking-[-0.011em] text-ink last:border-b-0"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: easeOut, delay: 0.08 + index * 0.03 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="shrink-0 border-t border-line px-6 pt-4 pb-[max(1.15rem,env(safe-area-inset-bottom))] sm:px-8">
        <motion.a
          href={agentEnquiryUrl(agent.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pillClass} w-full`}
          style={{ backgroundColor: "#ffffff", color: "#111111" }}
          aria-label={`Talk to us on WhatsApp about ${agent.name}`}
          {...pillMotion}
        >
          Talk to us on WhatsApp
        </motion.a>
      </div>
    </motion.aside>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function getFocusable(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"),
  ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
}

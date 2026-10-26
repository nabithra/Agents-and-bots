"use client";

import { useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { offerings } from "@/lib/offerings";
import { easeOut } from "@/lib/motion";

type WhatWeDoPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function WhatWeDoPanel({ open, onClose }: WhatWeDoPanelProps) {
  return (
    <AnimatePresence>
      {open ? <Backdrop key="what-we-do-backdrop" onClose={onClose} /> : null}
      {open ? <PanelSurface key="what-we-do-panel" onClose={onClose} /> : null}
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

function PanelSurface({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLElement>(null);

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
      id="what-we-do-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="what-we-do-title"
      tabIndex={-1}
      className="fixed top-0 right-0 z-50 flex h-dvh w-[min(440px,calc(100vw-18px))] flex-col overflow-hidden bg-white shadow-[-24px_0_70px_rgba(0,0,0,0.08)] outline-none ring-1 ring-black/[0.05]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-6 pt-[max(1.35rem,env(safe-area-inset-top))] pb-5 sm:px-8 sm:pt-8">
        <h2 id="what-we-do-title" className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
          What we do
        </h2>
        <motion.button
          type="button"
          data-autofocus
          className="close-btn -mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink"
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          aria-label="Close what we do"
          onClick={onClose}
          whileHover={{ backgroundColor: "#f3f3f3" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.18, ease: easeOut }}
        >
          <CloseIcon />
        </motion.button>
      </div>

      <div className="panel-scroll min-h-0 flex-1 px-6 sm:px-8">
        <ol aria-label="What Actionpackd does" className="pb-[max(1.75rem,env(safe-area-inset-bottom))]">
          {offerings.map((item, index) => (
            <motion.li
              key={item}
              className="flex gap-4 border-b border-line py-[1.05rem] last:border-b-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut, delay: 0.12 + index * 0.04 }}
            >
              <span
                aria-hidden="true"
                className="w-7 shrink-0 pt-0.5 text-[13px] font-medium tracking-[0.04em] text-muted tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-pretty text-[15px] leading-6 tracking-[-0.011em] text-ink">{item}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.aside>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3.5 3.5l9 9M12.5 3.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getFocusable(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"),
  ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
}

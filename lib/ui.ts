import { easeOut } from "@/lib/motion";

/** Shared with the header so every pill on the page is the same control. */
export const pillClass =
  "pill inline-flex h-10 shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-ink px-3 text-[12.5px] font-medium tracking-[-0.011em] sm:h-11 sm:px-[1.35rem] sm:text-[15px]";

export const pillMotion = {
  whileHover: { backgroundColor: "#111111", color: "#ffffff" },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: easeOut },
} as const;

export const bandPad = "px-3.5 sm:px-10 md:px-14";

export const bandHeading =
  "text-[2.35rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0d1b2e] sm:text-5xl lg:text-[3.55rem]";

export const bandBody = "max-w-[28rem] text-[16.5px] leading-[1.55] text-[#7d8b9c] sm:text-[18px]";

import Image from "next/image";
import Link from "next/link";

/**
 * Placeholder ninja. To use the real mark, add the file at
 * /public/ninja.png and set USE_NINJA_PNG to true.
 */
export const USE_NINJA_PNG = false;

const markClass = "h-8 w-8 shrink-0 sm:h-10 sm:w-10";

export function Logo() {
  return (
    <Link href="/" className="logo-link inline-flex shrink-0 items-center gap-1.5 rounded-md sm:gap-2" aria-label="Actionpackd">
      {USE_NINJA_PNG ? (
        <Image
          src="/ninja.png"
          alt=""
          width={36}
          height={36}
          priority
          className={markClass}
        />
      ) : (
        <NinjaMark className={markClass} />
      )}
      <span className="text-[15px] font-extrabold leading-none tracking-[-0.045em] text-ink sm:text-[22px]">
        actionpackd
      </span>
    </Link>
  );
}

function NinjaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 76 68"
      className={`${className ?? ""} overflow-visible`}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38 18.5C27 15.5 15 16.5 3 11" stroke="#E31C23" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M37 24C25 25 13 29.5 3 26.5" stroke="#E31C23" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M30 46C23 54 14 60 5 62" stroke="#161616" strokeWidth="8" strokeLinecap="round" />
      <path d="M46 48C56 56 65 61 73 58" stroke="#161616" strokeWidth="8" strokeLinecap="round" />
      <path
        fill="#161616"
        d="M24 33c8-8 24-9 33 0 5.5 5.5 4.5 14-1.5 19-9 7-24 6-32-1-4.5-4.2-4.2-13 .5-18z"
      />
      <path fill="#161616" d="M42 30h16v16H40c0-6 1-12 2-16z" />
      <path d="M40 40C50 36 62 34 73 31" stroke="#161616" strokeWidth="6.6" strokeLinecap="round" />
      <circle cx="50" cy="24" r="12.2" fill="#161616" />
      <g clipPath="url(#ap-ninja-head)">
        <path d="M39 21.5c4.2-7 18.5-8.2 23.5-1.8" stroke="#E31C23" strokeWidth="4.4" strokeLinecap="round" />
      </g>
      <path d="M47.5 25.6h9.2" stroke="#ffffff" strokeWidth="2.15" strokeLinecap="round" />
      <defs>
        <clipPath id="ap-ninja-head">
          <circle cx="50" cy="24" r="12.2" />
        </clipPath>
      </defs>
    </svg>
  );
}

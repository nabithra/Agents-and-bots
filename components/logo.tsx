import Image from "next/image";
import Link from "next/link";

/**
 * Placeholder ninja. To use the real mark, add the file at
 * /public/ninja.png and set USE_NINJA_PNG to true.
 */
export const USE_NINJA_PNG = false;

const markClass = "h-7 w-7 shrink-0 sm:h-9 sm:w-9";

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
      viewBox="0 0 64 64"
      className={`${className ?? ""} overflow-visible`}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 16.5C22 14.2 12 15.2 4 11"
        stroke="#E31C23"
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      <path
        d="M29 21.5C21.5 22.6 12 26.5 5 24"
        stroke="#E31C23"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
      <path
        d="M24 46.5C19 53 13 58 6 59"
        stroke="#141414"
        strokeWidth="5.6"
        strokeLinecap="round"
      />
      <path
        d="M6 59H2.5"
        stroke="#141414"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M38 48C46 54 53 58 58 57.5"
        stroke="#141414"
        strokeWidth="5.6"
        strokeLinecap="round"
      />
      <path
        d="M58 57.5H62"
        stroke="#141414"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse
        cx="34"
        cy="40"
        rx="13"
        ry="9.5"
        fill="#141414"
        transform="rotate(-22 34 40)"
      />
      <path
        d="M44 34.5C50 33 56 33.5 61 31"
        stroke="#141414"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="43" cy="20" r="9.2" fill="#141414" />
      <g clipPath="url(#ap-ninja-head)">
        <path
          d="M34 18.2c3.2-5.2 13.4-6.4 18.2-1.6"
          stroke="#E31C23"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M41.2 21.4h7"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <defs>
        <clipPath id="ap-ninja-head">
          <circle cx="43" cy="20" r="9.2" />
        </clipPath>
      </defs>
    </svg>
  );
}

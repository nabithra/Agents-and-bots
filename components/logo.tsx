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
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33 16.8C24 14.2 14 15 3 11.6c5.2 3.4 12.4 3.6 18.6 2.2 4-.8 8-1.6 11.4-3z"
        fill="#E31C23"
      />
      <path
        d="M32 22.2C23 23.6 13 27 3.5 25.6c6 2.4 13.4 1.6 19.2-.6 3.2-1.2 6.4-2.2 9.3-2.8z"
        fill="#E31C23"
      />
      <path
        d="M22 44c-1.2 5.2-4.2 9.4-8.6 12.2"
        stroke="#141414"
        strokeWidth="6.4"
        strokeLinecap="round"
      />
      <path
        d="M36 45.5c5.2 3.6 10.6 6 16.4 5.2"
        stroke="#141414"
        strokeWidth="6.4"
        strokeLinecap="round"
      />
      <path
        fill="#141414"
        d="M20 31.5c5.2-5.4 16.6-6.2 21.6-.4 3.4 4 2.6 9.4-1.2 12.6-5.6 4.6-15.6 4-20.6-.8-3-2.8-2.8-7.6.2-11.4z"
      />
      <path fill="#141414" d="M31 24h14v16H29c.4-5.2 1.2-11 2-16z" />
      <path
        d="M38 34.5c4.6-.6 9.2-.2 13-2"
        stroke="#141414"
        strokeWidth="5.2"
        strokeLinecap="round"
      />
      <circle cx="40" cy="20" r="10.4" fill="#141414" />
      <path
        d="M31.2 18.6c2.6-4.6 12.2-5.6 16.6-1.4"
        stroke="#E31C23"
        strokeWidth="3.5"
        strokeLinecap="round"
        clipPath="url(#ap-ninja-head)"
      />
      <path d="M37.4 21.4h7.4" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" />
      <defs>
        <clipPath id="ap-ninja-head">
          <circle cx="40" cy="20" r="10.4" />
        </clipPath>
      </defs>
    </svg>
  );
}

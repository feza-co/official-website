"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallbackHref: string;
  label: string;
}

/**
 * Goes back to wherever the visitor came from, preserving their scroll
 * position — but only when that was somewhere on this site. `history.length`
 * alone is not enough: arriving from a search result also leaves length > 1,
 * and back() would then throw the visitor off the site entirely.
 */
export default function BackButton({ fallbackHref, label }: BackButtonProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    if (typeof window === "undefined") return;

    const cameFromThisSite =
      document.referrer !== "" &&
      new URL(document.referrer).origin === window.location.origin;

    if (cameFromThisSite && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
    // Otherwise the plain <a href> takes over and lands on fallbackHref.
  }

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      className="group mb-10 inline-flex items-center gap-2 text-[0.9375rem] text-feza-muted
                 transition-colors duration-300 hover:text-feza-accent"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
        aria-hidden
      >
        <path d="M10.5 7H3.5M3.5 7L7 3.5M3.5 7L7 10.5" />
      </svg>
      {label}
    </a>
  );
}

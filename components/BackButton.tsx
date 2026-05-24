"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallbackHref: string;
  label: string;
}

/** F09: history.back() ile önceki konuma döner; fallback olarak anchor linki kullanır. */
export default function BackButton({ fallbackHref, label }: BackButtonProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    // Referrer aynı siteyse history.back(), değilse fallback href'e git
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
    // Varsayılan <a> davranışı (fallbackHref) tetiklenir
  }

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      className="group mb-10 inline-flex cursor-pointer items-center gap-2 rounded-sm
                 font-mono text-xs uppercase tracking-widest text-feza-muted-xs
                 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.5 7H3.5M3.5 7L7 3.5M3.5 7L7 10.5" />
      </svg>
      <span className="group-hover:-translate-x-0.5 transition-transform duration-200 inline-block">
        {label}
      </span>
    </a>
  );
}

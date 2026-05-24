"use client";

import { useState } from "react";

interface CopyEmailProps {
  email: string;
}

/** F12: E-posta adresini panoya kopyalayan buton — mail client olmayan kullanıcılar için. */
export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API desteklenmiyorsa sessizce yoksay
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "E-posta kopyalandı" : `${email} adresini kopyala`}
      title={copied ? "Kopyalandı!" : "Adresi kopyala"}
      className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase
                 text-feza-muted-xs transition-colors duration-200
                 hover:text-indigo-600 dark:hover:text-indigo-400
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]
                 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]
                 rounded-sm cursor-pointer"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M2 6l3 3 5-5" />
          </svg>
          <span className="text-emerald-600 dark:text-emerald-400">Kopyalandı</span>
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="4" y="4" width="7" height="7" rx="1" />
            <path d="M8 4V2.5A.5.5 0 007.5 2h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H4" />
          </svg>
          <span>Kopyala</span>
        </>
      )}
    </button>
  );
}

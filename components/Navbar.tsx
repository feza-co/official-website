"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#founders", label: "Ekip" },
  { href: "/#projects", label: "Projeler" },
  { href: "/#contact", label: "İletişim" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/90 backdrop-blur-md
                 border-b border-slate-200/80"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5">
          {/* Glyph mark */}
          <div
            className="relative w-7 h-7 flex items-center justify-center"
            aria-hidden
          >
            <div
              className="absolute inset-0 rounded-full border border-indigo-400/60
                         group-hover:border-indigo-500 transition-all duration-300
                         group-hover:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-indigo-600
                         group-hover:bg-indigo-500 transition-colors duration-300"
            />
          </div>

          {/* Wordmark */}
          <span
            className="font-orbitron font-bold text-sm tracking-widest text-slate-900
                       group-hover:text-slate-700 transition-colors duration-300"
          >
            FEZA
            <span className="text-indigo-600">—CO</span>
          </span>
        </Link>

        {/* ── Nav Links (desktop) ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest text-slate-500 uppercase
                         hover:text-slate-900 transition-colors duration-200 relative group"
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-indigo-600
                           group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* ── Right badge ── */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full
                        bg-indigo-50 border border-indigo-100/80"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{
                animation: "statusPulse 2.5s ease-in-out infinite",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
              }}
            />
            <span className="font-mono text-[10px] tracking-widest text-indigo-600 uppercase">
              Aktif Kolektif
            </span>
          </div>
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg
                     border border-slate-200 bg-white text-slate-600
                     transition-colors duration-200 hover:border-indigo-200 hover:text-indigo-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            {isMenuOpen ? (
              <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" />
            ) : (
              <path d="M3 5.5H15M3 9H15M3 12.5H15" />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Thin indigo shimmer line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 30%, rgba(99,102,241,0.5) 50%, rgba(99,102,241,0.3) 80%, transparent 100%)",
        }}
      />

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-b border-slate-200/80 bg-white/95
                    transition-[max-height,opacity] duration-300 ease-out
                    ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between rounded-lg px-3 py-3
                         font-mono text-xs tracking-widest text-slate-600 uppercase
                         transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-700
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{label}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M2 6h8M7 3l3 3-3 3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

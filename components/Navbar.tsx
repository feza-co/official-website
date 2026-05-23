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
      className="fixed top-3 left-3 right-3 z-50 rounded-lg
                 border border-white/80 bg-white/82 shadow-[0_10px_32px_rgba(24,24,27,0.08)]
                 backdrop-blur-xl supports-[backdrop-filter]:bg-white/72"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4
                   focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2
                   focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest
                   focus:text-blue-700 focus:shadow-lg focus:outline-none
                   focus:ring-2 focus:ring-blue-500/35"
      >
        Ana içeriğe geç
      </a>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex cursor-pointer items-center gap-2.5 rounded-lg
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35"
        >
          {/* Glyph mark */}
          <div
            className="relative w-7 h-7 flex items-center justify-center"
            aria-hidden
          >
            <div
              className="absolute inset-0 rounded-full border border-indigo-400/60
                         group-hover:border-blue-500 transition-all duration-300
                         group-hover:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
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
            <span className="text-cyan-600">—CO</span>
          </span>
        </Link>

        {/* ── Nav Links (desktop) ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative cursor-pointer rounded-sm font-mono text-xs uppercase
                         tracking-widest text-zinc-500 transition-colors duration-200
                         hover:text-zinc-950 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500/30"
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-blue-600
                           group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* ── Right badge ── */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full
                        bg-emerald-50 border border-emerald-100/80"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{
                animation: "statusPulse 2.5s ease-in-out infinite",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
              }}
            />
            <span className="font-mono text-[10px] tracking-widest text-emerald-700 uppercase">
              Aktif Kolektif
            </span>
          </div>
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg
                     border border-slate-200 bg-white text-slate-600
                     cursor-pointer transition-colors duration-200 hover:border-blue-200 hover:text-blue-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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
        className="h-px w-full rounded-b-lg"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.25) 30%, rgba(37,99,235,0.45) 50%, rgba(37,99,235,0.25) 80%, transparent 100%)",
        }}
      />

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden rounded-b-lg border-t border-slate-200/80 bg-white/95
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
                         cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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

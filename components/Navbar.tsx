"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#founders", label: "Ekip" },
  { href: "/#projects", label: "Projeler" },
  { href: "/#contact", label: "İletişim" },
];

export default function Navbar() {
  usePathname(); // reserved for future active-link highlighting

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

        {/* ── Mobile links ── */}
        <div className="md:hidden flex items-center gap-1.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[10px] text-slate-500 hover:text-indigo-600
                         transition-colors px-2"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Thin indigo shimmer line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 30%, rgba(99,102,241,0.5) 50%, rgba(99,102,241,0.3) 80%, transparent 100%)",
        }}
      />
    </header>
  );
}

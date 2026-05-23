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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background:
          "linear-gradient(180deg, rgba(5,12,23,0.95) 0%, rgba(5,12,23,0.80) 100%)",
        borderBottom: "1px solid rgba(0, 200, 255, 0.08)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5">
          {/* Glyph mark */}
          <div
            className="relative w-7 h-7 flex items-center justify-center"
            aria-hidden
          >
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-[#00c8ff]/40
                         group-hover:border-[#00c8ff]/80 transition-all duration-300
                         group-hover:shadow-[0_0_12px_rgba(0,200,255,0.35)]"
            />
            {/* Inner dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] group-hover:shadow-[0_0_8px_#00c8ff] transition-shadow duration-300" />
          </div>

          {/* Wordmark */}
          <span
            className="font-orbitron font-bold text-sm tracking-widest text-feza-text
                       group-hover:text-white transition-colors duration-300"
          >
            FEZA
            <span className="text-[#00c8ff]">—CO</span>
          </span>
        </Link>

        {/* ── Navigation Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest text-feza-muted uppercase
                         hover:text-[#00c8ff] transition-colors duration-300 relative group"
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-[#00c8ff]
                            group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* ── Right side: collective badge ── */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
            style={{
              background: "rgba(0, 200, 255, 0.05)",
              border: "1px solid rgba(0, 200, 255, 0.12)",
            }}
          >
            {/* Live indicator */}
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#00c8ff]"
              style={{ boxShadow: "0 0 6px #00c8ff" }}
            />
            <span className="font-mono text-[10px] tracking-widest text-[#00c8ff]/70 uppercase">
              Aktif Kolektif
            </span>
          </div>
        </div>

        {/* ── Mobile Menu Icon ── */}
        <div className="md:hidden flex items-center gap-1.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[10px] text-feza-muted hover:text-[#00c8ff] transition-colors px-2"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Bottom border glow line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,200,255,0.25) 20%, rgba(0,200,255,0.5) 50%, rgba(0,200,255,0.25) 80%, transparent 100%)",
        }}
      />
    </header>
  );
}

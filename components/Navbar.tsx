"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/#founders", label: "Ekip",      sectionId: "founders" },
  { href: "/#projects", label: "Projeler",  sectionId: "projects" },
  { href: "/#contact",  label: "İletişim",  sectionId: "contact"  },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <path d="M13.5 10A6 6 0 0 1 6 2.5a6 6 0 1 0 7.5 7.5z" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  const label = isDark ? "Açık moda geç" : "Koyu moda geç";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? label : "Tema değiştir"}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg
                 border border-feza-border bg-feza-card text-feza-muted-xs
                 transition-colors duration-200
                 hover:border-feza-border-md hover:text-feza-text
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
    >
      {/* H5b fix: SSR/CSR uyumsuzluğunu önle — mounted olmadan hiç ikon render etme */}
      {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : null}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // F04: aktif bölümü IntersectionObserver ile takip et
  const [activeSection, setActiveSection] = useState<string>("");

  // H3a fix: Escape tuşuyla mobil menüyü kapat
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // F04: IntersectionObserver — bölümlerin görünürlüğünü izle
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-3 left-3 right-3 z-50 rounded-lg
                 border border-feza-border/80 bg-feza-card/82 shadow-[0_10px_32px_rgba(0,0,0,0.08)]
                 backdrop-blur-xl supports-[backdrop-filter]:bg-feza-card/72"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4
                   focus:z-[60] focus:rounded-lg focus:bg-feza-card focus:px-4 focus:py-2
                   focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest
                   focus:text-blue-700 focus:shadow-lg focus:outline-none
                   focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
      >
        Ana içeriğe geç
      </a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between gap-3">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex cursor-pointer items-center gap-2.5 rounded-lg
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
        >
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

          <span
            className="font-orbitron font-bold text-sm tracking-widest text-feza-text
                       group-hover:text-feza-secondary transition-colors duration-300"
          >
            FEZA
            <span className="text-cyan-700 dark:text-cyan-400">—CO</span>
          </span>
        </Link>

        {/* ── Nav Links (desktop) ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative cursor-pointer rounded-sm font-mono text-xs uppercase
                           tracking-widest transition-colors duration-200 focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]
                           ${isActive
                             ? "text-feza-text"
                             : "text-feza-muted-xs hover:text-feza-text"
                           }`}
              >
                {label}
                {/* Aktif göstergesi: kalıcı çizgi */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-indigo-600 transition-all duration-300
                              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* ── Right: badge + theme toggle ── */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full
                        bg-emerald-50 border border-emerald-100/80
                        dark:bg-emerald-950/40 dark:border-emerald-900/60"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{
                animation: "statusPulse 2.5s ease-in-out infinite",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
              }}
            />
            <span className="font-mono text-[10px] tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
              Aktif Kolektif
            </span>
          </div>
          <ThemeToggle />
        </div>

        {/* ── Mobile: theme toggle + menu toggle ── */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                       border border-feza-border bg-feza-card text-feza-muted-xs
                       cursor-pointer transition-colors duration-200
                       hover:border-blue-200 hover:text-blue-600
                       focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
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
        </div>
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
        className={`md:hidden overflow-hidden rounded-b-lg border-t border-feza-border/80 bg-feza-card/95
                    transition-[max-height,opacity] duration-300 ease-out
                    ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 sm:px-6 py-4">
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center justify-between rounded-lg px-3 py-3.5 min-h-[44px]
                           font-mono text-xs tracking-widest uppercase
                           cursor-pointer transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]
                           ${isActive
                             ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400"
                             : "text-feza-secondary hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                           }`}
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
            );
          })}
        </div>
      </div>
    </header>
  );
}

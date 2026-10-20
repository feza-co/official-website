"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/#projects", label: "Projeler", sectionId: "projects" },
  { href: "/#founders", label: "Ekip", sectionId: "founders" },
  { href: "/#contact", label: "İletişim", sectionId: "contact" },
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
  // resolvedTheme, not theme — with defaultTheme="system" `theme` is the
  // literal string "system", which made the old toggle show the wrong icon
  // and need two clicks for anyone on a dark OS.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? (isDark ? "Açık temaya geç" : "Koyu temaya geç") : "Temayı değiştir"
      }
      className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md
                 border border-feza-border bg-feza-card text-feza-muted
                 transition-colors duration-300 hover:border-feza-border-md hover:text-feza-text"
    >
      {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : null}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const observers = navLinks.flatMap(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return [];
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      return [obs];
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-feza-border/70
                 bg-feza-bg/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:px-10">
        <Link
          href="/"
          className="display text-lg tracking-tight text-feza-text transition-colors duration-300 hover:text-feza-accent"
        >
          Feza&#8209;Co
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 text-[0.9375rem] transition-colors duration-300 ${
                  isActive
                    ? "text-feza-text"
                    : "text-feza-muted hover:text-feza-text"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-feza-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md
                       border border-feza-border bg-feza-card text-feza-muted
                       transition-colors duration-300 hover:text-feza-text md:hidden"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              {isMenuOpen ? (
                <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" />
              ) : (
                <path d="M3 5.5H15M3 9H15M3 12.5H15" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`overflow-hidden border-t border-feza-border bg-feza-bg/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="flex min-h-[48px] items-center border-b border-feza-border/60 text-[0.9375rem]
                         text-feza-secondary transition-colors duration-200 last:border-b-0 hover:text-feza-text"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

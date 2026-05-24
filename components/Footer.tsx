import Link from "next/link";
import { GitHubIcon } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-feza-card border-t border-feza-border/80">
      {/* ── Thin indigo shimmer line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.25) 30%, rgba(99,102,241,0.45) 50%, rgba(99,102,241,0.25) 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8">

          {/* ── Brand Block ── */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-indigo-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              </div>
              <span className="font-orbitron font-bold text-sm tracking-widest text-feza-text">
                FEZA<span className="text-cyan-700 dark:text-cyan-400">—CO</span>
              </span>
            </div>
            <p className="font-outfit text-sm text-feza-muted leading-relaxed max-w-sm">
              Beş kurucu ortak, sınırsız vizyon. Teknolojinin sınırlarını
              birlikte zorlayan bağımsız yazılım kolektifi.
            </p>

            {/* Social row */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="mailto:fezahackathon@gmail.com"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md
                           border border-feza-border bg-feza-surface-2 text-feza-secondary
                           transition-colors duration-200 hover:text-indigo-600 hover:border-indigo-200
                           dark:hover:border-indigo-800 dark:hover:text-indigo-400
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                aria-label="E-posta gönder"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 3.5h13M1 3.5l6.5 5L14 3.5M1 3.5V11.5h13V3.5" />
                </svg>
              </a>
              <a
                href="https://github.com/feza-co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md
                           border border-feza-border bg-feza-surface-2 text-feza-secondary
                           transition-colors duration-200 hover:text-feza-text hover:border-feza-border-md
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                aria-label="GitHub organizasyonu"
              >
                <GitHubIcon size={15} />
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="space-y-3 md:col-span-3">
            <p className="font-mono text-[10px] tracking-widest text-feza-muted-xs uppercase mb-4">
              Navigasyon
            </p>
            {[
              { href: "/#founders", label: "Ekip" },
              { href: "/#projects", label: "Projeler" },
              { href: "/#contact",  label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block cursor-pointer rounded-sm font-outfit text-sm text-feza-secondary
                           transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Contact & Manifesto ── */}
          <div className="space-y-3 md:col-span-4">
            <p className="font-mono text-[10px] tracking-widest text-feza-muted-xs uppercase mb-4">
              İletişim
            </p>
            <a
              href="mailto:fezahackathon@gmail.com"
              className="block cursor-pointer font-outfit text-sm text-feza-secondary
                         transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 break-all
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b] rounded-sm"
            >
              fezahackathon@gmail.com
            </a>
            <a
              href="https://github.com/feza-co"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer font-outfit text-sm text-feza-secondary
                         transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b] rounded-sm"
            >
              <span lang="en">github.com/feza-co</span>
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 pt-6 border-t border-feza-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-[11px] text-feza-muted-xs">
            © {year} Feza-Co Kolektifi. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[11px] text-feza-muted-xs">
            <span className="text-cyan-700 dark:text-cyan-400">5</span> ortak ·{" "}
            <span className="text-emerald-600 dark:text-emerald-400">1</span> aktif proje ·{" "}
            <span className="text-indigo-600 dark:text-indigo-400">∞</span> vizyon
          </p>
        </div>
      </div>
    </footer>
  );
}

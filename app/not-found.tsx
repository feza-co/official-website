import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bu kolektifte mevcut değil.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80svh] flex items-center justify-center overflow-hidden px-5 sm:px-6 py-20">
      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, color-mix(in srgb, var(--indigo) 8%, transparent), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        {/* ── Error code ── */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-widest uppercase text-[#2563eb] dark:text-indigo-400">
            <span className="h-px w-10 bg-indigo-400" aria-hidden />
            Sistem Yanıtı
            <span className="h-px w-10 bg-indigo-400" aria-hidden />
          </div>

          <div
            className="font-orbitron font-black text-gradient-brand tracking-tight leading-none"
            style={{ fontSize: "clamp(5rem, 18vw, 10rem)" }}
          >
            404
          </div>
        </div>

        {/* ── Message ── */}
        <div className="space-y-4">
          <h1
            className="font-orbitron font-bold text-feza-text"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }}
          >
            Sayfa bu kolektifte yok.
          </h1>
          <p className="font-outfit text-base sm:text-lg text-feza-secondary leading-relaxed max-w-md mx-auto">
            Aradığınız yol mevcut değil veya kaldırılmış. Ana sayfaya dönüp
            keşfetmeye devam edebilirsiniz.
          </p>
        </div>

        {/* ── Actions ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/"
            className="group flex cursor-pointer items-center justify-center sm:justify-start gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg
                       font-mono text-sm tracking-widest uppercase transition-all duration-300
                       bg-feza-text text-feza-bg
                       hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/20
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:-translate-x-0.5 transition-transform duration-300"
            >
              <path d="M10.5 6.5H2.5M2.5 6.5L5.5 3.5M2.5 6.5L5.5 9.5" />
            </svg>
            <span>Ana Sayfaya Dön</span>
          </Link>

          <Link
            href="/#projects"
            className="flex cursor-pointer items-center justify-center sm:justify-start gap-2 px-6 sm:px-7 py-3.5 rounded-lg
                       font-mono text-sm tracking-widest uppercase transition-all duration-300
                       text-feza-secondary border border-feza-border bg-feza-card/80 backdrop-blur-md
                       hover:border-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400
                       hover:-translate-y-0.5 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
          >
            <span>Projeleri Gör</span>
          </Link>
        </div>

        {/* ── H9a fix: kullanıcı dostu kurtarma ipucu ── */}
        <div className="pt-6 font-mono text-[10px] tracking-widest uppercase text-feza-faint">
          {/* Decorative prefix — aria-hidden so screen readers skip the // symbol */}
          <span className="text-rose-400" aria-hidden="true">{"//"}</span>{" "}
          URL hatalı olabilir veya sayfa kaldırılmış — yukarıdaki bağlantıları deneyin
        </div>
      </div>
    </div>
  );
}

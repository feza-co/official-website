import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";
import MouseGlow from "@/components/MouseGlow";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import { members, projects } from "@/lib/data";

// ─── Derived data for stats & ticker ──────────────────────────────────────────

const uniqueHackathons = Array.from(
  new Set(members.flatMap((m) => m.hackathons ?? []))
);

const tickerItems = [
  ...uniqueHackathons,
  ...Array.from(new Set(projects.flatMap((p) => p.tags.slice(0, 3)))),
];

const activeProjectCount = projects.filter((p) => p.status === "active").length;
const completedProjectCount = projects.filter((p) => p.status === "completed").length;

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="group relative min-h-[88svh] md:min-h-[94svh] flex flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16"
      aria-label="Ana başlık"
    >
      {/* ── Cursor-following glow (md+) ── */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <MouseGlow />
      </div>

      {/* ── Backdrop layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 30% 30%, color-mix(in srgb, var(--indigo) 7%, transparent) 0%, transparent 60%), radial-gradient(ellipse 65% 55% at 80% 70%, color-mix(in srgb, var(--cyan) 5%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* ── Floating geometric accents (md+) ── */}
      <div
        className="absolute right-[8%] top-[18%] hidden md:block pointer-events-none animate-glow-pulse"
        aria-hidden
      >
        <div
          className="h-32 w-32 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--indigo) 40%, transparent), transparent 70%)",
          }}
        />
      </div>
      <div
        className="absolute right-[24%] bottom-[18%] hidden md:block pointer-events-none animate-glow-pulse"
        style={{ animationDelay: "2s" }}
        aria-hidden
      >
        <div
          className="h-40 w-40 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--cyan) 35%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* ── Vertical version marker (md+) ── */}
      <div
        className="absolute right-6 top-1/2 hidden lg:flex -translate-y-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase text-feza-faint"
        aria-hidden
      >
        <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
          v1 · est. 2026
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-indigo-300/40 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="max-w-3xl">
          {/* ── Status row ── */}
          <div
            className="flex flex-wrap items-center gap-3 mb-10 sm:mb-14
                       animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                style={{
                  animation: "statusPulse 2.5s ease-in-out infinite",
                  boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                }}
              />
              Aktif Kolektif
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-feza-border bg-feza-card/60 backdrop-blur-sm px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-feza-muted-xs">
              <span className="text-indigo-500">{"//"}</span>
              {members.length} kurucu · {projects.length} proje
            </div>
          </div>

          {/* ── Eyebrow line ── */}
          <div
            className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-indigo-500
                       animate-fade-in opacity-0 [animation-delay:180ms] [animation-fill-mode:forwards]"
          >
            <span className="h-px w-10 bg-indigo-400" aria-hidden />
            Yazılım kolektifi
          </div>

          {/* ── Title ── */}
          <div className="space-y-2 md:space-y-1">
            <div
              className="overflow-hidden
                         animate-fade-in-up opacity-0 [animation-delay:260ms] [animation-fill-mode:forwards]"
            >
              <h1
                className="font-orbitron font-black tracking-[-0.035em] leading-[0.95] text-gradient-brand"
                style={{
                  fontSize: "clamp(3.25rem, 14vw, 12rem)",
                }}
              >
                FEZA
              </h1>
            </div>

            <div
              className="flex items-center gap-4 md:gap-6
                         animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]"
            >
              <div className="relative flex-1 h-px max-w-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-cyan-400 to-transparent" />
                <div
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  style={{
                    animation: "shimmerLine 3.5s ease-in-out infinite",
                  }}
                />
              </div>
              <span
                className="font-orbitron font-bold text-indigo-600 dark:text-indigo-400 tracking-widest"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
              >
                — CO
              </span>
            </div>
          </div>

          {/* ── Tagline with rotating word ── */}
          <div
            className="mt-10 md:mt-12
                       animate-fade-in-up opacity-0 [animation-delay:560ms] [animation-fill-mode:forwards]"
          >
            <p
              className="font-outfit font-light text-feza-secondary leading-relaxed"
              style={{
                fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
                lineHeight: 1.7,
              }}
            >
              Teknolojinin sınırlarını birlikte{" "}
              <span className="text-feza-text font-medium">zorluyoruz.</span>
              <br />
              <span className="font-outfit font-normal text-feza-muted-xs">
                Hiyerarşisiz bir yapıda, beş kurucu ortak — sınırsız vizyon.
              </span>
            </p>
          </div>

          {/* ── CTA Buttons ── */}
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4
                       animate-fade-in-up opacity-0 [animation-delay:720ms] [animation-fill-mode:forwards]"
          >
            <Link
              href="#projects"
              className="group/cta relative flex cursor-pointer items-center justify-center sm:justify-start gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg overflow-hidden
                         font-mono text-sm tracking-widest uppercase transition-all duration-300
                         bg-feza-text text-feza-bg border border-feza-text
                         hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/20
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/35"
            >
              <span className="relative z-10">Projeleri Gör</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="relative z-10 group-hover/cta:translate-x-0.5 transition-transform duration-300"
              >
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" />
              </svg>
            </Link>

            <Link
              href="#founders"
              className="flex cursor-pointer items-center justify-center sm:justify-start gap-2 px-6 sm:px-7 py-3.5 rounded-lg
                         font-mono text-sm tracking-widest uppercase transition-all duration-300
                         text-feza-secondary border border-feza-border bg-feza-card/80 backdrop-blur-md
                         hover:border-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400
                         hover:-translate-y-0.5 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-indigo-500/35"
            >
              <span>Ekibi Tanı</span>
            </Link>

            <a
              href="#contact"
              className="hidden sm:inline-flex cursor-pointer items-center gap-2 px-1 ml-1 font-mono text-xs tracking-widest uppercase text-feza-muted-xs
                         transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <span>İletişime geç</span>
              <span className="text-indigo-500">↗</span>
            </a>
          </div>

          {/* ── Stats grid ── */}
          <div
            className="mt-12 sm:mt-16
                       animate-fade-in opacity-0 [animation-delay:920ms] [animation-fill-mode:forwards]"
          >
            <div className="h-px mb-6 bg-gradient-to-r from-indigo-200/60 via-feza-border to-transparent" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-10 md:gap-x-14">
              {[
                { value: members.length,      label: "Kurucu Ortak", suffix: "" },
                { value: projects.length,     label: "Toplam Proje", suffix: "" },
                { value: uniqueHackathons.length, label: "Hackathon & Yarışma", suffix: "" },
                { value: 2026,                label: "Kuruluş Yılı", suffix: "" },
              ].map(({ value, label, suffix }) => (
                <div key={label} className="space-y-1">
                  <p className="font-orbitron font-bold text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400">
                    <CountUp end={value} suffix={suffix} />
                  </p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-feza-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex
                   animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]"
        aria-hidden
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-feza-muted">
          Aşağı kaydır
        </span>
        <div className="relative h-9 w-5 rounded-full border border-feza-border-md">
          <div
            className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-indigo-500 animate-scroll-hint"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Ticker Section ───────────────────────────────────────────────────────────

function TickerSection() {
  return (
    <section
      className="relative py-6 sm:py-8 border-y border-feza-border bg-feza-surface-2"
      aria-label="Hackathon & yarışma seridi"
    >
      <div className="max-w-[100vw] overflow-hidden">
        <Marquee items={tickerItems} />
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`mb-12 md:mb-16 space-y-4 ${isCenter ? "text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <div className="h-px w-10 bg-indigo-400" aria-hidden />
        <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
          {label}
        </span>
        <div className="h-px w-10 bg-indigo-200 dark:bg-indigo-800" aria-hidden />
      </div>
      <h2
        className="font-orbitron font-bold text-feza-text text-balance"
        style={{ fontSize: "clamp(1.6rem, 4vw, 2.75rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-outfit text-base text-feza-secondary leading-relaxed text-balance ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerSection />

      {/* ── Founders Section ── */}
      <section
        id="founders"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-card overflow-hidden"
        aria-label="Kurucu Ortaklar"
      >
        {/* Soft top fade */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--indigo) 4%, transparent), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <SectionHeader
            label="// Ekip"
            title="Beş Kurucu Ortak"
            subtitle="Bağımsız zihinler, ortak bir çatı altında. Her ortak eşit düzeyde kurucu; hiyerarşi yok, sadece vizyon ve yetkinlik."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {members.map((member, i) => (
              <MemberCard key={member.slug} member={member} index={i} />
            ))}
          </div>

          {/* Manifesto callout */}
          <div
            className="mt-10 sm:mt-12 relative overflow-hidden flex flex-col sm:flex-row items-start gap-3 sm:gap-5 px-5 sm:px-7 py-6 rounded-xl bg-feza-surface-2 border border-feza-border"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
              style={{
                background:
                  "linear-gradient(180deg, #6366f1 0%, #06b6d4 100%)",
              }}
              aria-hidden
            />
            <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500 shrink-0 sm:mt-1 pl-2 sm:pl-3">
              Manifesto
            </span>
            <p className="font-mono text-xs text-feza-muted-xs leading-[1.9] pl-2 sm:pl-0">
              <span className="text-indigo-500">{"//"}</span>{" "}
              {'Bu kolektifte hiç kimse "Lead", "Senior" veya "Manager" değildir.'}
              <br />
              <span className="text-indigo-500">{"//"}</span>{" "}
              {"Her üye eşit düzeyde Kurucu Ortak'tır."}
              <br />
              <span className="text-indigo-500">{"//"}</span>{" "}
              {"Fikirler, unvandan değil — üretimden değer kazanır."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section
        id="projects"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-bg overflow-hidden"
        aria-label="Projeler"
      >
        {/* Subtle accent backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 80% 20%, color-mix(in srgb, var(--cyan) 5%, transparent), transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
            <SectionHeader
              label="// Projeler"
              title="Üretilenler"
              subtitle="Kolektif olarak geliştirdiğimiz, geliştirmeye devam ettiğimiz çalışmalar. Her proje, farklı uzmanlıkların kesişiminde doğar."
            />
            <div className="flex shrink-0 items-center gap-4 font-mono text-[10px] tracking-widest uppercase mb-2 sm:mb-6">
              <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {activeProjectCount} Aktif
              </span>
              <span className="flex items-center gap-2 text-feza-muted-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {completedProjectCount} Tamamlandı
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div
            className="mt-6 relative flex flex-col items-center justify-center py-14 rounded-xl overflow-hidden
                       border-2 border-dashed border-feza-border bg-feza-card/60 backdrop-blur-sm xl:col-span-2"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 50% 50% at 50% 50%, color-mix(in srgb, var(--indigo) 8%, transparent), transparent 70%)",
              }}
            />
            <div className="relative flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
                Yakında
              </span>
            </div>
            <p className="relative font-outfit text-sm text-center text-feza-muted-xs max-w-sm">
              Yeni projeler hazırlanıyor. Kolektifin bir sonraki adımı geliyor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-card overflow-hidden"
        aria-label="İletişim"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <div
            className="relative rounded-2xl overflow-hidden px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20
                       border border-feza-border"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--indigo) 8%, var(--bg)) 0%, var(--bg) 40%, color-mix(in srgb, var(--cyan) 6%, var(--bg)) 100%)",
            }}
          >
            {/* Multi-layer ambient glow */}
            <div
              className="absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-50"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--indigo) 40%, transparent), transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--cyan) 40%, transparent), transparent 70%)",
              }}
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              aria-hidden
              style={{
                backgroundImage:
                  "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
              {/* Left: heading */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-indigo-400" aria-hidden />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
                    {"// İletişim"}
                  </span>
                </div>
                <h2
                  className="font-orbitron font-bold text-feza-text leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
                >
                  Birlikte bir şeyler{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">üretelim.</span>
                </h2>
                <p
                  className="font-outfit text-base sm:text-lg text-feza-secondary leading-relaxed max-w-lg"
                >
                  Bir fikriniz, bir projeniz veya sadece selamlaşmak için bize ulaşın.
                  Kolektifin kapıları her zaman açık.
                </p>
              </div>

              {/* Right: contact actions */}
              <div className="space-y-3">
                <a
                  href="mailto:fezahackathon@gmail.com"
                  className="group/c flex items-center justify-between gap-4 rounded-xl px-5 py-4
                             bg-feza-text text-feza-bg
                             transition-all duration-300
                             hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/20
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/35"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-feza-bg/15">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1.5 4h15M1.5 4l7.5 6 7.5-6M1.5 4v10h15V4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">E-posta</p>
                      <p className="font-outfit text-sm font-medium truncate">fezahackathon@gmail.com</p>
                    </div>
                  </div>
                  <span className="shrink-0 opacity-60 group-hover/c:opacity-100 group-hover/c:translate-x-0.5 transition-all duration-300">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/feza-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/c flex items-center justify-between gap-4 rounded-xl px-5 py-4
                             border border-feza-border bg-feza-card/80 backdrop-blur-sm text-feza-text
                             transition-all duration-300
                             hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/35"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-feza-surface-2 text-feza-secondary">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p lang="en" className="font-mono text-[10px] tracking-widest uppercase text-feza-muted">GitHub</p>
                      <p className="font-outfit text-sm font-medium truncate">@feza-co</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-feza-muted-xs group-hover/c:text-indigo-600 group-hover/c:translate-x-0.5 transition-all duration-300">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

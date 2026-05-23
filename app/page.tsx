import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";
import { members, projects, getMembersForProject } from "@/lib/data";

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
      aria-label="Ana başlık"
    >
      {/* ── Radial gradient: center glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(0,200,255,0.055) 0%, transparent 70%)",
        }}
      />

      {/* ── Top decorative metadata bar ── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="flex items-center gap-3 mb-14 animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
          <div
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(0,200,255,0.45)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#00c8ff",
                boxShadow: "0 0 6px #00c8ff",
                animation: "statusPulse 2s ease-in-out infinite",
              }}
            />
            Kolektif · Aktif
          </div>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,200,255,0.2), transparent)",
            }}
          />
          <span
            className="font-mono text-[10px] tracking-widest"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            EST. 2024
          </span>
        </div>

        {/* ── Main title block ── */}
        <div className="space-y-4 md:space-y-2">
          {/* FEZA — massive display */}
          <div className="overflow-hidden">
            <h1
              className="font-orbitron font-black text-white tracking-tight leading-none
                         animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]"
              style={{
                fontSize: "clamp(4rem, 13vw, 11rem)",
                letterSpacing: "-0.02em",
              }}
            >
              FEZA
            </h1>
          </div>

          {/* ── divider + CO ── */}
          <div className="flex items-center gap-4 md:gap-6 animate-fade-in-up opacity-0 [animation-delay:350ms] [animation-fill-mode:forwards]">
            <div
              className="flex-1 h-px max-w-xs"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,200,255,0.7), rgba(0,200,255,0.1))",
              }}
            />
            <span
              className="font-orbitron font-bold tracking-widest animate-glow-pulse"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                color: "#00c8ff",
                textShadow:
                  "0 0 20px rgba(0,200,255,0.5), 0 0 40px rgba(0,200,255,0.2)",
              }}
            >
              — CO
            </span>
          </div>
        </div>

        {/* ── Tagline ── */}
        <div className="mt-10 md:mt-12 max-w-2xl animate-fade-in-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
          <p
            className="font-rajdhani font-light leading-relaxed"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "rgba(218,228,240,0.75)",
              lineHeight: 1.65,
            }}
          >
            Teknolojinin sınırlarını birlikte zorluyoruz.
            <br />
            <span
              className="font-rajdhani font-medium"
              style={{ color: "var(--muted)" }}
            >
              Hiyerarşisiz bir yapıda, beş kurucu ortak — sınırsız vizyon.
            </span>
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0 [animation-delay:650ms] [animation-fill-mode:forwards]">
          <Link
            href="#founders"
            className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-sm
                       font-mono text-sm tracking-widest uppercase overflow-hidden
                       transition-all duration-300
                       bg-[rgba(0,200,255,0.08)] border border-[rgba(0,200,255,0.35)] text-[#00c8ff]
                       hover:bg-[rgba(0,200,255,0.15)] hover:shadow-[0_0_20px_rgba(0,200,255,0.2)]"
          >
            <span>Ekibi Keşfet</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" />
            </svg>
          </Link>

          <Link
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-sm
                       font-mono text-sm tracking-widest uppercase transition-all duration-300
                       text-feza-muted border border-feza-border
                       hover:text-feza-text hover:border-[rgba(0,200,255,0.25)]"
          >
            <span>Projeler</span>
          </Link>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-20 animate-fade-in opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">
          <div
            className="h-px mb-6"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,200,255,0.3), rgba(0,200,255,0.05) 60%, transparent)",
            }}
          />
          <div className="flex flex-wrap gap-10 md:gap-16">
            {[
              { value: "5", label: "Kurucu Ortak" },
              { value: "1", label: "Aktif Proje" },
              { value: "2024", label: "Kuruluş Yılı" },
              { value: "∞", label: "Vizyon" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p
                  className="font-orbitron font-bold text-2xl md:text-3xl text-white"
                  style={{
                    textShadow: "0 0 15px rgba(0,200,255,0.25)",
                  }}
                >
                  {value}
                </p>
                <p
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
        <span
          className="font-mono text-[9px] tracking-widest uppercase"
          style={{ color: "rgba(0,200,255,0.3)" }}
        >
          Keşfet
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(180deg, rgba(0,200,255,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16 space-y-4">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(0,200,255,0.5)" }}
        >
          {label}
        </span>
        <div
          className="flex-1 h-px max-w-[80px]"
          style={{ background: "rgba(0,200,255,0.25)" }}
        />
      </div>
      <h2
        className="font-orbitron font-bold text-white"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-rajdhani text-base max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)", lineHeight: 1.75 }}
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
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Founders Section ── */}
      <section
        id="founders"
        className="py-20 md:py-28 scroll-mt-16"
        aria-label="Kurucu Ortaklar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            label="// Ekip"
            title="The Founders"
            subtitle="Beş bağımsız zihin, tek bir kolektif çatı altında. Her ortak eşit düzeyde kurucu; hiyerarşi yok, sadece vizyon ve yetkinlik var."
          />

          {/* 5-card responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {members.map((member, i) => (
              <MemberCard key={member.slug} member={member} index={i} />
            ))}
          </div>

          {/* Collective manifesto callout */}
          <div
            className="mt-10 flex items-start gap-4 px-6 py-5 rounded-xl"
            style={{
              background: "rgba(0,200,255,0.03)",
              border: "1px solid rgba(0,200,255,0.08)",
            }}
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase shrink-0 mt-1"
              style={{ color: "rgba(0,200,255,0.4)" }}
            >
              Manifesto
            </span>
            <p
              className="font-mono text-xs leading-relaxed"
              style={{ color: "var(--muted-2)", lineHeight: 1.9 }}
            >
              {'// Bu kolektifte hiç kimse "Lead", "Senior" veya "Manager" değildir.'}
              {"  "}
              {"// Her üye eşit düzeyde Kurucu Ortak'tır."}
              {"  "}
              {"// Fikirler, unvandan değil — üretimden değer kazanır."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Thin separator ── */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-10"
        aria-hidden
      >
        <div className="divider-cyan" />
      </div>

      {/* ── Projects Section ── */}
      <section
        id="projects"
        className="py-20 md:py-28 scroll-mt-16"
        aria-label="Projeler"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            label="// Projeler"
            title="Ortak Çalışmalar"
            subtitle="Kolektif olarak geliştirdiğimiz ve geliştireceğimiz projeler. Her proje, farklı uzmanlıkların kesişim noktasında doğar."
          />

          <div className="space-y-6">
            {projects.map((project, i) => {
              const projectMembers = getMembersForProject(project.id).map(
                (m) => ({
                  name: m.name,
                  slug: m.slug,
                  initials: m.initials,
                })
              );
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  members={projectMembers}
                />
              );
            })}
          </div>

          {/* Coming soon placeholder */}
          <div
            className="mt-6 flex flex-col items-center justify-center py-12 rounded-xl"
            style={{
              border: "1px dashed rgba(0,200,255,0.12)",
              background: "rgba(0,200,255,0.01)",
            }}
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase mb-3"
              style={{ color: "rgba(0,200,255,0.25)" }}
            >
              Yakında
            </span>
            <p
              className="font-rajdhani text-sm text-center max-w-xs"
              style={{ color: "var(--muted-2)" }}
            >
              Yeni projeler hazırlanıyor. Kolektifin bir sonraki büyük adımı geliyor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA Section ── */}
      <section
        id="contact"
        className="py-20 md:py-28 scroll-mt-16"
        aria-label="İletişim"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className="relative rounded-2xl overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,200,255,0.06) 0%, rgba(8,15,30,0.8) 50%, rgba(0,100,160,0.08) 100%)",
              border: "1px solid rgba(0,200,255,0.14)",
            }}
          >
            {/* BG glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,200,255,0.07) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="flex justify-center mb-2">
                <span
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: "rgba(0,200,255,0.5)" }}
                >
                  {"// İletişim"}
                </span>
              </div>

              <h2
                className="font-orbitron font-bold text-white"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              >
                Birlikte bir şeyler üretelim
              </h2>

              <p
                className="font-rajdhani text-base leading-relaxed"
                style={{ color: "var(--muted)", lineHeight: 1.8 }}
              >
                Bir fikriniz, bir projeniz veya sadece selamlaşmak için bize ulaşın.
                Kolektifin kapıları her zaman açık.
              </p>

              <a
                href="mailto:info@feza-co.dev"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-sm
                           font-mono text-sm tracking-widest uppercase transition-all duration-300
                           bg-[rgba(0,200,255,0.1)] border border-[rgba(0,200,255,0.35)] text-[#00c8ff]
                           hover:bg-[rgba(0,200,255,0.18)] hover:shadow-[0_0_25px_rgba(0,200,255,0.2)]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 3.5h13M1 3.5l6.5 5L14 3.5M1 3.5V11.5h13V3.5" />
                </svg>
                <span>info@feza-co.dev</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

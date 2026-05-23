import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0, 200, 255, 0.08)",
        background:
          "linear-gradient(0deg, rgba(5,12,23,0.98) 0%, rgba(8,15,30,0.9) 100%)",
      }}
    >
      {/* ── Top glow line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,200,255,0.3) 30%, rgba(0,200,255,0.3) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* ── Brand Block ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(0,200,255,0.4)" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#00c8ff]"
                  style={{ boxShadow: "0 0 6px #00c8ff" }}
                />
              </div>
              <span className="font-orbitron font-bold text-sm tracking-widest text-feza-text">
                FEZA<span className="text-[#00c8ff]">—CO</span>
              </span>
            </div>
            <p
              className="font-rajdhani text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Beş kurucu ortak, sınırsız vizyon.
              <br />
              Teknolojinin sınırlarını birlikte zorluyoruz.
            </p>
          </div>

          {/* ── Navigation ── */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-widest text-[#00c8ff]/60 uppercase mb-4">
              Navigasyon
            </p>
            {[
              { href: "/#founders", label: "Ekip" },
              { href: "/#projects", label: "Projeler" },
              { href: "/#contact", label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block font-rajdhani text-sm hover:text-[#00c8ff] transition-colors duration-200"
                style={{ color: "var(--muted)" }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Collective Manifest ── */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-widest text-[#00c8ff]/60 uppercase mb-4">
              Kolektif İlkesi
            </p>
            <p
              className="font-mono text-xs leading-relaxed"
              style={{ color: "var(--muted-2)", lineHeight: 1.8 }}
            >
              {"// Hiyerarşisiz bir yapı."}
              <br />
              {"// Her ortak eşit düzeyde."}
              <br />
              {"// Fikirler statüden değil,"}
              <br />
              {"// değerden doğar."}
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(25,40,64,0.8)" }}
        >
          <p className="font-mono text-[11px]" style={{ color: "var(--muted-2)" }}>
            © {year} Feza-Co Kolektifi. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[11px]" style={{ color: "var(--muted-2)" }}>
            <span className="text-[#00c8ff]/50">5</span> ortak ·{" "}
            <span className="text-[#00c8ff]/50">1</span> aktif proje ·{" "}
            <span className="text-[#00c8ff]/50">∞</span> vizyon
          </p>
        </div>
      </div>
    </footer>
  );
}

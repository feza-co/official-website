import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/80">
      {/* ── Thin indigo shimmer line ── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.25) 30%, rgba(99,102,241,0.45) 50%, rgba(99,102,241,0.25) 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* ── Brand Block ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-indigo-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              </div>
              <span className="font-orbitron font-bold text-sm tracking-widest text-slate-900">
                FEZA<span className="text-cyan-600">—CO</span>
              </span>
            </div>
            <p className="font-outfit text-sm text-slate-500 leading-relaxed">
              Beş kurucu ortak, sınırsız vizyon.
              <br />
              Teknolojinin sınırlarını birlikte zorluyoruz.
            </p>
          </div>

          {/* ── Navigation ── */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-widest text-slate-400 uppercase mb-4">
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
                className="block cursor-pointer rounded-sm font-outfit text-sm text-slate-500
                           transition-colors duration-200 hover:text-blue-600
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Collective Manifesto ── */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-widest text-slate-400 uppercase mb-4">
              Kolektif İlkesi
            </p>
            <p className="font-mono text-xs text-slate-400 leading-[1.9]">
              {"// Hiyerarşisiz bir yapı."}<br />
              {"// Her ortak eşit düzeyde."}<br />
              {"// Fikirler statüden değil,"}<br />
              {"// değerden doğar."}
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-slate-400">
            © {year} Feza-Co Kolektifi. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            <span className="text-cyan-600">5</span> ortak ·{" "}
            <span className="text-emerald-600">1</span> aktif proje ·{" "}
            <span className="text-indigo-500">∞</span> vizyon
          </p>
        </div>
      </div>
    </footer>
  );
}

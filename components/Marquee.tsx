"use client";

interface MarqueeProps {
  items: string[];
  variant?: "default" | "muted";
  /** Erişilebilirlik etiketi — ekran okuyucular için bölümü tanımlar */
  label?: string;
}

export default function Marquee({ items, variant = "default", label }: MarqueeProps) {
  const duplicated = [...items, ...items];

  return (
    // H1a fix: hover + prefers-reduced-motion ile animasyonu duraklat
    <div
      className="marquee-mask overflow-hidden group/marquee"
      aria-label={label}
      role={label ? "region" : undefined}
    >
      <div
        className="flex w-max animate-marquee gap-3 will-change-transform
                   group-hover/marquee:[animation-play-state:paused]
                   motion-reduce:animate-none"
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            lang="en"
            className={`
              inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5
              font-mono text-[10px] tracking-widest uppercase
              ${
                variant === "muted"
                  ? "border border-feza-border bg-feza-card text-feza-muted-xs"
                  : "border border-indigo-200/60 bg-indigo-50/60 text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300"
              }
            `}
          >
            <span
              className="w-1 h-1 rounded-full bg-current opacity-50"
              aria-hidden
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type IconProps = {
  className?: string;
  size?: number;
};

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
        {label}
      </span>
      <div className="flex-1 h-px bg-feza-border" />
    </div>
  );
}

export function StatusDot({
  tone = "active",
  pulse = false,
  className = "",
}: {
  tone?: "active" | "planning" | "completed" | "cyan";
  pulse?: boolean;
  className?: string;
}) {
  const toneClass = {
    active: "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]",
    planning: "bg-amber-500",
    completed: "bg-indigo-500",
    cyan: "bg-cyan-500",
  }[tone];

  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${toneClass} ${className}`}
      style={{ animation: pulse ? "statusPulse 2.5s ease-in-out infinite" : "none" }}
      aria-hidden
    />
  );
}

export function ExternalLinkIcon({ className, size = 12 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M2 10L10 2M10 2H5M10 2V7" />
    </svg>
  );
}

export function GitHubIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function LinkedInIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

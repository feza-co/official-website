import Link from "next/link";
import type { Member } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/ui";

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <div className="group block">
      <article
        className="card-base relative flex cursor-pointer flex-col items-center gap-5 p-6
                   rounded-lg overflow-hidden select-none bg-feza-card"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <Link
          href={`/members/${member.slug}`}
          className="absolute inset-0 z-10 rounded-lg focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-cyan-500/60
                     focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg"
          aria-label={`${member.name} profiline git`}
        >
          <span className="sr-only">{member.name} profiline git</span>
        </Link>

        {/* ── Soft cyan radial on hover (top-right) ── */}
        <div
          className="absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100
                     transition-opacity duration-500 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at top right, rgba(6,182,212,0.08) 0%, transparent 70%)",
          }}
        />

        {/* ── Sequential number ── */}
        <span
          className="absolute top-3.5 left-4 font-mono text-[10px] tracking-widest text-feza-faint"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ── Avatar ── */}
        <div className="relative mt-3">
          {/* Glow halo on hover */}
          <div
            className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100
                       transition-all duration-300 blur-lg pointer-events-none"
            style={{ background: "rgba(6,182,212,0.12)" }}
            aria-hidden
          />

          {/* Avatar circle */}
          <div
            className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${member.avatarGradient}
                        flex items-center justify-center
                        shadow-md group-hover:shadow-lg transition-shadow duration-300`}
          >
            <span className="font-orbitron font-bold text-white text-base tracking-wide drop-shadow">
              {member.initials}
            </span>
          </div>

          {/* Indigo ring on hover */}
          <div
            className="absolute inset-0 rounded-full scale-110 pointer-events-none
                       border-2 border-cyan-400/0 group-hover:border-cyan-400/35
                       transition-all duration-300"
            aria-hidden
          />
        </div>

        {/* ── Name & Role ── */}
        <div className="text-center space-y-1.5">
          <h3
            className="font-outfit font-semibold text-lg text-feza-text leading-tight
                       group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors duration-300"
          >
            {member.name}
          </h3>
          <p className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
            {member.role}
          </p>
        </div>

        {/* ── Social links ── */}
        <div className="relative z-20 flex items-center gap-4 mt-1">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 rounded-md text-feza-muted transition-colors duration-200
                         hover:text-blue-600 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500/30"
              aria-label={`${member.name} - LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 rounded-md text-feza-muted transition-colors duration-200
                         hover:text-blue-600 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500/30"
              aria-label={`${member.name} - GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>

        {/* ── "Profili Gör" CTA — slides in on hover ── */}
        <div
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest
                    text-cyan-600 opacity-0 group-hover:opacity-100 -mt-1 mb-1
                     translate-y-1 group-hover:translate-y-0
                     transition-all duration-300"
        >
          <span>PROFİLİ GÖR</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 8L8 2M8 2H4M8 2V6" />
          </svg>
        </div>

        {/* ── Bottom accent bar ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0
                     group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, #06b6d4 40%, #2563eb 60%, transparent)",
          }}
          aria-hidden
        />
      </article>
    </div>
  );
}

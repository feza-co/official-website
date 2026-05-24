import Image from "next/image";
import Link from "next/link";
import type { Member } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/ui";

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <div className="group/card block">
      <article
        className="lift-on-hover relative flex h-full cursor-pointer flex-col items-center gap-5 p-6
                   rounded-xl overflow-hidden select-none bg-feza-card border border-feza-border
                   shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                   hover:border-indigo-200 dark:hover:border-indigo-800
                   hover:shadow-[0_18px_40px_rgba(99,102,241,0.10)]"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <Link
          href={`/members/${member.slug}`}
          className="absolute inset-0 z-10 rounded-xl focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-indigo-500/60
                     focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg"
          aria-label={`${member.name} profiline git`}
        >
          <span className="sr-only">{member.name} profiline git</span>
        </Link>

        {/* ── Subtle gradient backdrop on hover ── */}
        <div
          className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--indigo) 7%, transparent), transparent 70%)",
          }}
        />

        {/* ── Top accent bar (shows on hover) ── */}
        <div
          className="absolute top-0 left-0 right-0 h-px scale-x-0 origin-left
                     group-hover/card:scale-x-100 transition-transform duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6366f1 30%, #06b6d4 70%, transparent)",
          }}
          aria-hidden
        />

        {/* ── Sequence number ── */}
        <span
          className="absolute top-3.5 left-4 font-mono text-[10px] tracking-widest text-feza-faint
                     group-hover/card:text-indigo-400 transition-colors duration-300"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ── Avatar ── */}
        <div className="relative mt-3">
          {/* Outer glow halo */}
          <div
            className="absolute -inset-4 rounded-full opacity-0 group-hover/card:opacity-100
                       transition-all duration-500 blur-xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 65%)",
            }}
            aria-hidden
          />

          {/* Rotating ring on hover */}
          <div
            className="absolute -inset-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500
                       pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(99,102,241,0.4), transparent, rgba(6,182,212,0.4), transparent)",
            }}
            aria-hidden
          />

          {/* Avatar circle */}
          <div
            className={`relative w-20 h-20 rounded-full overflow-hidden
                        bg-gradient-to-br ${member.avatarGradient}
                        flex items-center justify-center
                        ring-2 ring-feza-card
                        shadow-md group-hover/card:shadow-lg transition-shadow duration-300`}
          >
            {member.avatar ? (
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <span className="font-orbitron font-bold text-white text-base tracking-wide drop-shadow">
                {member.initials}
              </span>
            )}
          </div>
        </div>

        {/* ── Name & Role ── */}
        <div className="text-center space-y-1.5 relative z-[1]">
          <h3
            className="font-orbitron font-semibold text-base sm:text-lg text-feza-text leading-tight break-words
                       group-hover/card:text-indigo-700 dark:group-hover/card:text-indigo-400 transition-colors duration-300"
          >
            {member.name}
          </h3>
          <p className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
            {member.role}
          </p>
        </div>

        {/* ── Social links ── */}
        <div className="relative z-20 flex items-center gap-3 mt-auto pt-1">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-feza-muted transition-colors duration-200
                         hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 focus:outline-none
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
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-feza-muted transition-colors duration-200
                         hover:text-feza-text hover:bg-feza-surface-2 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500/30"
              aria-label={`${member.name} - GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>

        {/* ── View profile CTA — slides in on hover ── */}
        <div
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest
                     text-indigo-600 dark:text-indigo-400 opacity-0 group-hover/card:opacity-100 -mt-1
                     translate-y-1 group-hover/card:translate-y-0
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
                     group-hover/card:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6366f1 40%, #06b6d4 60%, transparent)",
          }}
          aria-hidden
        />
      </article>
    </div>
  );
}

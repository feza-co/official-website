import Image from "next/image";
import Link from "next/link";
import { members } from "@/lib/data";

export default function FounderGrid() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {members.map((member) => (
        <li key={member.slug} className="contents">
          <Link
            href={`/members/${member.slug}`}
            className="panel panel-interactive group flex flex-col items-center gap-4 p-5 text-center sm:p-6"
          >
            <div
              className="relative h-24 w-24 overflow-hidden rounded-full border border-feza-border
                         bg-feza-surface-2 sm:h-28 sm:w-28"
            >
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover"
                />
              ) : (
                <span
                  className="display absolute inset-0 flex items-center justify-center text-xl text-feza-accent"
                  style={{ background: "var(--accent-soft)" }}
                  aria-hidden
                >
                  {member.initials}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h3 className="display text-base leading-snug text-feza-text transition-colors duration-300 group-hover:text-feza-accent sm:text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-feza-muted">{member.role}</p>
            </div>

            <p className="mt-auto text-[0.8125rem] leading-snug text-feza-muted" lang="en">
              {member.skills[0]}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

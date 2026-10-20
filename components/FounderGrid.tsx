import Image from "next/image";
import Link from "next/link";
import { members } from "@/lib/data";

// No cards: the portrait is the object, the rule under each name is the only
// structure. A box around a face adds nothing.
export default function FounderGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
      {members.map((member) => (
        <li key={member.slug}>
          <Link href={`/members/${member.slug}`} className="group block">
            <div className="relative aspect-square w-full overflow-hidden rounded-full bg-feza-surface-2">
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 180px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <span
                  className="display absolute inset-0 flex items-center justify-center text-2xl text-feza-accent"
                  style={{ background: "var(--accent-soft)" }}
                  aria-hidden
                >
                  {member.initials}
                </span>
              )}
            </div>

            <div className="mt-4 border-t border-feza-border pt-3">
              <h3 className="display text-[1.0625rem] leading-snug text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-feza-muted" lang="en">
                {member.skills[0]}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

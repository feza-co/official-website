'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Member } from '@/lib/data';

interface TeamPopoverProps {
  members: Member[];
  label: string;
  value: string;
}

export default function TeamPopover({ members, label, value }: TeamPopoverProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative bg-feza-surface-2 px-4 py-3 cursor-pointer select-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      aria-label={`${label}: ${value} — ortakları görmek için üzerine gelin`}
    >
      <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
        {label}
      </p>
      <p className={`mt-1 truncate font-outfit text-sm font-semibold underline decoration-feza-border underline-offset-2 transition-colors duration-200 ${open ? 'text-cyan-600' : 'text-feza-secondary'}`}>
        {value}
      </p>

      {/* Popup */}
      <div
        role="tooltip"
        className={`
          absolute bottom-full left-0 mb-2 z-30
          w-52 rounded-lg border border-feza-border bg-feza-card shadow-lg
          transition-all duration-200
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'}
        `}
      >
        <div className="px-3 py-2 border-b border-feza-border">
          <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
            Ekip üyeleri
          </p>
        </div>
        <ul className="py-1">
          {members.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/members/${m.slug}`}
                className="flex items-center gap-2.5 px-3 py-2 hover:bg-feza-surface-2 transition-colors duration-150 cursor-pointer"
                tabIndex={open ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${m.avatarGradient} flex items-center justify-center shrink-0`}
                >
                  <span className="font-orbitron font-bold text-white text-[7px] leading-none">
                    {m.initials}
                  </span>
                </div>
                <span className="font-outfit text-sm text-feza-secondary truncate">
                  {m.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
  const triggerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Dışarı tıklanınca kapat
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

  // F03: popup açılınca ilk link'e focus yönlendir
  useEffect(() => {
    if (open) {
      // Transition bitmesini bekle
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Escape ile kapat ve tetikleyiciye geri dön
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-feza-surface-2 px-4 py-3 select-none"
      onKeyDown={handleKeyDown}
    >
      {/* Tetikleyici buton */}
      <div
        ref={triggerRef}
        className="cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          // F01/H3b: odak dialog içinde kalıyorsa kapatma
          if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`${label}: ${value} — ekip üyelerini görmek için tıklayın`}
      >
        <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
          {label}
        </p>
        <p className={`mt-1 truncate font-outfit text-sm font-semibold underline decoration-feza-border underline-offset-2 transition-colors duration-200 ${open ? 'text-cyan-700 dark:text-cyan-400' : 'text-feza-secondary'}`}>
          {value}
        </p>
      </div>

      {/* F01: role="dialog" — içinde tıklanabilir linkler var, tooltip değil */}
      <div
        role="dialog"
        aria-label="Ekip üyeleri"
        aria-modal="false"
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
        <ul className="py-1" role="list">
          {members.map((m, i) => (
            <li key={m.slug}>
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={`/members/${m.slug}`}
                className="flex items-center gap-2.5 px-3 py-2 hover:bg-feza-surface-2 transition-colors duration-150 cursor-pointer
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-inset rounded-sm"
                tabIndex={open ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${m.avatarGradient} flex items-center justify-center shrink-0`}
                  aria-hidden
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

"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const parent = node.parentElement;
    if (!parent) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    let raf = 0;
    const handle = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        node.style.setProperty("--mx", `${x}px`);
        node.style.setProperty("--my", `${y}px`);
        node.style.opacity = "1";
      });
    };

    const leave = () => {
      node.style.opacity = "0";
    };

    parent.addEventListener("mousemove", handle);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mousemove", handle);
      parent.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.10), rgba(6,182,212,0.06) 30%, transparent 60%)",
      }}
    />
  );
}

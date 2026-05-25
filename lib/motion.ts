// lib/motion.ts
"use client";

import { useReducedMotion, type Variants } from "framer-motion";

// ─── Shared Variants ─────────────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0.96 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const dividerReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function staggerContainer(stagger = 0.1): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
}

// ─── Reduced Motion Hook ──────────────────────────────────────────────────────
// Usage: const variants = useMotionSafe(fadeInUp)
// Returns empty object if prefers-reduced-motion is active → no animation

export function useMotionSafe<T extends Variants>(variants: T): T | Record<string, never> {
  const reduce = useReducedMotion();
  return reduce ? {} : variants;
}

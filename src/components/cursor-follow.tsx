"use client";

import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Site-wide custom cursor. `rounded-full` here is a deliberate, documented
 * exception to the sharp `--radius: 0` system — the same exception already
 * used by `avatar.tsx` and the icon `button` variant for circular/indicator
 * elements. Structural UI (cards, sections, list items) stays sharp.
 *
 * Mounted once in `layout.tsx` alongside `<HighlighterCanvas />`; this is
 * the only other fixed, full-viewport overlay in the app (z-index 10000,
 * one above the highlighter's 9999).
 */
export default function CursorFollow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-none-active");

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e: Event) => {
      const el = (e.target as HTMLElement).closest("[data-cursor]");
      if (el) setLabel(el.getAttribute("data-cursor"));
    };
    const handleOut = (e: Event) => {
      const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
      if (!related?.closest("[data-cursor]")) setLabel(null);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.documentElement.classList.remove("cursor-none-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div className="cursor-root" style={{ x, y }}>
      <div
        className={label ? "cursor-pill" : "cursor-dot"}
        style={reduceMotion ? { transition: "none" } : undefined}
      >
        {label}
      </div>
    </motion.div>
  );
}

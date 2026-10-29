"use client";

import { useEffect, useRef, type ReactNode } from "react";

// parallax do hero: o mouse e a rolagem movem as camadas em velocidades diferentes
export function HeroStage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0, s: 0 };
    const current = { x: 0, y: 0, s: 0 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      current.s += (target.s - current.s) * 0.12;

      node.style.setProperty("--mx", current.x.toFixed(4));
      node.style.setProperty("--my", current.y.toFixed(4));
      node.style.setProperty("--sy", current.s.toFixed(4));

      const settled =
        Math.abs(target.x - current.x) < 0.001 &&
        Math.abs(target.y - current.y) < 0.001 &&
        Math.abs(target.s - current.s) < 0.001;

      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      start();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      start();
    };

    const onScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / node.offsetHeight, 0), 1);
      target.s = progress;
      start();
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="hero">
      {children}
    </section>
  );
}

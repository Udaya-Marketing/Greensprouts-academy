"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initRevealSystem, cleanupRevealSystem } from "@/lib/revealEngine";

export default function MotionRevealProvider() {
  const pathname = usePathname();
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstMountRef = useRef<boolean>(true);
  const rafRef1 = useRef<number>(0);
  const rafRef2 = useRef<number>(0);

  useEffect(() => {
    const isFirst = isFirstMountRef.current;
    isFirstMountRef.current = false;

    if (isFirst) {
      // First mount: use double requestAnimationFrame to guarantee GSAP runs
      // AFTER React's full hydration commit — prevents SSR/client style mismatch.
      // rAF 1: browser has painted the first frame after hydration
      // rAF 2: all layout calculations from that paint are settled
      rafRef1.current = requestAnimationFrame(() => {
        rafRef2.current = requestAnimationFrame(() => {
          initRevealSystem();
        });
      });
    } else {
      // New routes are server-rendered; leave their markup untouched so GSAP
      // cannot add inline styles before React hydrates it.
      cleanupRevealSystem();
    }

    // Debounced resize handler to recalculate triggers and offsets
    const onResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        initRevealSystem();
      }, 200);
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef1.current);
      cancelAnimationFrame(rafRef2.current);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      cleanupRevealSystem();
    };
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll("[class*='anim-']");
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

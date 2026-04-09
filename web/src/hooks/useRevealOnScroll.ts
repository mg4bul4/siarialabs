import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  /** Above-the-fold blocks: start as `.reveal.active` and skip the observer */
  initiallyRevealed?: boolean;
};

/**
 * Adds `active` to match Stitch “Landing Page V.2” `.reveal` / `.reveal.active` scroll behavior.
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(options?: RevealOptions) {
  const initiallyRevealed = options?.initiallyRevealed ?? false;
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(initiallyRevealed);

  useEffect(() => {
    if (initiallyRevealed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsRevealed(true);
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [initiallyRevealed]);

  const revealClass = isRevealed ? "reveal active" : "reveal";

  return { ref, isRevealed, revealClass };
}

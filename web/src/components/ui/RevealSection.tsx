import type { ReactNode } from "react";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  /** First-screen hero: skip observer, stay visible */
  alwaysActive?: boolean;
};

export function RevealSection({ children, className = "", alwaysActive = false }: RevealSectionProps) {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>({ initiallyRevealed: alwaysActive });

  return (
    <section ref={ref} className={`${revealClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

type RevealDivProps = {
  children: ReactNode;
  className?: string;
};

export function RevealDiv({ children, className = "" }: RevealDivProps) {
  const { ref, revealClass } = useRevealOnScroll<HTMLDivElement>({});

  return (
    <div ref={ref} className={`${revealClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

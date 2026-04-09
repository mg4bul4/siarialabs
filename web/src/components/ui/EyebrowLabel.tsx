import type { ReactNode } from "react";

type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
};

export function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <span
      className={`font-headline text-xs font-black uppercase tracking-[0.25em] text-brand-highlight ${className}`.trim()}
    >
      {children}
    </span>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

type NeonPulseButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/** Primary CTA from Stitch “Landing Page V.2” — bordered neon with pulse animation */
export function NeonPulseButton({ children, className = "", ...rest }: NeonPulseButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-none border border-[#72FF70]/50 bg-[#0e0e0e] font-headline font-bold uppercase tracking-widest text-white transition-all duration-300 pulse-animation hover:bg-[#72FF70]/10 ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type NeonPulseButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BASE_CLASS =
  "rounded-none border border-[#72FF70]/50 bg-[#0e0e0e] font-headline font-bold uppercase tracking-widest text-white transition-all duration-300 pulse-animation hover:bg-[#72FF70]/10 inline-flex items-center justify-center";

/** Primary CTA — renders as <Link> when href is provided, otherwise <button> */
export function NeonPulseButton({ children, className = "", href, ...rest }: NeonPulseButtonProps) {
  const combined = `${BASE_CLASS} ${className}`.trim();

  if (href) {
    return (
      <Link to={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combined} {...rest}>
      {children}
    </button>
  );
}

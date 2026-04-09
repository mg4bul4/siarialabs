import { Link } from "react-router-dom";

import { IMG_MANIFESTO_HANDS } from "@/constants/assets";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function ManifestoSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${revealClass} flex h-screen flex-col overflow-hidden bg-[#000000] lg:flex-row`}
    >
      {/* Image — fills exactly half the screen width, full section height */}
      <div className="relative h-1/2 w-full flex-shrink-0 overflow-hidden lg:h-full lg:w-1/2">
        <div className="absolute left-0 top-0 z-20 h-full w-px bg-brand-highlight" />
        <img
          src={IMG_MANIFESTO_HANDS}
          alt="Hands-on design work"
          className="h-full w-full object-cover brightness-50 contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content — fills the other half, vertically centered */}
      <div className="flex flex-1 flex-col justify-center bg-[#0e0e0e] px-12 md:px-16 lg:px-20">
        <EyebrowLabel className="mb-8 block">The Siaria Standard</EyebrowLabel>
        <h2 className="font-headline mb-8 text-4xl font-extrabold leading-[1.05] tracking-tighter text-tertiary md:text-5xl">
          Ambitious visions require meticulous execution.
        </h2>
        <p className="font-body mb-10 max-w-md text-base leading-relaxed text-on-surface-variant">
          Most companies have ambition. Few have structure. We break down how your business is perceived,
          where it fails, and what it takes to win in your space.
        </p>
        <div className="group flex items-center gap-4">
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden border border-brand-highlight/30 transition-all group-hover:bg-brand-highlight/10">
            <div className="absolute inset-0 rotate-45 scale-75 border-[0.5px] border-on-surface/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-highlight" />
          </div>
          <div className="h-px w-12 bg-outline-variant/30" />
          <Link
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/60 transition-colors hover:text-brand-highlight"
            to="/solutions"
          >
            See how we can help
          </Link>
        </div>
      </div>
    </section>
  );
}

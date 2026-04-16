import { Link } from "react-router-dom";

import { IMG_MANIFESTO_HANDS } from "@/constants/assets";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function ManifestoSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${revealClass} flex min-h-screen flex-col overflow-hidden bg-[#000000] lg:h-screen lg:flex-row`}
    >
      {/* Image — 45vh on mobile, half width on desktop */}
      <div className="relative h-[45vw] min-h-[220px] w-full flex-shrink-0 overflow-hidden sm:h-[50vw] lg:h-full lg:w-1/2">
        <div className="absolute left-0 top-0 z-20 h-full w-px bg-brand-highlight" />
        <img
          src={IMG_MANIFESTO_HANDS}
          alt="Hands-on design work"
          className="h-full w-full object-cover brightness-50 contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center bg-[#0e0e0e] px-5 py-12 sm:px-8 sm:py-14 md:px-16 lg:px-20 lg:py-0">
        <EyebrowLabel className="mb-6 block md:mb-8">The Siaria Standard</EyebrowLabel>
        <h2 className="font-headline mb-6 text-3xl font-extrabold leading-[1.05] tracking-tighter text-tertiary sm:text-4xl md:mb-8 md:text-5xl">
          Ambitious visions require meticulous execution.
        </h2>
        <p className="font-body mb-8 max-w-md text-base leading-relaxed text-on-surface-variant md:mb-10">
          Most companies have ambition. Few have structure. We break down how your business is perceived,
          where it fails, and what it takes to win in your space.
        </p>
        <div className="group flex items-center gap-4">
          <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden border border-brand-highlight/30 transition-all group-hover:bg-brand-highlight/10 sm:h-12 sm:w-12">
            <div className="absolute inset-0 rotate-45 scale-75 border-[0.5px] border-on-surface/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-highlight" />
          </div>
          <div className="h-px w-12 bg-outline-variant/30" />
          <Link
            className="min-h-[44px] py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/60 transition-colors hover:text-brand-highlight"
            to="/contact"
          >
            See how we can help
          </Link>
        </div>
      </div>
    </section>
  );
}

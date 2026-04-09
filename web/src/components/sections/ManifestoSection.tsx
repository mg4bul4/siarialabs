import { Link } from "react-router-dom";

import { IMG_MANIFESTO_HANDS } from "@/constants/assets";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function ManifestoSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${revealClass} flex min-h-screen flex-col items-stretch overflow-hidden bg-[#000000] lg:flex-row`}
    >
      <div className="relative h-[50vh] w-full overflow-hidden lg:h-auto lg:w-[60%]">
        <div className="absolute left-0 top-0 z-20 h-full w-px bg-brand-highlight" />
        <img
          src={IMG_MANIFESTO_HANDS}
          alt="Hands-on design work"
          className="h-full w-full object-cover brightness-50 contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="flex w-full flex-col justify-center bg-[#0e0e0e] px-12 md:px-20 lg:w-[40%] lg:px-24" style={{ paddingBlock: "var(--spacing-section-lg)" }}>
        <div className="max-w-2xl">
          <EyebrowLabel className="mb-10 block">The Siaria Standard</EyebrowLabel>
          <h2 className="font-headline mb-12 text-5xl font-extrabold leading-[1.05] tracking-tighter text-tertiary md:text-6xl">
            Ambitious visions require meticulous execution.
          </h2>
          <p className="font-body mb-16 max-w-md text-base leading-relaxed text-on-surface-variant">
            Most companies have the ambition. Few have the structure. What looks like a visibility problem is
            usually a clarity problem. What looks like a traffic problem is usually a positioning problem. We fix
            both. We break down how your business is perceived, where it fails, and what&apos;s holding it back. Then
            we rebuild it to perform under real conditions.
          </p>
          <div className="group flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden border border-brand-highlight/30 transition-all group-hover:bg-brand-highlight/10">
                <div className="absolute inset-0 rotate-45 scale-75 border-[0.5px] border-on-surface/10" />
                <div className="h-1.5 w-1.5 rounded-full bg-brand-highlight" />
              </div>
              <div className="h-px w-12 bg-outline-variant/30" />
              <Link
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/60 transition-colors hover:text-brand-highlight"
                to="/solutions"
              >
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

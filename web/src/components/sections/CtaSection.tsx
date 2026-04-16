import { NeonPulseButton } from "@/components/ui/NeonPulseButton";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function CtaSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className={`${revealClass} mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12`} style={{ paddingBlock: "var(--spacing-section-md)" }}>
      <div className="relative overflow-hidden rounded-none border border-outline-variant/10 bg-surface-container-high p-8 text-center sm:p-12 md:p-16 lg:p-20">
        <div className="relative z-10">
          <h2 className="mb-5 text-4xl font-extrabold tracking-tighter text-tertiary sm:text-5xl md:mb-8 md:text-6xl">
            Ready for impact?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-on-surface-variant sm:text-lg md:mb-12 md:text-xl">
            If your digital presence isn&apos;t built for how the internet works now, it won&apos;t hold up.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
            <NeonPulseButton href="/contact" className="min-h-[52px] w-full px-10 py-4 text-base sm:text-lg md:w-auto md:text-xl">
              Let's Go
            </NeonPulseButton>
            <NeonPulseButton
              href="/solutions"
              className="min-h-[52px] w-full border-outline-variant/30 px-10 py-4 text-base hover:bg-surface-bright sm:text-lg md:w-auto md:text-xl"
            >
              See Our Solutions
            </NeonPulseButton>
          </div>
        </div>
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand-highlight/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}

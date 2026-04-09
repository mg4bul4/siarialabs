import { NeonPulseButton } from "@/components/ui/NeonPulseButton";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function CtaSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className={`${revealClass} mx-auto max-w-[1440px] px-12 py-32`}>
      <div className="relative overflow-hidden rounded-none border border-outline-variant/10 bg-surface-container-high p-20 text-center">
        <div className="relative z-10">
          <h2 className="mb-8 text-5xl font-extrabold tracking-tighter text-tertiary md:text-6xl">
            Ready for impact?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-on-surface-variant">
            If your digital presence isn&apos;t built for how the internet works now, it won&apos;t hold up.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <NeonPulseButton className="w-full px-10 py-5 text-xl md:w-auto">Get Started Now</NeonPulseButton>
            <button
              type="button"
              className="w-full rounded-none border border-outline-variant/30 px-10 py-5 text-xl font-bold text-on-surface transition-colors hover:bg-surface-bright md:w-auto"
            >
              Start a Conversation
            </button>
          </div>
        </div>
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand-highlight/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}

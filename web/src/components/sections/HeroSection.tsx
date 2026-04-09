import { IMG_HERO_DASHBOARD } from "@/constants/assets";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { NeonPulseButton } from "@/components/ui/NeonPulseButton";

export function HeroSection() {
  return (
    <section className="reveal active relative mx-auto flex min-h-screen max-w-[1440px] items-center overflow-hidden px-12">
      <div className="z-10 w-full md:w-1/2">
        <div className="mb-8 inline-flex items-center gap-2 rounded-none border border-outline-variant/20 bg-surface-container-high px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-brand-highlight" />
          <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            START NOW FOR FREE
          </span>
        </div>
        <h1 className="mb-6 text-7xl font-extrabold leading-[0.9] tracking-tighter text-tertiary md:text-8xl">
          Radical <span className="text-primary-dim">Clarity.</span>
          <br />
          Measured Impact.
        </h1>
        <p className="mb-10 max-w-lg text-xl leading-relaxed text-on-surface-variant">
          Your digital presence is being evaluated by machines before people ever see you. If it&apos;s not built
          for that, you&apos;re already behind.
        </p>
        <div className="flex items-center gap-4">
          <NeonPulseButton href="/solutions" className="flex items-center gap-2 px-8 py-4 text-lg">
            Fix Your Presence
            <MaterialIcon name="arrow_forward" />
          </NeonPulseButton>
          <NeonPulseButton
            href="/solutions"
            className="border-outline-variant/60 px-8 py-4 text-lg hover:border-white/40 hover:bg-surface-bright"
          >
            View Solutions
          </NeonPulseButton>
        </div>
        <div className="mt-10 text-sm font-light uppercase tracking-[0.3em] text-on-surface/80">
          Built for how modern discovery works. Not how it used to.
        </div>
      </div>
      <div className="absolute -right-24 top-1/2 hidden w-[60%] -translate-y-1/2 md:block">
        <div className="relative rotate-[-2deg] skew-x-1 transform border border-outline-variant/10 bg-surface-container-highest p-4 shadow-2xl shadow-black/80 transition-transform duration-700 hover:rotate-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-none bg-surface-container-lowest">
            <img
              src={IMG_HERO_DASHBOARD}
              alt="Product dashboard preview"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

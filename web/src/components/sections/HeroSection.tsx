import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { NeonPulseButton } from "@/components/ui/NeonPulseButton";

export function HeroSection() {
  return (
    <section className="reveal active relative flex w-full items-center justify-center overflow-hidden" style={{ height: "100dvh" }}>
      {/* ── Video background ─────────────────────────────────────────── */}
      {/* fixed + inset-0 fills the true viewport including behind the nav */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ willChange: "transform" }}
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* ── Overlay stack ────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(114,255,112,0.04)_0%,_transparent_65%)]" />

      {/* ── Content — top padding clears the fixed nav ───────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start px-12 pb-32 pt-40">
        {/* Eyebrow badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-outline-variant/30 bg-black/40 px-3 py-1 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-brand-highlight" />
          <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            Start Now For Free
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-7xl font-extrabold leading-[0.9] tracking-tighter text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] md:text-8xl">
          Radical <span className="text-brand-highlight">Clarity.</span>
          <br />
          Measured Impact.
        </h1>

        {/* Subhead */}
        <p className="mb-10 max-w-xl text-xl leading-relaxed text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          In the new world of AI, most businesses are already falling behind.
          We help you stay ahead.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <NeonPulseButton href="/solutions" className="flex items-center gap-2 px-8 py-4 text-lg">
            Let's Go
            <MaterialIcon name="arrow_forward" />
          </NeonPulseButton>
          <NeonPulseButton
            href="/solutions"
            className="border-white/20 bg-black/30 px-8 py-4 text-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/10"
          >
            View Solutions
          </NeonPulseButton>
        </div>

        {/* Tagline */}
        <p className="mt-10 text-sm font-light uppercase tracking-[0.3em] text-white/50">
          Built for how modern discovery works. Not how it used to.
        </p>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/30">
        <MaterialIcon name="keyboard_arrow_down" className="text-3xl" />
      </div>
    </section>
  );
}

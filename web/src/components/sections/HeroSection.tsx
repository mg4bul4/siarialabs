import { useEffect, useRef, useState } from "react";

import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { NeonPulseButton } from "@/components/ui/NeonPulseButton";

const VIDEO_SRC = "/hero-bg.mp4";
/** Seconds before the end to begin the crossfade */
const CROSSFADE_BEFORE_END = 0.8;
const CROSSFADE_DURATION_MS = 600;

/**
 * Seamless looping video background.
 * Two <video> elements alternate: while one plays, the other is loaded and
 * cued at 0. When the active video is ~0.8s from its end, the standby fades
 * in and the active fades out — hiding the native loop gap entirely.
 */
function SeamlessVideo() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [activeIsA, setActiveIsA] = useState(true);
  const swapping = useRef(false);

  useEffect(() => {
    const active = activeIsA ? videoA.current : videoB.current;
    const standby = activeIsA ? videoB.current : videoA.current;
    if (!active || !standby) return;

    // Ensure standby is ready at the start
    standby.currentTime = 0;
    standby.load();

    const handleTimeUpdate = () => {
      if (swapping.current) return;
      const remaining = active.duration - active.currentTime;
      if (!isNaN(remaining) && remaining <= CROSSFADE_BEFORE_END) {
        swapping.current = true;

        // Start standby playback
        standby.currentTime = 0;
        standby.play().catch(() => {});

        // Crossfade: standby fades in, active fades out
        standby.style.transition = `opacity ${CROSSFADE_DURATION_MS}ms ease`;
        active.style.transition = `opacity ${CROSSFADE_DURATION_MS}ms ease`;
        standby.style.opacity = "1";
        active.style.opacity = "0";

        // After fade completes, flip the active flag and reset
        setTimeout(() => {
          active.pause();
          active.currentTime = 0;
          active.style.transition = "none";
          active.style.opacity = "0";
          swapping.current = false;
          setActiveIsA((prev) => !prev);
        }, CROSSFADE_DURATION_MS + 50);
      }
    };

    active.addEventListener("timeupdate", handleTimeUpdate);
    return () => active.removeEventListener("timeupdate", handleTimeUpdate);
  }, [activeIsA]);

  // On mount: start video A, preload video B silently
  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;
    a.style.opacity = "1";
    b.style.opacity = "0";
    a.play().catch(() => {});
    b.load();
  }, []);

  const sharedClass = "absolute inset-0 h-full w-full object-cover";
  const sharedStyle: React.CSSProperties = { willChange: "transform", opacity: 0 };

  return (
    <>
      <video
        ref={videoA}
        className={sharedClass}
        style={sharedStyle}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <video
        ref={videoB}
        className={sharedClass}
        style={sharedStyle}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </>
  );
}

export function HeroSection() {
  return (
    <section
      className="reveal active relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* ── Seamless looping video ───────────────────────────────────── */}
      <SeamlessVideo />

      {/* ── Overlay stack ────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(114,255,112,0.04)_0%,_transparent_65%)]" />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start px-12 pb-32 pt-40">
        <div className="mb-8 inline-flex items-center gap-2 border border-outline-variant/30 bg-black/40 px-3 py-1 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-brand-highlight" />
          <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            Start Now For Free
          </span>
        </div>

        <h1 className="mb-6 max-w-3xl text-7xl font-extrabold leading-[0.9] tracking-tighter text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] md:text-8xl">
          Radical <span className="text-brand-highlight">Clarity.</span>
          <br />
          Measured Impact.
        </h1>

        <p className="mb-10 max-w-xl text-xl leading-relaxed text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          In the new world of AI, most businesses are already falling behind.
          We help you stay ahead.
        </p>

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

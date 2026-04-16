import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  SOL_IMG_DISCOVERY,
  SOL_IMG_HERO_NEURAL,
  SOL_IMG_INFRASTRUCTURE,
  SOL_IMG_INTRO_PARTICLE,
  SOL_IMG_PRESENCE,
  SOL_IMG_TRANSFORMATION,
} from "@/constants/solutionsAssets";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Link } from "react-router-dom";

const EASE = "easeOut" as const;

/* ─────────────────────────────────────────────────────────────────────────────
   FadeUp — viewport-triggered fade for non-card sections
───────────────────────────────────────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   useStickyScrollProgress
   
   Tracks how far the user has scrolled *while* a sticky card is pinned.
   Returns a value from 0 (card just pinned) to 1 (card about to unpin).
   
   How it works:
   - The wrapper is (1 + SCROLL_MULTIPLIER) * 100vh tall.
   - The card is sticky top-0 h-screen inside it.
   - The card pins when the wrapper top hits the viewport top.
   - The card unpins when the wrapper bottom leaves the viewport top.
   - The "pinned travel" = SCROLL_MULTIPLIER * 100vh of scrolling.
   - We read wrapper.getBoundingClientRect().top to get exact position.
───────────────────────────────────────────────────────────────────────────── */
const SCROLL_MULTIPLIER = 2; // extra viewports of scroll travel while pinned

function useStickyScrollProgress(wrapperRef: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const pinnedTravel = el.offsetHeight - window.innerHeight;

      // How far the wrapper top has scrolled past the viewport top (negative = above)
      const scrolled = -rect.top;

      if (scrolled <= 0) {
        setProgress(0);
      } else if (scrolled >= pinnedTravel) {
        setProgress(1);
      } else {
        setProgress(scrolled / pinnedTravel);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // seed on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [wrapperRef]);

  return progress;
}

/* ─────────────────────────────────────────────────────────────────────────────
   BulletItem — hidden until its scroll threshold, then slides in from right
───────────────────────────────────────────────────────────────────────────── */
function BulletItem({
  text,
  progress,
  threshold,
}: {
  text: string;
  progress: number;
  threshold: number; // 0–1: progress value at which this item fully reveals
}) {
  // Item is invisible below threshold, animates in over a 0.12 window
  const WINDOW = 0.12;
  const local = Math.max(0, Math.min(1, (progress - (threshold - WINDOW)) / WINDOW));

  return (
    <li
      className="flex items-center gap-3"
      style={{
        opacity: local,
        transform: `translateX(${(1 - local) * 40}px)`,
        transition: "none", // scroll drives it, no CSS transition
      }}
    >
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#72FF70]" />
      {text}
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SolutionCard
───────────────────────────────────────────────────────────────────────────── */
type SolutionCardProps = {
  eyebrow: string;
  heading: string;
  quote: string;
  items: string[];
  image: string;
  imageLeft: boolean;
  index: number;
  total: number;
};

function SolutionCard({
  eyebrow,
  heading,
  quote,
  items,
  image,
  imageLeft,
  index,
  total,
}: SolutionCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progress = useStickyScrollProgress(wrapperRef);

  // Items reveal at evenly spaced thresholds across 0.3–0.9 of the pinned travel
  // threshold is the progress value at which the item finishes revealing
  const thresholds = items.map((_, i) => 0.35 + i * 0.18);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{
        height: `${(1 + SCROLL_MULTIPLIER) * 100}vh`,
        zIndex: index + 1,
      }}
    >
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0 bg-[#0e0e0e]" />

        <div className="relative flex h-full w-full items-center overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-px bg-white/5" />

          <div className="absolute right-12 top-8 font-headline text-xs font-bold uppercase tracking-widest text-white/20">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:gap-12 sm:px-8 md:flex-row md:gap-16 md:px-12">

            {/* Image — always visible */}
            <div className={`w-full md:w-1/2 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
              <div className="group relative aspect-video overflow-hidden border border-white/5 bg-surface-container-high">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#72FF70]/10 to-transparent" />
              </div>
            </div>

            {/* Text */}
            <div className={`w-full space-y-6 md:w-1/2 md:space-y-8 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
              <div className="space-y-3 md:space-y-4">
                <EyebrowLabel>{eyebrow}</EyebrowLabel>
                <h3 className="font-headline text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {heading}
                </h3>
                <p className="text-on-surface text-base italic opacity-80 sm:text-lg md:text-xl">
                  &quot;{quote}&quot;
                </p>
              </div>

              {/* Bullets — scroll-driven on desktop; always visible on mobile */}
              <ul className="space-y-3 text-base font-medium text-on-surface-variant md:space-y-4 md:text-lg">
                {items.map((item, i) => (
                  <BulletItem
                    key={item}
                    text={item}
                    progress={progress}
                    threshold={thresholds[i]}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Solution data
───────────────────────────────────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    eyebrow: "Infrastructure",
    heading: "Presence Foundation",
    quote: "Where perception is set.",
    items: [
      "Website design/development",
      "UI/UX systems",
      "Messaging/positioning",
      "Conversion-focused structure",
    ],
    image: SOL_IMG_PRESENCE,
    imageLeft: true,
  },
  {
    eyebrow: "Visibility",
    heading: "Discovery and Growth",
    quote: "If you're not surfaced, you don't exist.",
    items: [
      "SEO / Search Optimization",
      "AEO / Answer Engine Optimization",
      "Content systems",
      "Entity/topic structuring",
    ],
    image: SOL_IMG_DISCOVERY,
    imageLeft: false,
  },
  {
    eyebrow: "Performance",
    heading: "Digital Infrastructure",
    quote: "Performance is the baseline.",
    items: [
      "Performance optimization",
      "Scalable architecture",
      "Automation",
      "Clean backend systems",
    ],
    image: SOL_IMG_INFRASTRUCTURE,
    imageLeft: true,
  },
  {
    eyebrow: "Evolution",
    heading: "Transformation",
    quote: "When incremental fixes aren't enough.",
    items: [
      "Full repositioning",
      "Rebuilds from scratch",
      "Messaging overhaul",
      "Strategic realignment",
    ],
    image: SOL_IMG_TRANSFORMATION,
    imageLeft: false,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */
export default function SolutionsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const heroContentOpacity = useTransform(heroScroll, [0, 0.55], [1, 0]);
  const heroContentY = useTransform(heroScroll, [0, 1], ["0%", "6%"]);

  return (
    <>
      <main className="font-body text-on-surface selection:bg-[#72FF70]/30">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
        >
          <motion.div className="absolute inset-0 z-0" style={{ scale: heroBgScale }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.05)_0%,_transparent_70%)]" />
            <div
              className="h-full w-full bg-cover bg-center opacity-40 mix-blend-screen"
              style={{ backgroundImage: `url('${SOL_IMG_HERO_NEURAL}')` }}
            />
          </motion.div>

          <motion.div
            className="relative z-10 max-w-5xl space-y-10 text-center"
            style={{ opacity: heroContentOpacity, y: heroContentY }}
          >
            <motion.h1
              className="font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-white md:text-8xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Built for the <br />
              <span className="text-[#72FF70]">new digital world.</span>
            </motion.h1>

            <motion.p
              className="font-body mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            >
              Most digital strategies are built on outdated assumptions. We design systems that perform in an
              AI-driven, search-compressed world.
            </motion.p>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="font-headline inline-flex min-h-[56px] items-center rounded-lg bg-[#72FF70] px-10 py-4 text-lg font-bold uppercase tracking-tighter text-surface-container-lowest neon-glow transition-all hover:brightness-110"
              >
                Let's Go
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="overflow-hidden bg-surface-container-low px-5 py-16 sm:px-8 sm:py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
            <div className="space-y-8">
              <FadeUp delay={0}>
                <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Most agencies deliver one-time outputs.{" "}
                  <span className="inline-block rounded-sm bg-[#72FF70] px-3 py-1 text-black">
                    We build systems.
                  </span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                  We build systems that determine whether you&apos;re seen, trusted, or ignored. Every engagement is
                  structured around one goal: making your business visible in modern discovery environments.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.08}>
              <div className="relative h-96 w-full overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url('${SOL_IMG_INTRO_PARTICLE}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Sticky stacking solution cards ────────────────────────────── */}
        <div>
          {SOLUTIONS.map((sol, i) => (
            <SolutionCard key={sol.heading} {...sol} index={i} total={SOLUTIONS.length} />
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-surface-container-lowest px-5 py-24 text-center sm:px-8 sm:py-32 md:py-48">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#72FF70_0%,_transparent_70%)] opacity-10" />
          <div className="relative z-10 space-y-8 md:space-y-12">
            <FadeUp>
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Ready for impact?
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <Link
                to="/contact"
                className="font-headline inline-flex min-h-[56px] items-center rounded-lg bg-[#72FF70] px-8 py-4 text-lg font-black uppercase tracking-tighter text-surface-container-lowest neon-glow transition-all hover:brightness-110 active:scale-95 sm:px-12 sm:py-6 sm:text-xl"
              >
                Let's Go
              </Link>
            </FadeUp>
            <FadeUp delay={0.32}>
              <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant opacity-80 sm:text-lg md:mt-8 md:text-xl">
                High-impact transitions don&apos;t have to be high-stress.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-[#1f2020] bg-[#0e0e0e] px-5 py-12 sm:px-8 md:flex-row md:gap-8 md:px-12 md:py-16">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="text-2xl font-black text-[#c6c6c7]">SIARIA LABS</div>
            <p className="font-body text-xs uppercase tracking-widest text-[#c6c6c7]">Stay visible. Stay relevant.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a className="font-body min-h-[44px] flex items-center text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]" href="#!">Privacy Policy</a>
            <a className="font-body min-h-[44px] flex items-center text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]" href="#!">Terms of Service</a>
            <a className="font-body min-h-[44px] flex items-center text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]" href="#!">LinkedIn</a>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-outline">© 2025 SIARIA LABS.</div>
        </footer>

      </main>
    </>
  );
}

import {
  SOL_IMG_DISCOVERY,
  SOL_IMG_HERO_NEURAL,
  SOL_IMG_INFRASTRUCTURE,
  SOL_IMG_INTRO_PARTICLE,
  SOL_IMG_PRESENCE,
  SOL_IMG_TRANSFORMATION,
} from "@/constants/solutionsAssets";
import { RevealDiv, RevealSection } from "@/components/ui/RevealSection";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export default function SolutionsPage() {
  return (
    <>
      <main className="font-body pt-24 text-on-surface selection:bg-[#72FF70]/30">
        <RevealSection
          alwaysActive
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.05)_0%,_transparent_70%)]" />
            <div
              className="h-full w-full bg-cover bg-center opacity-40 mix-blend-screen"
              style={{ backgroundImage: `url('${SOL_IMG_HERO_NEURAL}')` }}
            />
          </div>
          <div className="relative z-10 max-w-5xl space-y-10 text-center">
            <h1 className="font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-white md:text-8xl">
              Built for the <br />
              <span className="text-[#72FF70]">new digital world.</span>
            </h1>
            <p className="font-body mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-2xl">
              Most digital strategies are built on outdated assumptions. We design systems that perform in an
              AI-driven, search-compressed world.
            </p>
            <div className="pt-6">
              <button
                type="button"
                className="font-headline rounded-lg bg-[#72FF70] px-10 py-5 text-lg font-bold uppercase tracking-tighter text-surface-container-lowest neon-glow transition-all hover:brightness-110"
              >
                Fix Your Presence
              </button>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="overflow-hidden bg-surface-container-low px-6 py-32 md:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Most agencies deliver one-time outputs.{" "}
                <span className="inline-block rounded-sm bg-[#72FF70] px-3 py-1 text-black">We build systems.</span>
              </h2>
              <p className="font-body text-xl leading-relaxed text-on-surface-variant">
                We build systems that determine whether you&apos;re seen, trusted, or ignored. Every engagement is
                structured around one goal: making your business visible in modern discovery environments.
              </p>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-highest">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('${SOL_IMG_INTRO_PARTICLE}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
            </div>
          </div>
        </RevealSection>

        <section className="space-y-20 px-6 py-32 md:px-12">
          <RevealDiv className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
            <div className="order-2 w-full md:order-1 md:w-1/2">
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  src={SOL_IMG_PRESENCE}
                  alt=""
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#72FF70]/10 to-transparent" />
              </div>
            </div>
            <div className="order-1 w-full space-y-8 md:order-2 md:w-1/2">
              <div className="space-y-4">
                <EyebrowLabel>Infrastructure</EyebrowLabel>
                <h3 className="font-headline text-4xl font-extrabold text-white md:text-6xl">Presence Foundation</h3>
                <p className="text-on-surface text-xl italic opacity-80">&quot;Where perception is set.&quot;</p>
              </div>
              <ul className="space-y-4 text-lg font-medium text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Website design/development
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  UI/UX systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Messaging/positioning
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Conversion-focused structure
                </li>
              </ul>
            </div>
          </RevealDiv>

          <RevealDiv className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
            <div className="w-full space-y-8 md:w-1/2">
              <div className="space-y-4">
                <EyebrowLabel>Visibility</EyebrowLabel>
                <h3 className="font-headline text-4xl font-extrabold text-white md:text-6xl">Discovery and Growth</h3>
                <p className="text-on-surface text-xl italic opacity-80">
                  &quot;If you&apos;re not surfaced, you don&apos;t exist.&quot;
                </p>
              </div>
              <ul className="space-y-4 text-lg font-medium text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  SEO / Search Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  AEO / Answer Engine Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Content systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Entity/topic structuring
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  src={SOL_IMG_DISCOVERY}
                  alt=""
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#72FF70]/10 to-transparent" />
              </div>
            </div>
          </RevealDiv>

          <RevealDiv className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
            <div className="order-2 w-full md:order-1 md:w-1/2">
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  src={SOL_IMG_INFRASTRUCTURE}
                  alt=""
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#72FF70]/10 to-transparent" />
              </div>
            </div>
            <div className="order-1 w-full space-y-8 md:order-2 md:w-1/2">
              <div className="space-y-4">
                <EyebrowLabel>Performance</EyebrowLabel>
                <h3 className="font-headline text-4xl font-extrabold text-white md:text-6xl">Digital Infrastructure</h3>
                <p className="text-on-surface text-xl italic opacity-80">&quot;Performance is the baseline.&quot;</p>
              </div>
              <ul className="space-y-4 text-lg font-medium text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Scalable architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Automation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Clean backend systems
                </li>
              </ul>
            </div>
          </RevealDiv>

          <RevealDiv className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
            <div className="w-full space-y-8 md:w-1/2">
              <div className="space-y-4">
                <EyebrowLabel>Evolution</EyebrowLabel>
                <h3 className="font-headline text-4xl font-extrabold text-white md:text-6xl">Transformation</h3>
                <p className="text-on-surface text-xl italic opacity-80">
                  &quot;When incremental fixes aren&apos;t enough.&quot;
                </p>
              </div>
              <ul className="space-y-4 text-lg font-medium text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Full repositioning
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Rebuilds from scratch
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Messaging overhaul
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72FF70]" />
                  Strategic realignment
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  src={SOL_IMG_TRANSFORMATION}
                  alt=""
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#72FF70]/10 to-transparent" />
              </div>
            </div>
          </RevealDiv>
        </section>

        <RevealSection className="relative overflow-hidden bg-surface-container-lowest px-6 py-48 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#72FF70_0%,_transparent_70%)] opacity-10" />
          <div className="relative z-10 space-y-12">
            <h2 className="font-headline text-6xl font-extrabold tracking-tighter text-white md:text-8xl">
              Ready for impact?
            </h2>
            <div>
              <button
                type="button"
                className="font-headline rounded-lg bg-[#72FF70] px-12 py-6 text-xl font-black uppercase tracking-tighter text-surface-container-lowest neon-glow transition-all hover:brightness-110 active:scale-95"
              >
                Fix Your Presence
              </button>
            </div>
            <p className="font-body mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant opacity-80 md:text-xl">
              High-impact transitions don&apos;t have to be high-stress.
            </p>
          </div>
        </RevealSection>

        <footer className="flex w-full flex-col items-center justify-between gap-8 border-t border-[#1f2020] bg-[#0e0e0e] px-12 py-16 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="text-2xl font-black text-[#c6c6c7]">SIARIA LABS</div>
            <p className="font-body text-xs uppercase tracking-widest text-[#c6c6c7]">Stay visible. Stay relevant.</p>
          </div>
          <div className="flex items-center gap-8">
            <a
              className="font-body text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-outline transition-colors hover:text-[#c6c6c7]"
              href="#"
            >
              LinkedIn
            </a>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-outline">© 2025 SIARIA LABS.</div>
        </footer>
      </main>
    </>
  );
}

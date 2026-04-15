import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { RevealDiv } from "@/components/ui/RevealSection";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const SUBJECTS = [
  "Brand Strategy",
  "Product Design",
  "Full-Stack Development",
  "Other",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    body: "We align on your core objectives, defining the architectural blueprint before a single pixel is moved.",
  },
  {
    number: "02",
    title: "UI/UX & Brand Design",
    body: "Translating strategy into high-fidelity systems. A focus on visual rhythm and structural integrity.",
  },
  {
    number: "03",
    title: "Handoff & Launch",
    body: "Clean execution and precise deployment. We ensure every detail is preserved from concept to production.",
  },
];

/** Full-page confirmation screen shown after form submission */
// Stagger delays (ms) for each element top-to-bottom
const STAGGER_DELAYS = [80, 220, 380, 520, 660, 800, 960];

function FadeUp({
  children,
  step,
  index,
  className = "",
}: {
  children: React.ReactNode;
  step: number;
  index: number;
  className?: string;
}) {
  const shown = step > index;
  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function InquirySent() {
  const [step, setStep] = useState(0);

  // Fire each step after its stagger delay
  useEffect(() => {
    const timers = STAGGER_DELAYS.map((delay, i) =>
      setTimeout(() => setStep(i + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0e0e0e] px-12">
      <div className="w-full max-w-xl">

        {/* 0 — Checkmark */}
        <FadeUp step={step} index={0} className="mb-16 flex justify-start">
          <div className="relative flex h-20 w-20 items-center justify-center border border-brand-highlight/30 bg-brand-highlight/5">
            <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden="true">
              <polyline
                points="6,21 16,31 34,11"
                stroke="rgb(114,255,112)"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeDasharray="48"
                strokeDashoffset="48"
                style={{
                  animation: step > 0
                    ? "draw-check 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards"
                    : "none",
                }}
              />
            </svg>
            <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-brand-highlight" />
            <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-brand-highlight" />
          </div>
        </FadeUp>

        {/* 1 — Top divider */}
        <FadeUp step={step} index={1} className="mb-10">
          <div className="h-px w-full bg-outline-variant/20" />
        </FadeUp>

        {/* 2 — Eyebrow + heading */}
        <FadeUp step={step} index={2} className="mb-10">
          <EyebrowLabel className="mb-5 block">Confirmation</EyebrowLabel>
          <h1 className="font-headline text-5xl font-extrabold leading-[0.95] tracking-tighter text-white md:text-6xl">
            Your Inquiry<br />is on Its Way.
          </h1>
        </FadeUp>

        {/* 3 — Second divider */}
        <FadeUp step={step} index={3} className="mb-10">
          <div className="h-px w-full bg-outline-variant/20" />
        </FadeUp>

        {/* 4 — Body copy */}
        <FadeUp step={step} index={4} className="mb-6">
          <p className="text-base leading-relaxed text-on-surface-variant">
            Thank you for reaching out. We have received your project details. A dedicated member of
            our design team is now reviewing your information to ensure a thoughtful and effective
            collaboration. We pride ourselves on a transparent, frictionless process.
          </p>
        </FadeUp>

        {/* 5 — 24h line */}
        <FadeUp step={step} index={5} className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-on-surface/50">
            We will get back to you with a detailed initial response within 24 hours.
          </p>
        </FadeUp>

        {/* 6 — CTA */}
        <FadeUp step={step} index={6}>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 border border-brand-highlight/50 bg-[#0e0e0e] px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-highlight/10"
          >
            Return to Home
            <MaterialIcon
              name="arrow_right_alt"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </FadeUp>

      </div>
    </main>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");

    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg = (body as { error?: string }).error;
        throw new Error(msg ? `Send failed: ${msg}` : `Server error (${res.status}). Please try again.`);
      }

      setSubmitted(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) return <InquirySent />;

  return (
    <>
      <main className="min-h-screen bg-[#0e0e0e] pt-20 text-on-surface selection:bg-brand-highlight/30">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-12 pb-24 pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(114,255,112,0.05)_0%,_transparent_60%)]" />
          <div className="relative mx-auto max-w-[1440px]">
            <EyebrowLabel className="mb-6 block">Get in touch</EyebrowLabel>
            <h1 className="font-headline max-w-3xl text-6xl font-extrabold leading-[0.95] tracking-tighter text-white md:text-7xl">
              Human Craft.{" "}
              <span className="text-brand-highlight">Clear Vision.</span>
              <br />
              Simple Process.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-on-surface-variant">
              SIARIA LABS is a precision-led design collective. We strip away the noise to deliver
              high-quality digital experiences that prioritize clarity and functional elegance.
            </p>
          </div>
        </section>

        {/* ── Process + Form ─────────────────────────────────────────────── */}
        <section className="px-12 pb-32">
          <div className="mx-auto grid max-w-[1440px] gap-20 lg:grid-cols-2">

            {/* Process steps */}
            <RevealDiv className="space-y-0">
              <h2 className="font-headline mb-6 text-2xl font-bold uppercase tracking-widest text-on-surface-variant">
                The Process
              </h2>
              {/* Status badge */}
              <div className="mb-12 inline-flex items-center gap-3 border border-brand-highlight/20 bg-brand-highlight/5 px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-brand-highlight pulse-animation" />
                <span className="font-headline text-xs font-bold uppercase tracking-widest text-brand-highlight">
                  Currently accepting projects
                </span>
              </div>
              <div className="space-y-0">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className={`group flex gap-8 py-10 ${
                      i < PROCESS_STEPS.length - 1 ? "border-b border-outline-variant/10" : ""
                    }`}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <span className="font-headline text-4xl font-extrabold tracking-tighter text-brand-highlight/30 transition-colors duration-300 group-hover:text-brand-highlight">
                        {step.number}
                      </span>
                    </div>
                    {/* Step content */}
                    <div>
                      <h3 className="font-headline mb-3 text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-on-surface-variant">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </RevealDiv>

            {/* Contact form */}
            <RevealDiv>
              <div className="border border-outline-variant/10 bg-surface-container-high p-10">
                <h2 className="font-headline mb-2 text-3xl font-extrabold tracking-tighter text-white">
                  Start a conversation
                </h2>
                <p className="mb-10 text-sm text-on-surface-variant">
                  Direct communication. Radical clarity.
                </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full border border-outline-variant/20 bg-surface-container-highest px-4 py-3 text-sm text-white placeholder:text-on-surface/30 focus:border-brand-highlight/50 focus:outline-none focus:ring-1 focus:ring-brand-highlight/30 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-outline-variant/20 bg-surface-container-highest px-4 py-3 text-sm text-white placeholder:text-on-surface/30 focus:border-brand-highlight/50 focus:outline-none focus:ring-1 focus:ring-brand-highlight/30 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Subject
                      </label>
                      <select
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full border border-outline-variant/20 bg-surface-container-highest px-4 py-3 text-sm text-white focus:border-brand-highlight/50 focus:outline-none focus:ring-1 focus:ring-brand-highlight/30 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a subject</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Tell us about your project
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="What are you working on?"
                        className="w-full border border-outline-variant/20 bg-surface-container-highest px-4 py-3 text-sm text-white placeholder:text-on-surface/30 focus:border-brand-highlight/50 focus:outline-none focus:ring-1 focus:ring-brand-highlight/30 transition-colors resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {sendError && (
                      <p className="text-sm text-red-400">{sendError}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="group flex w-full items-center justify-center gap-3 border border-brand-highlight/50 bg-[#0e0e0e] px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-highlight/10 pulse-animation disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending…" : "Send Inquiry"}
                      {!sending && (
                        <MaterialIcon
                          name="arrow_right_alt"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </form>
              </div>
            </RevealDiv>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

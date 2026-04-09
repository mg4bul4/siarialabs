import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const CAPABILITIES = [
  {
    icon: "token",
    title: "Brand Architecture",
    description:
      "Positioning, messaging, and structure that define how your business is understood across every touchpoint.",
    decoration: "square" as const,
  },
  {
    icon: "fluid",
    title: "Digital Presence",
    description: "Web design, UI/UX, and content systems built for clarity, speed, and conversion.",
    decoration: "blur" as const,
  },
  {
    icon: "deployed_code",
    title: "Technology",
    description: "SEO, AEO, automation, and infrastructure aligned with how modern discovery actually works.",
    decoration: "border" as const,
  },
];

export function CapabilitiesGridSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${revealClass} border-t border-outline-variant/10 bg-background px-12`}
      style={{ paddingBlock: "var(--spacing-section-sm)" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col items-baseline justify-between gap-6 border-b-2 border-outline-variant/30 pb-12 md:flex-row">
          <div className="space-y-3">
            <EyebrowLabel>What we do</EyebrowLabel>
            <h2 className="text-6xl font-extrabold uppercase tracking-tighter text-tertiary md:text-7xl">
              Capabilities
            </h2>
          </div>
          <p className="max-w-md text-right font-serif text-xl italic text-on-surface-variant">
            What we build is designed to be seen, understood, and chosen.
          </p>
        </div>
        <div className="grid grid-cols-1 border-2 border-outline-variant/30 bg-surface-container-lowest md:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} {...cap} isLastColumn={i === CAPABILITIES.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CapabilityCardProps = (typeof CAPABILITIES)[number] & { isLastColumn: boolean };

function CapabilityCard({ icon, title, description, decoration, isLastColumn }: CapabilityCardProps) {
  const decorationEl =
    decoration === "square" ? (
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rotate-45 border-2 border-white/10 transition-all group-hover:border-black/20" />
    ) : decoration === "blur" ? (
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand-highlight/10 blur-xl transition-all group-hover:bg-black/5" />
    ) : (
      <div className="absolute -top-10 -right-10 h-32 w-32 border-2 border-white/10 transition-all group-hover:border-black/20" />
    );

  return (
    <div
      className={`group relative overflow-hidden border-outline-variant/30 p-12 transition-all duration-300 hover:border-brand-highlight/40 hover:bg-surface-container-high ${
        isLastColumn ? "border-b-2 md:border-b-0" : "border-b-2 md:border-r-2 md:border-b-0"
      }`}
    >
      <MaterialIcon
        name={icon}
        className="mb-10 text-6xl text-brand-highlight transition-colors"
        filled
      />
      <h3 className="mb-6 text-2xl font-extrabold uppercase text-tertiary">{title}</h3>
      <p className="text-lg leading-relaxed text-on-surface-variant">{description}</p>
      {decorationEl}
    </div>
  );
}

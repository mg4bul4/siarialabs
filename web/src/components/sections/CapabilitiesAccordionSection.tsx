import type { ReactNode } from "react";

import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type AccordionItemProps = {
  icon: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

function AccordionItem({ icon, title, defaultOpen, children }: AccordionItemProps) {
  return (
    <details
      className="group relative overflow-hidden rounded-none border border-outline-variant/10 bg-surface-container-high transition-all duration-300"
      name="presence-accordion"
      {...(defaultOpen ? { open: true } : {})}
    >
      <div className="accordion-indicator" />
      <summary className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-6">
          <div className="group-open:bg-brand-highlight flex h-12 w-12 items-center justify-center rounded-none bg-surface-container-highest text-primary transition-colors group-open:text-on-primary">
            <MaterialIcon name={icon} className="text-2xl" />
          </div>
          <h4 className="text-xl font-bold text-tertiary">{title}</h4>
        </div>
        <MaterialIcon name="expand_more" className="expand-icon text-outline transition-transform duration-300" />
      </summary>
      <div className="px-6 pb-8 md:px-8 md:pl-24">{children}</div>
    </details>
  );
}

export function CapabilitiesAccordionSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className={`${revealClass} bg-background py-32`} id="capabilities-accordion">
      <div className="mx-auto max-w-[1440px] px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-tertiary md:text-5xl">
            Building a Digital Presence That Holds Up
          </h2>
          <p className="mx-auto max-w-4xl text-xl font-normal tracking-tight text-on-surface-variant md:text-2xl">
            Your foundation determines whether you get ignored or chosen. We make sure it holds.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <AccordionItem icon="explore" title="Strategic Direction" defaultOpen>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                Clear positioning. Sharp messaging. No confusion about who you are or why you matter.
              </p>
            </AccordionItem>
            <AccordionItem icon="brush" title="Brand + Experience">
              <p className="leading-relaxed text-on-surface-variant">
                Interfaces that feel intentional. Designed to reduce friction and build trust instantly.
              </p>
            </AccordionItem>
            <AccordionItem icon="settings_input_component" title="Digital Infrastructure">
              <p className="leading-relaxed text-on-surface-variant">
                Fast, scalable systems that don&apos;t break under growth or traffic.
              </p>
            </AccordionItem>
            <AccordionItem icon="trending_up" title="Performance Layer">
              <p className="leading-relaxed text-on-surface-variant">
                Built to convert, rank, and surface across modern search and AI interfaces.
              </p>
            </AccordionItem>
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-none border border-outline-variant/10 bg-surface-container-highest p-8 shadow-inner lg:h-full">
            <div className="relative flex aspect-square w-full max-w-lg flex-col gap-6 overflow-hidden rounded-none border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-surface-container-highest" />
                  <div className="h-3 w-3 rounded-full bg-surface-container-highest" />
                  <div className="h-3 w-3 rounded-full bg-surface-container-highest" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  SYSTEM BLUEPRINT v2.0
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center rounded-none bg-surface-container p-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-highlight/10">
                  <MaterialIcon name="layers" className="text-4xl text-brand-highlight" />
                </div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/40">
                  Every layer compounds. Nothing exists in isolation.
                </p>
                <div className="mb-3 h-4 w-48 rounded-full bg-surface-container-highest" />
                <div className="h-4 w-32 rounded-full bg-surface-container-high" />
                <div className="mt-8 grid w-full grid-cols-4 gap-2">
                  <div className="aspect-square rounded-none bg-primary" />
                  <div className="aspect-square rounded-none bg-secondary" />
                  <div className="aspect-square rounded-none bg-brand-highlight" />
                  <div className="aspect-square rounded-none bg-outline" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

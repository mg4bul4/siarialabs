import { useState } from "react";

import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const ACCORDION_ITEMS = [
  {
    id: "strategic",
    icon: "explore",
    title: "Strategic Direction",
    body: "Clear positioning. Sharp messaging. No confusion about who you are or why you matter.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Team working on strategy and positioning",
  },
  {
    id: "brand",
    icon: "brush",
    title: "Brand + Experience",
    body: "Interfaces that feel intentional. Designed to reduce friction and build trust instantly.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Brand design and visual identity work",
  },
  {
    id: "infrastructure",
    icon: "settings_input_component",
    title: "Digital Infrastructure",
    body: "Fast, scalable systems that don't break under growth or traffic.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Server infrastructure and digital systems",
  },
  {
    id: "performance",
    icon: "trending_up",
    title: "Performance Layer",
    body: "Built to convert, rank, and surface across modern search and AI interfaces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Analytics dashboard showing performance metrics",
  },
];

export function CapabilitiesAccordionSection() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();
  const [activeId, setActiveId] = useState<string>(ACCORDION_ITEMS[0].id);

  return (
    <section
      ref={ref}
      className={`${revealClass} bg-background`}
      id="capabilities-accordion"
      style={{ paddingBlock: "var(--spacing-section-md)" }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-tertiary sm:text-4xl md:mb-6 md:text-5xl">
            Building a Digital Presence That Holds Up
          </h2>
          <p className="mx-auto max-w-4xl text-base font-normal tracking-tight text-on-surface-variant sm:text-lg md:text-xl lg:text-2xl">
            Your foundation determines whether you get ignored or chosen. We make sure it holds.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Accordion list */}
          <div className="space-y-3">
            {ACCORDION_ITEMS.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-highlight/30 bg-surface-container-high"
                      : "border-outline-variant/10 bg-surface-container-high"
                  }`}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-1 transition-all duration-300 ${
                      isOpen ? "opacity-100 shadow-[0_0_15px_2px_rgba(114,255,112,0.6)]" : "opacity-0"
                    } bg-brand-highlight`}
                  />

                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="flex min-h-[64px] w-full items-center justify-between p-5 text-left sm:p-6 md:p-8"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center transition-colors duration-300 sm:h-12 sm:w-12 ${
                          isOpen ? "bg-brand-highlight text-black" : "bg-surface-container-highest text-primary"
                        }`}
                      >
                        <MaterialIcon name={item.icon} className="text-xl sm:text-2xl" />
                      </div>
                      <h4 className="text-base font-bold text-tertiary sm:text-xl">{item.title}</h4>
                    </div>
                    <MaterialIcon
                      name="expand_more"
                      className={`ml-3 flex-shrink-0 text-outline transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expandable body */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-6 text-sm leading-relaxed text-on-surface-variant sm:px-6 sm:pb-8 sm:text-base md:px-8 md:pl-24">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image panel — sticky on desktop, hidden on mobile (content visible in accordion body) */}
          <div className="hidden overflow-hidden border border-outline-variant/10 bg-surface-container-highest lg:sticky lg:top-28 lg:block lg:h-[520px]">
            {ACCORDION_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeId === item.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover brightness-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <EyebrowLabel className="mb-2 block">{item.title}</EyebrowLabel>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{item.body}</p>
                </div>
              </div>
            ))}
            <div className="h-full w-full" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

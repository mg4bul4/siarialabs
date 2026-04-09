import { CapabilitiesAccordionSection } from "@/components/sections/CapabilitiesAccordionSection";
import { CapabilitiesGridSection } from "@/components/sections/CapabilitiesGridSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ManifestoSection />
        <CapabilitiesAccordionSection />
        <CapabilitiesGridSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

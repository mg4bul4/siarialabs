import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const FOOTER_LINKS = [
  { label: "Privacy", href: "#!" },
  { label: "Terms", href: "#!" },
  { label: "Twitter", href: "#!" },
  { label: "LinkedIn", href: "#!" },
];

export function Footer() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <footer ref={ref} className={`${revealClass} w-full border-t border-[#1f2020] bg-[#0e0e0e]`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:px-12 md:py-12">
        <div className="text-center md:text-left">
          <div className="mb-1 text-xl font-bold text-[#fcf9f8]">SIARIALABS</div>
          <p className="font-body text-sm text-outline">© 2026 SIARIALABS. Stay visible. Stay relevant.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body min-h-[44px] flex items-center text-sm text-outline transition-colors duration-200 hover:text-[#c6c6c7]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

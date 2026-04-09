import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function Footer() {
  const { ref, revealClass } = useRevealOnScroll<HTMLElement>();

  return (
    <footer ref={ref} className={`${revealClass} w-full border-t border-[#1f2020] bg-[#0e0e0e]`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-12 py-12 md:flex-row">
        <div className="mb-8 md:mb-0">
          <div className="mb-2 text-xl font-bold text-[#fcf9f8]">SIARIALABS</div>
          <p className="font-body text-sm text-[#454747]">© 2026 SIARIALABS. Stay visible. Stay relevant.</p>
        </div>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Twitter", "LinkedIn"].map((label) => (
            <a
              key={label}
              className="font-body text-sm text-[#454747] transition-colors hover:text-[#c6c6c7]"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

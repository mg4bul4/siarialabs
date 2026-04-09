import { Link, useLocation } from "react-router-dom";

import { NeonPulseButton } from "@/components/ui/NeonPulseButton";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
];

function BrandLink() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-headline text-2xl font-bold tracking-tighter text-[#fcf9f8]">SIARIALABS</span>
      <MaterialIcon name="science" className="text-[28px]" filled style={{ color: "rgb(114, 255, 112)" }} />
    </Link>
  );
}

export function TopNavBar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0e0e0e]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-5">
        {/* Brand */}
        <div className="flex flex-1 justify-start">
          <BrandLink />
        </div>

        {/* Nav links — centered */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`font-headline text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                  isActive
                    ? "text-[#72FF70] active-halo border-b-2 border-[#72FF70] pb-1"
                    : "text-[#c6c6c7]/70 hover:text-[#fcf9f8]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-1 justify-end">
          <NeonPulseButton href="/solutions" className="px-6 py-2 text-xs">
            Get Started
          </NeonPulseButton>
        </div>
      </nav>
    </header>
  );
}

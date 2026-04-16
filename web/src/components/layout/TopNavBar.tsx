import { useState, useEffect } from "react";
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
      <span className="font-headline text-xl font-bold tracking-tighter text-[#fcf9f8] sm:text-2xl">SIARIALABS</span>
      <MaterialIcon name="science" className="text-[24px] sm:text-[28px]" filled style={{ color: "rgb(114, 255, 112)" }} />
    </Link>
  );
}

export function TopNavBar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-transparent backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5 md:px-12">
        {/* Brand */}
        <div className="flex flex-1 justify-start">
          <BrandLink />
        </div>

        {/* Nav links — centered, desktop only */}
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

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-3">
          {/* CTA — hidden on very small screens to keep nav clean */}
          <div className="hidden sm:block">
            <NeonPulseButton href="/contact" className="px-5 py-2 text-xs">
              Get Started
            </NeonPulseButton>
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-[26px]" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-[57px] z-40 flex flex-col bg-[#0e0e0e]/95 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 border-b border-white/5 px-5 py-6">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex min-h-[52px] items-center font-headline text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                  isActive ? "text-[#72FF70]" : "text-[#c6c6c7]/80 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="px-5 pt-6">
          <NeonPulseButton href="/contact" className="w-full py-4 text-sm">
            Get Started
          </NeonPulseButton>
        </div>
      </div>
    </header>
  );
}

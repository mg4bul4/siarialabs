import { Link, useLocation } from "react-router-dom";

import { NeonPulseButton } from "@/components/ui/NeonPulseButton";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

function BrandLink() {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl tracking-tighter">
      <span className="font-headline text-2xl font-bold tracking-tighter text-[#fcf9f8]">SIARIALABS</span>
      <MaterialIcon
        name="science"
        className="text-[28px]"
        filled
        style={{ color: "rgb(114, 255, 112)" }}
      />
    </Link>
  );
}

export function TopNavBar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const onSolutions = pathname === "/solutions";

  const landingHomeClass = onHome
    ? "font-headline relative border-b-2 border-white pb-1 font-medium uppercase tracking-tight text-white transition-all duration-300"
    : "font-headline font-medium uppercase tracking-tight text-[#c6c6c7]/70 transition-colors duration-300 hover:text-[#fcf9f8]";

  const landingHomeStyle = onHome
    ? {
        textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 8px",
        boxShadow: "rgba(255, 255, 255, 0.5) 0px 4px 10px -2px",
      }
    : undefined;

  const landingSolutionsClass = onSolutions
    ? "font-headline relative border-b-2 border-white pb-1 font-medium uppercase tracking-tight text-white transition-all duration-300"
    : "font-headline font-medium uppercase tracking-tight text-[#c6c6c7]/70 transition-colors duration-300 hover:text-[#fcf9f8]";

  const landingSolutionsStyle = onSolutions
    ? {
        textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 8px",
        boxShadow: "rgba(255, 255, 255, 0.5) 0px 4px 10px -2px",
      }
    : undefined;

  if (onSolutions) {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0e0e0e]/90 backdrop-blur-xl">
        <nav className="flex w-full items-center justify-between px-12 py-5">
          <div className="flex flex-1 justify-start">
            <BrandLink />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex items-center gap-10">
              <Link
                to="/"
                className="font-headline text-xs uppercase tracking-tight text-[#c6c6c7] transition-colors duration-300 hover:text-[#72FF70]"
              >
                Home
              </Link>
              <span className="font-headline border-b-2 border-[#72FF70] pb-1 text-xs font-bold uppercase tracking-tight text-[#72FF70] active-halo">
                Solutions
              </span>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <NeonPulseButton className="px-6 py-2 text-xs">Get Started</NeonPulseButton>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-6">
        <BrandLink />
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={landingHomeClass} style={landingHomeStyle}>
            HOME
          </Link>
          <Link to="/solutions" className={landingSolutionsClass} style={landingSolutionsStyle}>
            SOLUTIONS
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <NeonPulseButton className="px-6 py-2 text-xs">Get Started</NeonPulseButton>
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  // GraduationCap,
  // Rocket,
  // Truck,
  // FlaskConical,
  Warehouse,
  CreditCard,
  CalendarCheck,
  Phone,
  Mail,
} from "lucide-react";

// const programs = [
//   { name: "Work-Based Learning", href: "/programs/work-based-learning", icon: GraduationCap, desc: "Hands-on culinary training" },
//   { name: "Food Business Incubator", href: "/programs/food-business-incubator", icon: Rocket, desc: "Launch your food venture" },
//   { name: "Food Truck Membership", href: "/programs/food-truck-membership", icon: Truck, desc: "Commissary + business support" },
//   { name: "Product Development Lab", href: "/programs/product-development-lab", icon: FlaskConical, desc: "Recipe to retail pipeline" },
// ];

const kitchenLinks = [
  { name: "Commissary Kitchen", href: "/kitchen-membership", icon: Warehouse, desc: "Licensed facility access" },
  { name: "Pricing & Plans", href: "/kitchen-membership#pricing", icon: CreditCard, desc: "Flexible memberships" },
  { name: "Book Kitchen", href: "/kitchen-membership#book", icon: CalendarCheck, desc: "Schedule your hours" },
];

function normalize(path: string) {
  if (!path) return "/";
  const noHash = path.split("#")[0];
  if (noHash === "/") return "/";
  return noHash.replace(/\/$/, "");
}

export function Navbar() {
  const pathname = normalize(usePathname());
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [programsOpen, setProgramsOpen] = useState(false);
  const [kitchenOpen, setKitchenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b transition-all duration-300 ${
          scrolled ? "border-gray-200 shadow-sm" : "border-gray-100"
        }`}
      >
        <nav aria-label="Main navigation" className="px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex h-20 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 mr-8"
              aria-label="Newark Food Factory - Home"
            >
              <Image
                src="/3.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 hidden sm:block"
                priority
                aria-hidden="true"
              />
              <Image
                src="/7.png"
                alt="Newark Food Factory"
                width={260}
                height={104}
                className="h-16 sm:h-26 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links, centered */}
            <div className="hidden xl:flex items-center flex-1" role="menubar">
              <div className="flex items-center gap-0.5 mx-auto">
                <DesktopLink href="/">Home</DesktopLink>
                <DesktopLink href="/start-a-food-business">Start a Food Business</DesktopLink>

                {/* Programs dropdown */}
                {/*
                <div
                  className="relative group"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button
                    className={`relative px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 cursor-pointer flex items-center gap-0.5 whitespace-nowrap ${
                      pathname.startsWith("/programs") ? "text-primary" : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-expanded={programsOpen}
                    aria-haspopup="true"
                    onClick={() => setProgramsOpen((p) => !p)}
                    type="button"
                  >
                    Programs
                    <ChevronDown className={`h-3.5 w-3.5 transition-[rotate] duration-200 ${programsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary rounded-full origin-left transition-[scale] duration-200 ease-out motion-reduce:transition-none ${
                        pathname.startsWith("/programs") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                  {programsOpen && (
                    <div className="absolute top-full left-0 w-[300px] pt-2" role="menu">
                      <div className="rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                        {programs.map(({ href, name, icon: Icon, desc }) => (
                          <Link
                            key={href}
                            href={href}
                            role="menuitem"
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{name}</p>
                              <p className="text-xs text-gray-500">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                */}

                {/* <DesktopLink href="/meals">Meals</DesktopLink> */}
                <DesktopLink href="/events">Events</DesktopLink>

                {/* Kitchen Membership dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setKitchenOpen(true)}
                  onMouseLeave={() => setKitchenOpen(false)}
                >
                  <button
                    className={`relative px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 cursor-pointer flex items-center gap-0.5 whitespace-nowrap ${
                      pathname.startsWith("/kitchen-membership") ? "text-primary" : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-expanded={kitchenOpen}
                    aria-haspopup="true"
                    onClick={() => setKitchenOpen((k) => !k)}
                    type="button"
                  >
                    Kitchen Membership
                    <ChevronDown className={`h-3.5 w-3.5 transition-[rotate] duration-200 ${kitchenOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary rounded-full origin-left transition-[scale] duration-200 ease-out motion-reduce:transition-none ${
                        pathname.startsWith("/kitchen-membership") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                  {kitchenOpen && (
                    <div className="absolute top-full left-0 w-[270px] pt-2" role="menu">
                      <div className="rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                        {kitchenLinks.map(({ href, name, icon: Icon, desc }) => (
                          <Link
                            key={href}
                            href={href}
                            role="menuitem"
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{name}</p>
                              <p className="text-xs text-gray-500">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <DesktopLink href="/food-entrepreneurs">Food Entrepreneurs</DesktopLink>
                <DesktopLink href="/chef-studio">Chef Studio</DesktopLink>
                <DesktopLink href="/about">About</DesktopLink>
                <DesktopLink href="/contact">Contact</DesktopLink>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 ml-auto xl:ml-4 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex rounded-lg bg-primary px-4 py-2 text-[13px] font-semibold text-white hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Apply Now
              </Link>
              <button
                className="xl:hidden p-2.5 -mr-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer select-none"
                onClick={toggleMobile}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  toggleMobile();
                }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                type="button"
                style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
              >
                {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="xl:hidden fixed inset-0 top-20 z-[60] bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile navigation" className="px-6 pt-6 pb-20 space-y-1">
            <MobileLink href="/" onClick={closeMobile}>Home</MobileLink>
            <MobileLink href="/start-a-food-business" onClick={closeMobile}>Start a Food Business</MobileLink>

            {/*
            <div className="pt-4 pb-1">
              <p className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Programs</p>
              {programs.map((p) => (
                <MobileLink key={p.href} href={p.href} onClick={closeMobile} nested>
                  {p.name}
                </MobileLink>
              ))}
            </div>
            */}

            {/* <MobileLink href="/meals" onClick={closeMobile}>Meals</MobileLink> */}
            <MobileLink href="/events" onClick={closeMobile}>Events</MobileLink>

            <div className="pt-4 pb-1">
              <p className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Kitchen Membership</p>
              {kitchenLinks.map((k) => (
                <MobileLink key={k.href} href={k.href} onClick={closeMobile} nested>
                  {k.name}
                </MobileLink>
              ))}
            </div>

            <MobileLink href="/food-entrepreneurs" onClick={closeMobile}>Food Entrepreneurs</MobileLink>
            <MobileLink href="/chef-studio" onClick={closeMobile}>Chef Studio</MobileLink>
            <MobileLink href="/about" onClick={closeMobile}>About</MobileLink>
            <MobileLink href="/contact" onClick={closeMobile}>Contact</MobileLink>

            <div className="pt-6 border-t border-gray-100 mt-4 space-y-3">
              <a href="tel:+16095445569" className="flex items-center gap-2 px-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> +1 609-544-5569
              </a>
              <a href="mailto:info@newarkfoodfactory.com" className="flex items-center gap-2 px-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> info@newarkfoodfactory.com
              </a>
            </div>

            <div className="pt-4 px-1">
              <Link
                href="/contact"
                className="block rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white text-center hover:bg-primary-dark transition-colors"
                onClick={closeMobile}
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function DesktopLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = normalize(usePathname());
  const isActive = pathname === normalize(href);
  return (
    <Link
      href={href}
      className={`relative px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 whitespace-nowrap group ${
        isActive ? "text-primary" : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary rounded-full origin-left transition-[scale] duration-200 ease-out motion-reduce:transition-none ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  nested = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  nested?: boolean;
}) {
  const pathname = normalize(usePathname());
  const isActive = pathname === normalize(href);
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? `text-primary bg-primary/5 border-l-2 border-primary ${nested ? "pl-5.5" : "pl-2.5"}`
          : `hover:bg-gray-50 hover:text-primary ${nested ? "pl-6 text-gray-600" : "text-gray-800"}`
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

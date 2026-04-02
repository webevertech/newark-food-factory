"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  ChefHat,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Rocket,
  Truck,
  FlaskConical,
  Warehouse,
  CreditCard,
  CalendarCheck,
  Phone,
  Mail,
} from "lucide-react";

const programs = [
  { name: "Work-Based Learning", href: "/programs/work-based-learning", icon: GraduationCap, desc: "Hands-on culinary training" },
  { name: "Food Business Incubator", href: "/programs/food-business-incubator", icon: Rocket, desc: "Launch your food venture" },
  { name: "Food Truck Membership", href: "/programs/food-truck-membership", icon: Truck, desc: "Commissary + business support" },
  { name: "Product Development Lab", href: "/programs/product-development-lab", icon: FlaskConical, desc: "Recipe to retail pipeline" },
];

const kitchenLinks = [
  { name: "Commissary Kitchen", href: "/kitchen-membership", icon: Warehouse, desc: "Licensed facility access" },
  { name: "Pricing & Plans", href: "/kitchen-membership#pricing", icon: CreditCard, desc: "Flexible memberships" },
  { name: "Book Kitchen", href: "/kitchen-membership#book", icon: CalendarCheck, desc: "Schedule your hours" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
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
        <nav aria-label="Main navigation" className="px-6 lg:px-10 xl:px-16">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Newark Food Factory - Home">
              <ChefHat className="h-7 w-7 text-primary" aria-hidden="true" />
              <span className="font-bold text-lg text-gray-900 tracking-tight hidden sm:inline">
                Newark Food Factory
              </span>
              <span className="font-bold text-lg text-gray-900 tracking-tight sm:hidden" aria-hidden="true">
                NFF
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden xl:flex items-center gap-1" role="menubar">
              <DesktopLink href="/">Home</DesktopLink>
              <DesktopLink href="/start-a-food-business">Start a Business</DesktopLink>

              {/* Programs dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-1"
                  aria-expanded={programsOpen}
                  aria-haspopup="true"
                  onClick={() => setProgramsOpen((p) => !p)}
                  type="button"
                >
                  Programs
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {programsOpen && (
                  <div className="absolute top-full left-0 w-[320px] pt-2" role="menu">
                    <div className="rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                      {programs.map(({ href, name, icon: Icon, desc }) => (
                        <Link
                          key={href}
                          href={href}
                          role="menuitem"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          <Icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
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

              <DesktopLink href="/meals-events">Meals + Events</DesktopLink>

              {/* Kitchen dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setKitchenOpen(true)}
                onMouseLeave={() => setKitchenOpen(false)}
              >
                <button
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-1"
                  aria-expanded={kitchenOpen}
                  aria-haspopup="true"
                  onClick={() => setKitchenOpen((k) => !k)}
                  type="button"
                >
                  Kitchen
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${kitchenOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {kitchenOpen && (
                  <div className="absolute top-full left-0 w-[280px] pt-2" role="menu">
                    <div className="rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                      {kitchenLinks.map(({ href, name, icon: Icon, desc }) => (
                        <Link
                          key={href}
                          href={href}
                          role="menuitem"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          <Icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
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

              <DesktopLink href="/about">About</DesktopLink>
              <DesktopLink href="/contact">Contact</DesktopLink>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
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
          className="xl:hidden fixed inset-0 top-16 z-[60] bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile navigation" className="px-6 pt-6 pb-20 space-y-1">
            <MobileLink href="/" onClick={closeMobile}>Home</MobileLink>
            <MobileLink href="/start-a-food-business" onClick={closeMobile}>Start a Food Business</MobileLink>

            <div className="pt-4 pb-1">
              <p className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Programs</p>
              {programs.map((p) => (
                <MobileLink key={p.href} href={p.href} onClick={closeMobile} nested>
                  {p.name}
                </MobileLink>
              ))}
            </div>

            <MobileLink href="/meals-events" onClick={closeMobile}>Meals + Events</MobileLink>

            <div className="pt-4 pb-1">
              <p className="px-3 text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Kitchen Membership</p>
              {kitchenLinks.map((k) => (
                <MobileLink key={k.href} href={k.href} onClick={closeMobile} nested>
                  {k.name}
                </MobileLink>
              ))}
            </div>

            <MobileLink href="/partners" onClick={closeMobile}>Partners</MobileLink>
            <MobileLink href="/about" onClick={closeMobile}>About</MobileLink>
            <MobileLink href="/contact" onClick={closeMobile}>Contact</MobileLink>

            <div className="pt-6 border-t border-gray-100 mt-4 space-y-3">
              <a href="tel:+19735550100" className="flex items-center gap-2 px-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> (973) 555-0100
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
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
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
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors ${
        nested ? "pl-6 text-gray-600" : "text-gray-800"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

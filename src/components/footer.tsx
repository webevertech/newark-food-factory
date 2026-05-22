import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Start a Food Business", href: "/start-a-food-business" },
  { name: "Daily Meals", href: "/meals" },
  { name: "Event Space", href: "/events" },
  { name: "Kitchen Membership", href: "/kitchen-membership" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "Work-Based Learning", href: "/programs/work-based-learning" },
  { name: "Food Business Incubator", href: "/programs/food-business-incubator" },
  { name: "Food Truck Membership", href: "/programs/food-truck-membership" },
  { name: "Product Development Lab", href: "/programs/product-development-lab" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center text-white mb-4" aria-label="Newark Food Factory - Home">
              <Image src="/2.png" alt="" width={56} height={56} className="h-14 w-14" aria-hidden="true" />
              <Image
                src="/6.png"
                alt="Newark Food Factory"
                width={260}
                height={260}
                className="h-26 w-26"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/newark.food.factory/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Newark Food Factory on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-primary-bright hover:bg-primary/10 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/newarkfoodfactory/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Newark Food Factory on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-primary-bright hover:bg-primary/10 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="Programs">
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-bright shrink-0" aria-hidden="true" />
                <span>
                  Newark Food Factory at Makerhoods<br />
                  145 Court Street<br />
                  Newark, New Jersey 07102
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-bright shrink-0" aria-hidden="true" />
                <a href="tel:+16095445569" className="hover:text-white transition-colors">+1 609-544-5569</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-bright shrink-0" aria-hidden="true" />
                <a href="mailto:info@newarkfoodfactory.com" className="break-all hover:text-white transition-colors">info@newarkfoodfactory.com</a>
              </li>
            </ul>
          </div>

          {/* IITNJ + Maker Hoods */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex items-center gap-4">
              <Image
                src="/iitnj-white-logo (2).png"
                alt="Ideal Institute of Technology"
                width={160}
                height={48}
                className="w-28"
                style={{ height: "auto" }}
              />
              <Image
                src="/MHOODLOGO.png"
                alt="Maker Hoods"
                width={160}
                height={48}
                className="w-18 -mb-2"
                style={{ height: "auto" }}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 text-left lg:text-right">
              Newark Food Factory at Maker Hoods, Social Enterprise of Ideal Institute of Technology
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Newark Food Factory. All rights reserved.</p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

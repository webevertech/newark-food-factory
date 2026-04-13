import Link from "next/link";
import { ChefHat, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Start a Food Business", href: "/start-a-food-business" },
  { name: "Meals + Events", href: "/meals-events" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white mb-4" aria-label="Newark Food Factory - Home">
              <ChefHat className="h-7 w-7 text-primary" aria-hidden="true" />
              <span className="font-bold text-lg">Newark Food Factory</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark.
            </p>
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
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span>Newark, NJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+19735550100" className="hover:text-white transition-colors">(973) 555-0100</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:info@newarkfoodfactory.com" className="break-all hover:text-white transition-colors">info@newarkfoodfactory.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 space-y-1">
          <p>Newark Food Factory at Maker Hoods — Social Enterprise of Ideal Institute of Technology</p>
          <p>&copy; {new Date().getFullYear()} Newark Food Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

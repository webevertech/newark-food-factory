"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <PageHero
        icon={Mail}
        title="Contact Us"
        subtitle="Have a question or ready to get started? Reach out, we'd love to hear from you."
        image="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=1920&q=90"
        imageAlt="Newark Food Factory facility"
      />

      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <iframe
                src="https://links.newarkfoodfactory.com/widget/form/FurV6jPOcZSi9GnOMSjR"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                id="inline-FurV6jPOcZSi9GnOMSjR"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Main Inquiry Form"
                data-height="577"
                data-layout-iframe-id="inline-FurV6jPOcZSi9GnOMSjR"
                data-form-id="FurV6jPOcZSi9GnOMSjR"
                title="Main Inquiry Form"
                className="min-h-150"
              />
              <Script
                src="https://links.newarkfoodfactory.com/js/form_embed.js"
                strategy="afterInteractive"
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-bold text-lg text-primary-light mb-4">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-600">
                        Newark Food Factory at Makerhoods<br />
                        145 Court Street<br />
                        Newark, New Jersey 07102
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">
                        <a href="tel:+16095445569" className="hover:text-primary transition-colors">+1 609-544-5569</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">info@newarkfoodfactory.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM – 5:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative rounded-xl overflow-hidden h-44">
                <Image
                  src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800&q=90"
                  alt="Newark Food Factory facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div id="tour" className="rounded-xl bg-gray-900 text-white p-6 scroll-mt-24">
                <h4 className="font-bold text-primary-bright mb-2">Book a Tour</h4>
                <p className="text-sm text-gray-300">
                  Want to see our facility in person? Schedule a tour and we&apos;ll show you everything
                  Newark Food Factory has to offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

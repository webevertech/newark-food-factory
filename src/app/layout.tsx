import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://newarkfoodfactory.com";

export const viewport: Viewport = {
  themeColor: "#d30100",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Newark Food Factory | Food Business Hub in Newark, NJ",
    template: "%s | Newark Food Factory",
  },
  description:
    "A food innovation hub powering daily meals, delivery, events, and food entrepreneurs — from students to food truck owners in Newark, NJ.",
  keywords: [
    "Newark food business",
    "commercial kitchen rental",
    "food truck commissary",
    "food business incubator",
    "catering Newark NJ",
    "daily meals Newark",
    "event space Newark",
    "food entrepreneur",
    "commissary kitchen",
    "work-based learning culinary",
  ],
  authors: [{ name: "Newark Food Factory" }],
  creator: "Newark Food Factory",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Newark Food Factory",
    title: "Newark Food Factory | Food Business Hub in Newark, NJ",
    description:
      "A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark, NJ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newark Food Factory | Food Business Hub",
    description:
      "A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark, NJ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Newark Food Factory",
  description:
    "A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark, NJ.",
  url: BASE_URL,
  telephone: "(973) 555-0100",
  email: "info@newarkfoodfactory.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newark",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-primary focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

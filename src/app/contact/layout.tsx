import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Newark Food Factory. Inquire about kitchen membership, programs, catering, events, or starting a food business in Newark, NJ.",
  path: "/contact",
  keywords: ["contact Newark Food Factory", "book kitchen tour", "catering inquiry Newark NJ", "food business consultation"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

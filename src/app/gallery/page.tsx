import { Images } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { EventInquiryButton } from "@/components/event-inquiry-button";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { VenueGallery } from "@/components/venue-gallery";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "See every space inside Newark Food Factory — 1st floor event hall, 2nd floor production area, courtyard, outdoor patio, and greenhouse — before you book.",
  path: "/gallery",
  keywords: [
    "Newark Food Factory gallery",
    "Newark event venue photos",
    "Newark Food Factory tour",
    "event space photos Newark",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        icon={Images}
        title="Inside Newark Food Factory"
        subtitle="A look at every space available for your next event — filter by area to see what fits."
        image="/1st floor birthday party setup.jpg"
        imageAlt="Newark Food Factory event space"
      >
        <Button href="/contact#tour" variant="white">
          Book a Tour
        </Button>
        <EventInquiryButton label="Get Pricing" variant="outline-light" />
      </PageHero>

      <section className="py-16 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <VenueGallery />
      </section>

      <CTASection
        dark
        title="Found a space you like?"
        subtitle="Tell us about your event and we'll match you to the right area."
      />
    </>
  );
}

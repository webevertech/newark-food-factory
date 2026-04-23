import { FeaturedEventCard, MiniEventCard } from "@/components/event-cards";
import { EventCarousel } from "@/components/event-carousel";
import type { PublicEvent } from "@/lib/events-store";

export function UpcomingEventsSection({
  id,
  events,
}: {
  id?: string;
  events: PublicEvent[];
}) {
  if (events.length === 0) return null;

  const [featured, ...rest] = events;

  return (
    <section
      id={id}
      className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What&apos;s on the Calendar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {events.length} upcoming public event
            {events.length === 1 ? "" : "s"} at NFF
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Chef tastings, pop-ups, mixers, and community gatherings — here&apos;s
            what&apos;s happening inside Newark&apos;s most unique food venue.
          </p>
        </div>

        {featured && <FeaturedEventCard event={featured} />}

        {rest.length > 0 && (
          <div className="mt-16">
            {rest.length <= 3 ? (
              <>
                <div className="flex items-baseline justify-between gap-4 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                      Also Coming Up
                    </span>
                    <span className="h-px w-16 bg-primary/30" />
                  </div>
                  <span className="text-xs font-medium text-gray-400">
                    {rest.length} more event{rest.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((event) => (
                    <MiniEventCard key={event.id} event={event} />
                  ))}
                </div>
              </>
            ) : (
              <EventCarousel events={rest} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

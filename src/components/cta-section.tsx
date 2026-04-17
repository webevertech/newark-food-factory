import { Button } from "@/components/button";

export function CTASection({
  title = "Ready to Get Started?",
  subtitle,
  dark = false,
  id,
}: {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  id?: string;
}) {
  const bg = dark
    ? "bg-gradient-to-br from-primary to-primary-dark text-white"
    : "bg-gray-50 text-gray-900";
  const subColor = dark ? "text-white/90" : "text-gray-600";

  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${bg}`}>
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${subColor}`}>
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant={dark ? "white" : "primary"}>
            Apply Now
          </Button>
          <Button
            href="/kitchen-membership"
            variant={dark ? "outline-light" : "outline"}
          >
            Join Membership
          </Button>
          <Button
            href="/contact#tour"
            variant={dark ? "outline-light" : "outline"}
          >
            Book a Tour
          </Button>
        </div>
      </div>
    </section>
  );
}

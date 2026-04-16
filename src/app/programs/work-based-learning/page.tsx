import {
  GraduationCap,
  UtensilsCrossed,
  Truck,
  CalendarDays,
  Award,
  Clock,
  Users,
  ChefHat,
  BookOpen,
  Target,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work-Based Learning",
  description:
    "Gain real-world culinary and business experience while earning in a real production kitchen environment in Newark, NJ.",
  path: "/programs/work-based-learning",
  keywords: ["culinary training Newark NJ", "work-based learning food", "paid culinary apprenticeship", "kitchen job training Newark"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Programs", path: "/start-a-food-business" },
  { name: "Work-Based Learning", path: "/programs/work-based-learning" },
]);

export default function WorkBasedLearningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero
        icon={GraduationCap}
        title="Work-Based Learning"
        subtitle="Gain real-world culinary and business experience while earning in a real production environment."
        image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=90"
        imageAlt="Students learning in a professional kitchen"
      />

      {/* THE PROGRAM — split: content left + image right */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                The Program
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Learn by Doing in a Real Production Kitchen
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Students don&apos;t just learn in a classroom. They work hands-on
                in our commercial kitchen, contributing to real food operations
                that serve the community every day.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: UtensilsCrossed, text: "Daily meals, pickup and delivery" },
                  { icon: CalendarDays, text: "Event catering preparation" },
                  { icon: Truck, text: "Food truck operations" },
                  { icon: BookOpen, text: "Business fundamentals training" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-gray-700">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-10">
                Apply Now
              </Button>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[28rem]">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90"
                alt="Students working in commercial kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-primary rounded-xl px-5 py-3 shadow-2xl">
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-xs text-white/80">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PRODUCTION ENVIRONMENT */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Real Work, Real Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Real Production Environment
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Students work on actual food operations that serve the Newark
              community every day — not simulations, not practice runs.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: UtensilsCrossed,
                title: "Daily Meals",
                desc: "Prepare breakfast, lunch, and dinner for pickup and delivery — real customers, real deadlines.",
              },
              {
                icon: CalendarDays,
                title: "Event Catering",
                desc: "Plan, prep, and execute catering for weddings, corporate events, and community gatherings.",
              },
              {
                icon: Truck,
                title: "Food Truck Operations",
                desc: "Learn the full food truck workflow — from commissary prep to on-site service.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 text-center hover:bg-white/[0.08] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white text-lg">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — numbered steps */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Your learning journey
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", icon: BookOpen, label: "Onboard", desc: "Orientation, food safety certification, kitchen basics" },
                { num: "02", icon: ChefHat, label: "Train", desc: "Hands-on cooking, prep, and production skills" },
                { num: "03", icon: Target, label: "Produce", desc: "Work real shifts including daily meals, events, and catering" },
                { num: "04", icon: Award, label: "Graduate", desc: "Earn certifications and launch your career" },
              ].map(({ num, icon: Icon, label, desc }) => (
                <div key={num} className="text-center relative">
                  <div className="mx-auto w-24 h-24 rounded-2xl bg-gray-900 flex flex-col items-center justify-center mb-5 shadow-lg">
                    <span className="text-[10px] font-bold text-primary-bright tracking-widest">
                      {num}
                    </span>
                    <Icon className="h-7 w-7 text-white mt-1" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{label}</h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-[200px] mx-auto">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GAIN — dark section with glass cards */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
                Your Growth
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What You&apos;ll Gain
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                More than just kitchen skills. You&apos;ll leave with real
                credentials, professional experience, and a network to support
                your career.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: "Culinary Skills", desc: "Professional kitchen training in a real production environment." },
              { icon: Award, title: "Certifications", desc: "Food safety, ServSafe, and industry-recognized credentials." },
              { icon: Clock, title: "Paid Experience", desc: "Earn while you learn with real, compensated work hours." },
              { icon: Users, title: "Mentorship", desc: "Work alongside experienced chefs and food entrepreneurs." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 hover:bg-white/[0.08] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — split: image left + checklist right */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[26rem]">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=90"
                alt="Diverse team of student chefs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Who It&apos;s For
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Is This Program Right for You?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our work-based learning program is designed for motivated
                individuals ready to build real skills in the food industry.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "High school or college students seeking hands-on experience",
                  "Career changers exploring the food industry",
                  "Aspiring chefs who want real production training",
                  "Community members looking for workforce development",
                  "Anyone passionate about food and entrepreneurship",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="h-10 w-10 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Start Your Journey
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Apply for our Work-Based Learning program today and take the first
            step toward a career in food.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">
              Apply Now
            </Button>
            <Button href="/about" variant="outline-light">
              Learn More
            </Button>
            <Button href="/meals-events#events" variant="outline-light">
              Book an Event
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

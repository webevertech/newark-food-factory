import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-gray-950 text-white" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-primary-light">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "white";
  className?: string;
  disabled?: boolean;
}) {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    "outline-light": "border-2 border-white text-white hover:bg-white hover:text-gray-900",
    white: "bg-white text-gray-900 hover:bg-gray-100",
  };
  const disabledStyles = "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed pointer-events-none";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${disabledStyles} ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

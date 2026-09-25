"use client";

import { ShieldCheck } from "lucide-react";
import { FormModalButton, type FormModalVariant } from "./form-modal-button";

export function EventInsuranceButton({
  label = "Insure Your Event",
  variant = "outline-light",
  className = "",
}: {
  label?: string;
  variant?: FormModalVariant;
  className?: string;
}) {
  return (
    <FormModalButton
      label={label}
      icon={<ShieldCheck className="h-4 w-4" />}
      variant={variant}
      className={className}
      form={{ kind: "survey", id: "BlFvhzqvdYOBQK7pfvvS", name: "Event Insurance Survey", height: 700 }}
      heading="Get Your Event Covered"
    />
  );
}

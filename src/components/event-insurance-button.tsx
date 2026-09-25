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
      form={{ id: "PKQZDmYzsCQsgxIWic68", name: "[NFF] - Insurance Form", height: 734 }}
      heading="Get Your Event Covered"
      description="Tell us about your event and we'll help you line up the liability coverage you need to host at Newark Food Factory."
    />
  );
}

"use client";

import { FormModalButton, type FormModalVariant } from "./form-modal-button";

export function EventInquiryButton({
  label = "Get Event Pricing",
  variant = "outline",
  className = "",
}: {
  label?: string;
  variant?: FormModalVariant;
  className?: string;
}) {
  return (
    <FormModalButton
      label={label}
      variant={variant}
      className={className}
      form={{ id: "GDCC6scNQSyzpKEpLr8g", name: "Event INQUIRY FORM", height: 1154 }}
      heading="Tell Us About Your Event"
      description="Share a few details and we'll get back to you with availability, pricing, and next steps."
    />
  );
}

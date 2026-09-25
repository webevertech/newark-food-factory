"use client";

import { useState, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type FormModalVariant = "primary" | "outline" | "outline-light" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors cursor-pointer";

const variants: Record<FormModalVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-gray-900",
  white: "bg-white text-gray-900 hover:bg-gray-100",
};

export type GhlForm = {
  id: string;
  name: string;
  /** Height reported by the GHL embed code (data-height). */
  height: number;
};

export function FormModalButton({
  label,
  icon,
  variant = "outline",
  className = "",
  form,
  heading,
  description,
}: {
  label: string;
  icon?: ReactNode;
  variant?: FormModalVariant;
  className?: string;
  form: GhlForm;
  heading: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const iframeId = `inline-${form.id}-modal`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {icon}
        {label}
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          style={{ zIndex: 2147483647 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={heading}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Close form"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-6 sm:p-8 pt-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {heading}
              </h2>
              <p className="text-gray-600 text-sm mb-6">{description}</p>
              <iframe
                src={`https://links.newarkfoodfactory.com/widget/form/${form.id}`}
                style={{
                  width: "100%",
                  minHeight: `${form.height + 26}px`,
                  border: "none",
                  borderRadius: "8px",
                }}
                id={iframeId}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={form.name}
                data-height={form.height}
                data-layout-iframe-id={iframeId}
                data-form-id={form.id}
                title={form.name}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-up" | "slide-left" | "slide-right";

interface FadeInProps {
  children: ReactNode;
  animation?: Animation;
  className?: string;
  delay?: number;
}

export function FadeIn({
  children,
  animation = "fade-up",
  className = "",
  delay = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-700 ease-out";
  const hidden: Record<Animation, string> = {
    "fade-up": "opacity-0 translate-y-8",
    "slide-left": "opacity-0 -translate-x-8",
    "slide-right": "opacity-0 translate-x-8",
  };

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? "opacity-100 translate-x-0 translate-y-0" : hidden[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  id?: string;
}

export function StaggerChildren({
  children,
  className = "",
  staggerMs = 100,
  id,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} id={id}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * staggerMs}ms` : "0ms" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

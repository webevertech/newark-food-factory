"use client";

import { useEffect } from "react";

// GHL's form_embed.js keeps utm_* params in sessionStorage under "UPS" and
// adds them to the page URL it hands each form for lead attribution. It only
// saves them on a page that embeds a form, so a visitor landing on
// /?utm_source=... who clicks through to a form would lose them. Save them on
// whichever page the visit starts.
const GHL_UTM_KEY = "UPS";

export function UtmPersist() {
  useEffect(() => {
    try {
      const current = new URLSearchParams(window.location.search);
      const saved = new URLSearchParams(sessionStorage.getItem(GHL_UTM_KEY) ?? "");
      let changed = false;
      for (const [key, value] of current) {
        if (key.startsWith("utm_") && saved.get(key) !== value) {
          saved.set(key, value);
          changed = true;
        }
      }
      if (changed) sessionStorage.setItem(GHL_UTM_KEY, `?${saved}`);
    } catch {
      // Storage blocked; forms still work, just without carried-over UTMs.
    }
  }, []);

  return null;
}

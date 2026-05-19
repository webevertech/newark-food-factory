"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "leadconnector-chat-widget";
const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "69f9eefb3cc757bd5a49b852";

// Defer the LeadConnector chat widget until the first user interaction.
// Avoids loading third-party JS and setting third-party cookies (__cf_bm)
// on initial page view — keeps Lighthouse Best Practices clean while
// preserving full chat functionality the moment a visitor engages.
export function ChatLauncher() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    if (document.getElementById(SCRIPT_ID)) {
      loadedRef.current = true;
      return;
    }

    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "pointerdown",
      "pointermove",
      "touchstart",
      "keydown",
    ];

    const cleanup = () => {
      events.forEach((evt) =>
        window.removeEventListener(evt, load as EventListener),
      );
    };

    const load = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.setAttribute("data-resources-url", RESOURCES_URL);
      script.setAttribute("data-widget-id", WIDGET_ID);
      document.body.appendChild(script);

      cleanup();
    };

    events.forEach((evt) =>
      window.addEventListener(evt, load as EventListener, {
        once: true,
        passive: true,
      }),
    );

    return cleanup;
  }, []);

  return null;
}

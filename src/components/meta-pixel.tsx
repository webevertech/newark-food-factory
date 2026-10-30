"use client";

import { useEffect } from "react";
import Script from "next/script";

const PIXEL_ID = "1114351664556740";
const GHL_ORIGIN = "https://links.newarkfoodfactory.com";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// fbevents.js tracks history changes itself, so client-side route
// navigations fire PageView without a manual pathname listener.
export function MetaPixel() {
  // GHL forms and surveys post ["set-sticky-contacts", "_ud", ...] to the
  // parent page once a submission saves. Multi-step surveys can post it after
  // every step, so each embed counts as one Lead at most.
  useEffect(() => {
    const tracked = new WeakSet<object>();
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== GHL_ORIGIN || !e.source) return;
      if (!Array.isArray(e.data) || e.data[0] !== "set-sticky-contacts" || e.data[1] !== "_ud") return;
      const iframe = Array.from(document.querySelectorAll("iframe")).find(
        (f) => f.contentWindow === e.source
      );
      const key = iframe ?? e.source;
      if (tracked.has(key)) return;
      tracked.add(key);
      window.fbq?.("track", "Lead", iframe?.title ? { content_name: iframe.title } : {});
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

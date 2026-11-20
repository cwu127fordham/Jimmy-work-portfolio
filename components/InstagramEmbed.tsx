"use client";
// Official Instagram embed. Instagram's script swaps the placeholder for the
// real post and sizes it correctly. We build the placeholder by hand (innerHTML)
// so React doesn't trip over Instagram changing it.
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

export default function InstagramEmbed({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const url = `https://www.instagram.com/p/${id}/`;
    el.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"
      style="background:#fff;border:0;border-radius:12px;margin:0;max-width:540px;min-width:280px;width:100%;">
      <a href="${url}" target="_blank" rel="noopener noreferrer" style="display:block;padding:24px;text-align:center;color:#4338ca;font:14px sans-serif;">View this post on Instagram</a>
    </blockquote>`;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, [id]);

  return <div ref={ref} className="min-h-[420px] overflow-hidden rounded-xl border border-line bg-white" />;
}

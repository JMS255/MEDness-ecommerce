"use client";

import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-brand-navy text-brand-cream text-xs py-2.5 px-4 text-center relative">
      <span className="block pr-10 text-center tracking-wide">
        🩺 New drop available — MD-MPH Half-Zip now in 6 colorways.{" "}
        <a href="/shop" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
          Shop now
        </a>
      </span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity text-base leading-none min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        ×
      </button>
    </div>
  );
}

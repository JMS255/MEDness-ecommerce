"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyOrderCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/order") return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom, 1.25rem))" }}
    >
      {/* Fade gradient so content beneath doesn't hard-cut */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-brand-cream/95 via-brand-cream/80 to-transparent -z-10" />
      <div className="px-4 pt-2">
        <Link
          href="/order"
          className="flex items-center justify-center w-full min-h-[52px] bg-brand-navy text-brand-cream font-semibold text-sm tracking-wide rounded-sm shadow-xl shadow-brand-navy/30 active:scale-[0.98] transition-transform duration-150"
        >
          Order Now — GCash Accepted
        </Link>
      </div>
    </div>
  );
}

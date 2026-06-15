"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  return (
    <header className="border-b border-brand-navy/15 bg-brand-cream sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/* Left — desktop nav links / mobile hamburger */}
          <div className="flex items-center flex-1">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200
                    after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:bg-brand-navy
                    after:transition-all after:duration-300
                    ${pathname === link.href
                      ? "text-brand-navy after:w-full"
                      : "text-brand-navy/55 hover:text-brand-navy after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden flex flex-col items-center justify-center gap-[6px] p-2 min-h-[44px] min-w-[44px]"
            >
              <span className={`block h-[2px] w-6 bg-brand-navy rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
              <span className={`block h-[2px] w-6 bg-brand-navy rounded-full transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[2px] w-6 bg-brand-navy rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </button>
          </div>

          {/* Center — logo, absolutely centered so it's always truly in the middle */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" aria-label="MEDness Co. home">
              <Logo height={38} />
            </Link>
          </div>

          {/* Right — Order Now + cart icon (desktop) / cart icon only (mobile) */}
          <div className="flex items-center justify-end gap-2 flex-1">
            <Link
              href="/order"
              className="hidden md:flex items-center px-5 py-2 bg-brand-navy text-brand-cream text-sm font-medium rounded-sm hover:opacity-90 transition-opacity min-h-[40px]"
            >
              Order Now
            </Link>

            {/* Bag / cart icon */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ""}`}
              className="relative p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-brand-navy hover:opacity-70 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-brand-navy text-brand-cream text-[10px] font-bold flex items-center justify-center leading-none">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — slides in/out */}
      <nav
        aria-hidden={!isOpen}
        className={`md:hidden bg-brand-cream overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-80 opacity-100 border-t border-brand-navy/15"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`py-3 text-sm font-medium border-b border-brand-navy/10 min-h-[44px] flex items-center transition-colors ${pathname === "/" ? "text-brand-navy font-semibold" : "text-brand-navy/65 hover:text-brand-navy"}`}
          >
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className={`py-3 text-sm font-medium border-b border-brand-navy/10 min-h-[44px] flex items-center transition-colors ${
                pathname === link.href
                  ? "text-brand-navy font-semibold"
                  : "text-brand-navy/65 hover:text-brand-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="mt-3 px-4 py-3 bg-brand-navy text-brand-cream text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity text-center min-h-[44px] flex items-center justify-center tracking-wide"
          >
            Order Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

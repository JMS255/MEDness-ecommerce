import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/20 bg-brand-navy text-brand-cream mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-klore text-xl mb-2">MEDness Co.</p>
            <p className="text-sm text-brand-cream/70 leading-relaxed">
              Clothing for Filipino medical and allied health students. Represent
              your calling.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-cream/60">
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
                { href: "/order", label: "Order" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-cream/60">
              Contact
            </p>
            <p className="text-sm text-brand-cream/80">
              Message us on Facebook
            </p>
            <p className="text-sm text-brand-cream/60 mt-1">
              For orders, inquiries, and collabs.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-cream/20 text-center">
          <p className="text-xs text-brand-cream/40">
            © {new Date().getFullYear()} MEDness Co. Est. 2026 · Zamboanga City,
            Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

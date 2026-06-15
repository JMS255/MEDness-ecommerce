import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/FadeIn";
import { Testimonials } from "@/components/Testimonials";
import { HowToOrder } from "@/components/HowToOrder";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      {/* ── HERO — split layout desktop, stacked mobile ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-0 md:min-h-[88vh]">
        {/* Left: copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/50 mb-6">
              <span className="w-6 h-px bg-brand-navy/30" />
              Est. 2026 · Zamboanga City, PH
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl leading-[1.02] text-brand-navy">
              Wear Your
              <br />
              <span className="italic">Calling.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-5 text-base sm:text-lg text-brand-navy/60 max-w-sm leading-relaxed">
              Clothing made for Filipino medical and allied health students who
              are proud of what they&apos;re becoming.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-brand-navy text-brand-cream font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 min-h-[52px] flex items-center justify-center"
              >
                Shop the Drop
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-brand-navy/55 hover:text-brand-navy underline underline-offset-4 transition-colors duration-200"
              >
                Our Story →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-navy/40 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                GCash accepted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
                Ships Philippines-wide
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
                Bulk orders welcome
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right: visual card — swap for product image once available */}
        <FadeIn delay={150} direction="left" className="flex-1 w-full md:w-auto">
          <div className="relative w-full max-w-md mx-auto pb-6 md:pb-0">
            <div
              className="aspect-[4/3] md:aspect-[3/4] rounded-sm bg-brand-navy flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden relative"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="w-[120%] aspect-square rounded-full border-[40px] border-brand-cream" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="w-[80%] aspect-square rounded-full border-[30px] border-brand-cream" />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cream/40 mb-6">
                Drop 001 — 2026
              </p>
              <p className="font-klore text-4xl sm:text-5xl md:text-6xl text-brand-cream text-center leading-tight">
                MED
                <br />
                ness
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-cream/40 mt-6">
                Co.
              </p>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] text-brand-cream/40 uppercase tracking-widest">
                  For Filipino med students
                </span>
                <span className="text-[10px] text-brand-cream/40">
                  PH 🇵🇭
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 md:-bottom-4 md:-right-4 bg-brand-cream border border-brand-navy/15 rounded-sm px-4 py-3 shadow-lg shadow-brand-navy/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/50 mb-0.5">
                Now available
              </p>
              <p className="text-sm font-heading font-semibold text-brand-navy">
                3 designs · 8 colorways
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-2">
                The Collection
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
                Current Drops
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-medium text-brand-navy/50 hover:text-brand-navy underline underline-offset-4 transition-colors duration-200"
            >
              View all →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── HOW TO ORDER ── */}
      <HowToOrder />

      {/* ── BRAND BANNER ── */}
      <section className="bg-brand-navy text-brand-cream py-20 px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Made for those who wear their identity with pride.
            </h2>
            <p className="text-brand-cream/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re in nursing, medicine, radtech, medtech, or any
              allied health program — this brand was built for you. Your course
              is your calling.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/order"
                className="px-8 py-4 bg-brand-cream text-brand-navy font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 min-h-[44px] flex items-center justify-center"
              >
                Place an Order
              </Link>
              <Link
                href="/shop"
                className="px-8 py-4 border border-brand-cream/30 text-brand-cream font-medium text-sm tracking-wide rounded-sm hover:border-brand-cream/70 transition-colors duration-200 min-h-[44px] flex items-center justify-center"
              >
                View Collection
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

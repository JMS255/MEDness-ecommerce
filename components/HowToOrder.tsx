import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Browse & Pick",
    description:
      "Choose your design, color, and size from the collection. We have t-shirts and half-zips for every allied health program.",
  },
  {
    number: "02",
    title: "Fill the Form",
    description:
      "Submit your order details in under 2 minutes. We'll confirm your order via Messenger within 24 hours.",
  },
  {
    number: "03",
    title: "Pay & Receive",
    description:
      "Send payment via GCash. Once confirmed, we process and ship directly to you anywhere in the Philippines.",
  },
];

export function HowToOrder() {
  return (
    <section className="border-t border-brand-navy/10 bg-brand-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-3">
              Simple Process
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
              How to order.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-brand-navy/15 z-0" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 120}>
              <div className="relative z-10 flex flex-col items-center text-center px-6 pb-10 md:pb-0">
                <div className="w-16 h-16 rounded-full border-2 border-brand-navy bg-brand-cream flex items-center justify-center mb-5">
                  <span className="font-heading font-bold text-brand-navy text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/order"
              className="inline-flex items-center px-8 py-4 bg-brand-navy text-brand-cream font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            >
              Place an Order Now
            </Link>
            <p className="mt-3 text-xs text-brand-navy/40">
              GCash · Ships anywhere in the Philippines
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

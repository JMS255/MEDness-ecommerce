import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "About — MEDness Co.",
  description:
    "MEDness Co. is a niche clothing brand built for Filipino medical and allied health students.",
};

const programs = [
  "Medicine (MD)",
  "Nursing (BSN)",
  "Radiologic Technology (Radtech)",
  "Medical Technology (MedTech)",
  "Pharmacy (BS Pharmacy)",
  "Physical Therapy (PT)",
  "Occupational Therapy (OT)",
  "Dentistry (DMD)",
  "Midwifery",
  "And every allied health program in between.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FadeIn delay={0}>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-4">
            Our Story
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-navy leading-tight">
            We made this for you.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 text-brand-navy/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            MEDness Co. was built in Zamboanga City for the Filipino students
            grinding through the hardest programs in the country — and proud of
            every bit of it.
          </p>
        </FadeIn>
      </section>

      <div className="w-24 h-px bg-brand-navy/20 mx-auto" />

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {[
            "Medical and allied health students in the Philippines carry something most people don't understand — the weight of a calling. Years of studying, sacrificing, and showing up, all for the chance to serve others.",
            "We started MEDness Co. because there wasn't a brand that spoke directly to that identity. Not a generic school merch store. Not a random clothing brand that slapped a stethoscope on a shirt. Something niche. Something that makes you feel like it was made specifically for you.",
            "Because it was. Every design, every drop — made for the med students, nurses, radtechs, and allied health warriors of this country.",
          ].map((paragraph, i) => (
            <FadeIn key={i} delay={i * 120}>
              <p className="text-brand-navy/75 text-base leading-relaxed">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-brand-navy text-brand-cream py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-cream/50 mb-4 text-center">
              Built For
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-10">
              Your program. Your identity.
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {programs.map((program, i) => (
              <FadeIn key={program} delay={i * 60}>
                <li className="flex items-center gap-3 text-sm text-brand-cream/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cream/40 flex-shrink-0" />
                  {program}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
            Ready to wear your calling?
          </h2>
          <p className="text-brand-navy/60 text-sm mb-8">
            Browse the collection or place an order directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-brand-navy text-brand-cream font-medium text-sm rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 min-h-[44px] flex items-center justify-center"
            >
              Shop Now
            </Link>
            <Link
              href="/order"
              className="px-8 py-4 border border-brand-navy/30 text-brand-navy font-medium text-sm rounded-sm hover:border-brand-navy transition-colors duration-200 min-h-[44px] flex items-center justify-center"
            >
              Place an Order
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

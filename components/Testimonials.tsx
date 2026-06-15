import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "Got compliments the moment I walked into the ward wearing the Medicina Core. My residents were asking where I got it. Best purchase of my med life.",
    name: "Kyla R.",
    course: "MD-2, Zamboanga",
    initials: "KR",
  },
  {
    quote:
      "Finally a brand that actually gets what it feels like to be a nursing student. The Doktor ng Bayan tee hits different when you're actually becoming one.",
    name: "Janz M.",
    course: "BSN-3, Basilan",
    initials: "JM",
  },
  {
    quote:
      "Ordered 12 pieces for our batch org and the quality exceeded expectations. Everyone's obsessed. We're definitely ordering the half-zip next.",
    name: "Gio T.",
    course: "Radtech Batch Rep",
    initials: "GT",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-3">
            What Students Say
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
            From the community.
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 100}>
            <div className="flex flex-col justify-between h-full border border-brand-navy/12 rounded-sm p-6 hover:border-brand-navy/30 hover:-translate-y-0.5 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#435487"
                    className="opacity-80"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-base text-brand-navy/75 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-brand-navy/10">
                <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-cream">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-navy/50">{t.course}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

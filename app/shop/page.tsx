import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/FadeIn";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop — MEDness Co.",
  description: "Browse the full MEDness Co. collection for med and allied health students.",
};

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <FadeIn>
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-3">
            All Products
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-brand-navy">
            The Collection
          </h1>
          <p className="mt-4 text-brand-navy/65 text-base sm:text-lg max-w-xl leading-relaxed">
            Limited drops. Course-specific designs. Each piece made to represent
            your program identity.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <FadeIn key={product.id} delay={i * 100}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mt-16 p-8 border border-brand-navy/15 rounded-sm text-center">
          <p className="font-heading font-semibold text-xl text-brand-navy mb-2">
            Want a custom design for your batch?
          </p>
          <p className="text-sm text-brand-navy/60 mb-6">
            We do batch orders and custom prints for organizations, departments,
            and medical schools.
          </p>
          <a
            href="/order"
            className="inline-flex items-center px-6 py-3 bg-brand-navy text-brand-cream text-sm font-medium rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
          >
            Inquire About Bulk Orders
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

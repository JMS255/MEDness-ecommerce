import type { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/AddToCartButton";

type Props = {
  product: Product;
};

const badgeStyles: Record<string, string> = {
  "Limited Drop": "bg-brand-navy text-brand-cream",
  "Selling Fast": "bg-amber-600 text-white",
  "Partnership": "bg-brand-navy/70 text-brand-cream",
  "New": "bg-emerald-700 text-white",
};

export function ProductCard({ product }: Props) {
  return (
    <div className="group flex flex-col border border-brand-navy/15 rounded-sm overflow-hidden hover:border-brand-navy/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/10 transition-all duration-300 h-full">
      {/* Image area — 4:5 portrait */}
      <div
        className="aspect-[4/5] flex flex-col justify-between p-5 overflow-hidden relative"
        style={{ backgroundColor: product.imagePlaceholderBg }}
      >
        {product.badge && (
          <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 mt-auto">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">
            {product.type === "half-zip" ? "Half-Zip" : "T-Shirt"}
          </p>
          <span className="font-heading font-semibold text-xl text-white/90 leading-tight">
            {product.name}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3 bg-brand-cream">
        {/* Stars */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#435487" className="opacity-80">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-brand-navy/40 font-medium">5.0</span>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-lg leading-tight text-brand-navy">
            {product.name}
          </h3>
          <p className="text-xs text-brand-navy/50 mt-0.5 italic">{product.tagline}</p>
        </div>

        <p className="text-sm text-brand-navy/65 leading-relaxed flex-1 hidden sm:block">
          {product.description}
        </p>

        {/* Color swatches */}
        <div className="flex items-center gap-2 flex-wrap">
          {product.colors.map((color) => (
            <span
              key={color.name}
              title={color.name}
              className="w-4 h-4 rounded-full border border-brand-navy/25 flex-shrink-0"
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <span className="text-xs text-brand-navy/40 ml-1">
            {product.colors.length} color{product.colors.length > 1 ? "s" : ""}
          </span>
        </div>

        {product.isLowStock && (
          <p className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse" />
            Low stock remaining
          </p>
        )}

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

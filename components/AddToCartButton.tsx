"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      productId: product.id,
      productName: product.name,
      color: product.colors[0].name,
      size: product.sizes[2] ?? product.sizes[0], // default to M or first available
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`mt-1 px-4 py-3 text-sm font-semibold text-center rounded-sm active:scale-[0.98] transition-all duration-200 min-h-[52px] flex items-center justify-center tracking-wide w-full ${
        added
          ? "bg-emerald-600 text-white"
          : "bg-brand-navy text-brand-cream hover:bg-brand-navy/85"
      }`}
    >
      {added ? (
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Added to Cart
        </span>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}

"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/config";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();

  const totalQty = items.reduce((s, i) => s + i.quantity, 0);

  const whatsappMessage = encodeURIComponent(
    "Hi MEDness Co.! I'd like to order:\n\n" +
    (items.length > 0
      ? items.map((item, i) => `${i + 1}. ${item.productName} — ${item.color}, ${item.size}, qty: ${item.quantity}`).join("\n")
      : "") +
    "\n\nName: \nContact: "
  );

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-brand-navy/25 backdrop-blur-[2px] z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-brand-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-navy/15">
          <div className="flex items-center gap-2">
            <h2 className="font-heading font-semibold text-lg text-brand-navy">Cart</h2>
            {totalQty > 0 && (
              <span className="text-xs text-brand-navy/45">({totalQty} {totalQty === 1 ? "item" : "items"})</span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-navy/8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-14 h-14 rounded-full bg-brand-navy/8 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-brand-navy/35">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-brand-navy/45 text-sm mb-4">Your cart is empty.</p>
              <button
                type="button"
                onClick={closeCart}
                className="text-sm text-brand-navy underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Browse the collection
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                const colorHex = product?.colors.find((c) => c.name === item.color)?.hex ?? "#435487";
                return (
                  <div key={item.id} className="flex gap-3 pb-4 border-b border-brand-navy/10 last:border-0">
                    <div
                      className="w-14 h-14 rounded-sm flex-shrink-0 border border-brand-navy/15"
                      style={{ backgroundColor: colorHex }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-semibold text-sm text-brand-navy leading-tight">{item.productName}</p>
                      <p className="text-xs text-brand-navy/45 mt-0.5">{item.color} · {item.size}</p>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy text-sm hover:bg-brand-navy/8 transition-colors"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium text-brand-navy w-4 text-center tabular-nums">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy text-sm hover:bg-brand-navy/8 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-brand-navy/30 hover:text-brand-navy/60 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-brand-navy/15 space-y-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full min-h-[52px] bg-[#25D366] text-white font-semibold text-sm rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>
            <Link
              href="/order"
              onClick={closeCart}
              className="flex items-center justify-center w-full min-h-[44px] border border-brand-navy/25 text-brand-navy font-medium text-sm rounded-sm hover:border-brand-navy/55 transition-colors"
            >
              Fill out the Order Form
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-xs text-brand-navy/30 hover:text-brand-navy/55 transition-colors py-1"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

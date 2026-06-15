"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/lib/products";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { WHATSAPP_NUMBER, GCASH_NUMBER, ORDER_EMAIL } from "@/lib/config";

type FormState = {
  name: string;
  course: string;
  product: string;
  color: string;
  size: string;
  quantity: string;
  contact: string;
  notes: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  course: "",
  product: "",
  color: "",
  size: "",
  quantity: "1",
  contact: "",
  notes: "",
};

const COURSES = [
  "Medicine (MD)",
  "Nursing (BSN)",
  "Radiologic Technology",
  "Medical Technology",
  "Pharmacy",
  "Physical Therapy",
  "Occupational Therapy",
  "Dentistry (DMD)",
  "Midwifery",
  "Other Allied Health",
];

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi MEDness Co.! I'd like to place an order 👋\n\nProduct: \nColor: \nSize: \nQuantity: \nName: \nCourse: \nContact: "
  );
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full min-h-[52px] bg-[#25D366] text-white font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md shadow-green-900/15"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Order via WhatsApp
    </a>
  );
}

function OrderForm() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") ?? "";

  const [form, setForm] = useState<FormState>({
    ...EMPTY_FORM,
    product: preselectedProduct,
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = products.find((p) => p.id === form.product);

  useEffect(() => {
    setForm((prev) => ({ ...prev, color: "" }));
  }, [form.product]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`MEDness Co. Order — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCourse: ${form.course}\nProduct: ${selectedProduct?.name ?? form.product}\nColor: ${form.color}\nSize: ${form.size}\nQuantity: ${form.quantity}\nContact / Messenger: ${form.contact}\nNotes: ${form.notes || "None"}`
    );

    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-12 px-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-emerald-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-2xl text-brand-navy mb-3">
          Order sent!
        </h2>
        <p className="text-brand-navy/65 text-base leading-relaxed mb-8">
          Your email client opened with your order details. Hit send — we&apos;ll
          confirm and give you payment instructions within 2 hours.
        </p>

        <div className="p-5 border border-brand-navy/15 rounded-sm text-left space-y-3 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-3">
            Payment Options
          </p>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-brand-navy">GCash (Recommended)</p>
            <p className="text-sm text-brand-navy/75">
              Number: <span className="font-semibold text-brand-navy">{GCASH_NUMBER}</span>
            </p>
            <p className="text-sm text-brand-navy/75">
              Account Name: <span className="font-semibold text-brand-navy">MEDness Co.</span>
            </p>
          </div>
          <div className="border-t border-brand-navy/10 pt-3">
            <p className="text-sm font-semibold text-brand-navy">Cash on Delivery</p>
            <p className="text-xs text-brand-navy/55 mt-1">Available for Zamboanga City area. Additional delivery fee applies. Confirm via Messenger.</p>
          </div>
          <p className="text-xs text-brand-navy/45 pt-1">
            Send screenshot of payment to our Messenger. We confirm within 2 hours.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm text-brand-navy/55 underline underline-offset-4 hover:text-brand-navy transition-colors"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* WhatsApp quick-order */}
      <WhatsAppButton />

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-brand-navy/15" />
        <span className="text-xs text-brand-navy/40 font-medium">or fill out the form</span>
        <div className="flex-1 h-px bg-brand-navy/15" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Juan dela Cruz"
              value={form.name}
              onChange={handleChange}
              className="min-h-[48px] border-brand-navy/20 focus-visible:ring-brand-navy"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course / Program *</Label>
            <select
              id="course"
              name="course"
              required
              value={form.course}
              onChange={handleChange}
              className="w-full min-h-[48px] px-3 py-2 text-sm border border-brand-navy/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-navy"
            >
              <option value="">Select your program</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="product">Product *</Label>
          <select
            id="product"
            name="product"
            required
            value={form.product}
            onChange={handleChange}
            className="w-full min-h-[48px] px-3 py-2 text-sm border border-brand-navy/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-navy"
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        {selectedProduct && (
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <Label htmlFor="color">Color *</Label>
              <select
                id="color"
                name="color"
                required
                value={form.color}
                onChange={handleChange}
                className="w-full min-h-[48px] px-3 py-2 text-sm border border-brand-navy/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                <option value="">Color</option>
                {selectedProduct.colors.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size *</Label>
              <select
                id="size"
                name="size"
                required
                value={form.size}
                onChange={handleChange}
                className="w-full min-h-[48px] px-3 py-2 text-sm border border-brand-navy/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                <option value="">Size</option>
                {selectedProduct.sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Qty *</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                inputMode="numeric"
                min={1}
                max={20}
                required
                value={form.quantity}
                onChange={handleChange}
                className="min-h-[48px] border-brand-navy/20 focus-visible:ring-brand-navy"
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="contact">Facebook / Messenger or number *</Label>
          <Input
            id="contact"
            name="contact"
            required
            inputMode="tel"
            placeholder="facebook.com/yourname or 09XXXXXXXXX"
            value={form.contact}
            onChange={handleChange}
            className="min-h-[48px] border-brand-navy/20 focus-visible:ring-brand-navy"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notes <span className="text-brand-navy/40 font-normal">(optional)</span></Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Batch order details, special requests, or questions..."
            value={form.notes}
            onChange={handleChange}
            className="border-brand-navy/20 focus-visible:ring-brand-navy resize-none"
            rows={2}
          />
        </div>

        <Button
          type="submit"
          className="w-full min-h-[52px] bg-brand-navy text-brand-cream hover:opacity-90 transition-opacity rounded-sm font-semibold tracking-wide"
        >
          Submit Order via Email
        </Button>

        <p className="text-xs text-brand-navy/40 text-center">
          Opens your email with order pre-filled. We reply within 2 hours with payment steps.
        </p>
      </form>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-lg mx-auto mb-8 sm:mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-3">
          Place an Order
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
          Get your piece.
        </h1>
        <p className="text-brand-navy/60 text-base leading-relaxed">
          Choose WhatsApp for the fastest reply, or fill out the form below.
        </p>
      </div>

      {/* Trust signals */}
      <div className="max-w-lg mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-2 text-sm text-brand-navy/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            100+ happy students
          </span>
          <span className="flex items-center gap-2 text-sm text-brand-navy/60">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
            We reply within 2 hours
          </span>
          <span className="flex items-center gap-2 text-sm text-brand-navy/60">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40" />
            Ships Philippines-wide
          </span>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-8 text-brand-navy/40 text-sm">Loading...</div>}>
        <OrderForm />
      </Suspense>
    </div>
  );
}

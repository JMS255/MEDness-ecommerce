"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type CartItem = {
  id: string;
  productId: string;
  productName: string;
  color: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  addItem: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("medness-cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("medness-cart", JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  function addItem(newItem: Omit<CartItem, "id" | "quantity">) {
    const id = `${newItem.productId}-${newItem.color}-${newItem.size}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, id, quantity: 1 }];
    });
    setIsOpen(true);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity < 1) return;
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity } : i));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{
      items, isOpen, itemCount,
      addItem, removeItem, updateQuantity, clearCart,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

import { createContext, ReactNode, useContext, useState } from "react";
import { ImageSourcePropType } from "react-native";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  image?: ImageSourcePropType;
};

type CartContextType = {
  items: CartItem[];
  count: number; // total number of items, shown on the Cart tab badge
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  changeQty: (id: string, change: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

/** Keeps the cart in one place so every screen can add to it. */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "qty">, qty = 1) => {
    const existing = items.find((row) => row.id === item.id);
    if (existing) {
      // Already in the cart, so just increase the quantity
      setItems(
        items.map((row) =>
          row.id === item.id ? { ...row, qty: row.qty + qty } : row,
        ),
      );
    } else {
      setItems([...items, { ...item, qty }]);
    }
  };

  // change is +1 or -1. The quantity never goes below 1.
  const changeQty = (id: string, change: number) => {
    setItems(
      items.map((row) =>
        row.id === id ? { ...row, qty: Math.max(1, row.qty + change) } : row,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((row) => row.id !== id));
  };

  const clearCart = () => setItems([]);

  const count = items.reduce((sum, row) => sum + row.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, count, addItem, changeQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}

import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cardAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
}
interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]); // Move para cá

  function addItemCart(newItem: ProductsProps) {
    // Adiciona parâmetro
    setCart((prev) => {
      const exists = prev.some((i) => i.id === newItem.id); // retorna true ou false

      if (exists) {
        return prev.map((item) => {
          const newAmount = item.amount + 1;
          return {
            ...item,
            amount: newAmount,
            total: newAmount * item.price,
          };
        });
      }
      return [...prev, { ...newItem, amount: 1, total: newItem.price }];
    });
  }

  return (
    <CartContext.Provider
      value={{ cart, cardAmount: cart.length, addItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

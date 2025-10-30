import { createContext, useState, type ReactNode } from "react";

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartContextData {
  cart: CartProps[];
  cardAmount: number;
}
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart] = useState<CartProps[]>([]);

  return (
    <CartContext.Provider value={{ cart, cardAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

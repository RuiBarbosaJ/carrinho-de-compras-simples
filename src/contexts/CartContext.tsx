import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cardAmount: number;
  addItemCart: (newItem: ProductsProps) => void;
  removeItemCart: (itemRemoveCart: CartProps) => void;
  adicionarItemCart: (itemAddCart: CartProps) => void;
}
export interface CartProps {
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

  function removeItemCart(itemRemoveCart: CartProps) {
    setCart((prev) => {
      const exists = prev.some((i) => i.id === itemRemoveCart.id);

      if (exists) {
        // Se quantidade <= 1, remove o item
        if (itemRemoveCart.amount <= 1) {
          return prev.filter((i) => i.id !== itemRemoveCart.id);
        }

        // Se quantidade > 1, diminui a quantidade
        return prev.map((item) => {
          // Se não é o item que queremos atualizar, retorna sem modificar
          if (item.id !== itemRemoveCart.id) {
            return item;
          }

          // Se é o item, atualiza quantidade e total
          const newAmount = item.amount - 1;
          return {
            ...itemRemoveCart,
            amount: newAmount,
            total: newAmount * itemRemoveCart.price,
          };
        });
      }
      // Se o item não existe, retorna o array sem modificações
      return prev;
    });
  }

  function adicionarItemCart(itemAddCart: CartProps) {
    setCart((prev) => {
      // Verifica se o item existe
      const exists = prev.some((i) => i.id === itemAddCart.id);

      if (exists) {
        // Atualiza apenas o item específico
        return prev.map((item) => {
          if (item.id !== itemAddCart.id) {
            return item;
          }

          const newAmount = item.amount + 1;
          return {
            ...item,
            amount: newAmount,
            total: newAmount * item.price,
          };
        });
      }

      // Se não existe, retorna estado anterior
      return prev;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cardAmount: cart.length,
        addItemCart,
        removeItemCart,
        adicionarItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

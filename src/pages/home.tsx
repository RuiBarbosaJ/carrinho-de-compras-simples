import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCartItem(product: ProductsProps) {
    toast.success("Produto adicionado no carrinho.", {
      style: {
        borderRadius: 10,
        backgroundColor: "black",
        color: "white",
      },
    });
    addItemCart(product);
  }

  return (
    <div className="mt-7 hover:">
      <main className=" text-white w-full max-w-7xl h-screen mx-auto px-4">
        <h1 className="w-full text-center font-light text-2xl mb-4">
          Produtos em destaque
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <img
                className="w-full rounded-lg max-h-70 mb-2 transform transition duration-300 hover:scale-110"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
              <div className="flex gap-3 items-center">
                <strong className="text-blue-500 font-mono">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className=" p-1 rounded cursor-pointer"
                  onClick={() => handleAddCartItem(product)}
                >
                  <BsCartPlus size={20} color="white" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from "react";

import { api } from "../services/api";

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  return (
    <div className="mt-7">
      <main className=" text-white w-full max-w-7xl h-screen mx-auto px-4">
        <h1 className="w-full text-center font-light text-2xl mb-4">
          Produtos em destaque
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <img
                className="w-full rounded-lg max-h-70 mb-2"
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
                <button className=" p-1 rounded cursor-pointer">
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

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { api } from "../services/api";
import { BsCartPlus } from "react-icons/bs";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function ProductDetail() {
  const { id } = useParams();
  const idProduct = Number(id);

  const { addItemCart } = useContext(CartContext);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadingProductParams(idProduct: number) {
      try {
        const response = await api.get(`/products/${idProduct}`);
        setProduct(response.data);
      } catch {
        console.log("Produto não encontrado");
        navigate("/");
      }
    }

    loadingProductParams(idProduct);
  }, [idProduct, navigate]);

  function handleAddCartItem(product: ProductProps | null) {
    if (!product) return;
    addItemCart(product);
    navigate("/cart");
  }

  if (!product) {
    return <p className="text-white text-center py-10">Carregando...</p>;
  }

  return (
    <div className="text-white w-full pt-8 pb-10 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row m-auto items-center justify-center w-full lg:max-w-5xl gap-6 lg:gap-8">
        {/* Imagem do produto */}
        <div className="w-full sm:w-80 lg:w-1/2 flex-shrink-0">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={product.cover}
            alt={product.title}
          />
        </div>

        {/* Informações do produto */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6">
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <strong className="text-blue-500 font-mono text-2xl sm:text-3xl">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>

          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-lg cursor-pointer font-semibold text-white"
            onClick={() => handleAddCartItem(product)}
          >
            <BsCartPlus size={20} />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

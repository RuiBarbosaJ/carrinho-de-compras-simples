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

  //Fazer uma requisição e buscar o id dele
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
  }, [idProduct]);

  function handleAddCartItem(product: ProductProps | null) {
    if (!product) return;
    addItemCart(product);
    navigate("/cart");
  }

  if (!product) {
    return <p className="text-white text-center">Carregando...</p>;
  }

  return (
    <>
      <div className="text-white ">
        <div className="">
          <div>
            <img src={product.cover} alt={product.title} />
          </div>
          <div>
            <h1 className="font-extrabold">{product?.title}</h1>
            <p>{product.description}</p>
            <button
              className=" p-1 rounded cursor-pointer"
              onClick={() => handleAddCartItem(product)}
            >
              <BsCartPlus size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

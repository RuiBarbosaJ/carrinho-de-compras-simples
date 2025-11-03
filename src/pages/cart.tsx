import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cardAmount, cart } = useContext(CartContext);

  return (
    <div className="text-white w-full max-w-3xl mx-auto min-h-[400px] flex flex-col">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
      {cardAmount > 0 ? (
        <>
          {cart.map((item) => (
            <section
              key={item.id}
              className="flex items-center justify-between border-b-2 border-blue-300"
            >
              <img src={item.cover} alt="logo do produto" className="w-28" />
              <strong>Preço: R$ {item.price.toFixed(2)}</strong>
              <div className="flex justify-center items-center gap-3 text-black">
                <button className="bg-blue-50 px-2 rounded font-medium flex items-center justify-center cursor-pointer">
                  -
                </button>
                <span className="text-white">{item.amount}</span>
                <button className="bg-blue-50 px-2 rounded font-medium flex items-center justify-center cursor-pointer">
                  +
                </button>
              </div>
              <strong className="float-right">
                Subtotal: R$ {item.total.toFixed(2)}
              </strong>
            </section>
          ))}
          <p className="font-bold mt-4">Total: R$ {}</p>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-center font-mono text-xl">
            Seu carrinho está vazio!
          </h1>
        </div>
      )}
    </div>
  );
}

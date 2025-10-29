export function Cart() {
  return (
    <div className=" text-white w-full max-w-3xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-blue-300">
        <img src="" alt="logo do produto" className="w-28" />
        <strong>Preço: R$1.000</strong>
        <div className="flex justify-center items-center gap-3 text-black">
          <button className="bg-blue-50 px-2 rounded font-medium flex sitems-center justify-center cursor-pointer">
            -
          </button>
          <span className="text-white">2</span>
          <button className="bg-blue-50 px-2 rounded font-medium flex sitems-center justify-center cursor-pointer">
            +
          </button>
        </div>

        <strong className="float-right">Subtotal: R$2.450</strong>
      </section>

      <p className="font-bold mt-4">Total: R$10.000</p>
    </div>
  );
}

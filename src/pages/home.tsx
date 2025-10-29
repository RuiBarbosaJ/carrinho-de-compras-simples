import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div className="mt-7">
      <main className=" text-white w-full max-w-7xl h-screen mx-auto px-4">
        <h1 className="w-full text-center font-light text-2xl mb-4">
          Produtos em destaque
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full ">
            <img
              className="w-full rounded-lg max-h-70 mb-2"
              src="data:image/webp;base64,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"
              alt="logo do produto"
            />
            <p className="font-medium mt-1 mb-2">Airpods Pro</p>
            <div className="flex gap-3 items-center">
              <strong className="text-blue-500">R$ 10,00</strong>
              <button className=" p-1 rounded">
                <BsCartPlus size={20} color="white" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

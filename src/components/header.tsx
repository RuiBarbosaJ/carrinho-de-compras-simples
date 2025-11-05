import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FaDragon } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Header() {
  const { cardAmount } = useContext(CartContext);

  return (
    <header className="w-full px-1 text-white">
      <nav className="flex w-full justify-between items-center max-w-7xl h-14 px-5 mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-1 justify-center text-2xl border border-s-blue-200 px-3 rounded-md font-extralight cursor-pointer"
        >
          <FaDragon size={20} color="white" />
          RJ Shop
        </Link>
        <Link to={"/cart"} className="relative cursor-pointer">
          <FiShoppingCart size={24} color="white" />
          {cardAmount > 0 && (
            <span className="absolute px-2.5 bg-blue-400 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs -right-3 -top-3">
              {cardAmount}
            </span>
          )}
        </Link>
      </nav>
      <hr />
    </header>
  );
}

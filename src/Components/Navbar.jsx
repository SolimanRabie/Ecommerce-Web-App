import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";

function Navbar() {
  // const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 text-white px-10 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Products App</h1>

      <div className="flex gap-6">
        <Link to="/register">Register</Link>
        <Link to="/">Products</Link>

        <Link to="/cart">Cart </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

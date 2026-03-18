import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
// import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10 grid grid-cols-2 gap-10">
      <img src={product.thumbnail} className="w-full rounded" />

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-500 mt-3">{product.description}</p>

        <p className="text-xl font-bold mt-5">${product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-600 text-white px-6 py-2 rounded mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

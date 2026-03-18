import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
    >
      <img src={product.thumbnail} className="h-40 w-full object-cover" />

      <h2 className="font-bold mt-2">{product.title}</h2>

      <p className="text-gray-500">${product.price}</p>
    </div>
  );
}

export default ProductCard;

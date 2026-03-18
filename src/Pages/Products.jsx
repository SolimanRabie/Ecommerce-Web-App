import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const limit = 10;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [skip]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setSkip(Math.max(skip - 10, 0))}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setSkip(skip + 10)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;

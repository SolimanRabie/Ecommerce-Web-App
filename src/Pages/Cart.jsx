import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../Redux/cartSlice";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return <p className="p-10">Cart is empty</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Cart</h1>

      {items.map((item) => (
        <div key={item.id} className="flex gap-6 mb-4 border p-4">
          <img src={item.thumbnail} className="w-24" />

          <div className="flex-1">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

            <span>{item.quantity}</span>

            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          {/* Remove */}
          <button onClick={() => dispatch(removeFromCart(item.id))}>❌</button>
        </div>
      ))}

      <h2 className="text-xl mt-6">Total: ${total}</h2>
    </div>
  );
}

export default Cart;

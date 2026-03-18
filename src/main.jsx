import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./Context/CartProvider";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CartProvider>
      <App />
    </CartProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

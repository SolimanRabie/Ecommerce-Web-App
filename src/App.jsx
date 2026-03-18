import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

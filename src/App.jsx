import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { OrderHistory } from "./components/OrderHistory";
import { Admin } from "./components/Admin";
import { Footer } from "./components/Footer";

function App() {
  const isAuthenticated = false;
  const isAdmin = false;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {isAuthenticated && (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </>
        )}
        {isAdmin && <Route path="/admin" element={<Admin />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

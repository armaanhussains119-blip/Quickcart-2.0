import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";
import CartSidebar from "./components/CartSidebar";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} searchTerm={searchTerm} />}
        />

        <Route
          path="/category/:category"
          element={<CategoryPage products={products} />}
        />

        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <CartSidebar />
    </BrowserRouter>
  );
}

export default App;

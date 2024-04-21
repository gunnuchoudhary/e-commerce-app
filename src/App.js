import "./App.css";
import Header from "./component/Header";
import Home from "./component/home";
import Items from "./component/items.detail";
import Cart from "./component/cart";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  // console.log("appcart", cartData, typeof cartData);
  const [cart, setcart] = useState(cartData ? cartData : []);

  console.log("App");
  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setcart={setcart} />} />
        <Route path="/Items/:id" element={<Items />} />
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

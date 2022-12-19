import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  Home,
  Login,
  ProductList,
  Register,
  SingleProduct,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;

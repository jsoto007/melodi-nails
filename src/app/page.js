import React from "react";

import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
   <div>
    <Hero />
    <ProductList />
   </div>
  );
}

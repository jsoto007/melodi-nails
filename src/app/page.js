import React from "react";

import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CalendarContainer from "./components/CalendarContainer";

export default function Home() {
  return (
   <div>
    <Hero />
    <ProductList />
    <CalendarContainer />
   </div>
  );
}

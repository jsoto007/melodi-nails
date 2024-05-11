import React from "react";

import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CalendarContainer from "./components/CalendarContainer";
import PreviewPage from "./components/PreviewPage";

export default function Home() {
  return (
   <div>
    <Hero />
    <ProductList />
    <PreviewPage />
    <CalendarContainer />
   </div>
  );
}

'use client'
import React from "react";
import { checkout } from "./checkout";


export default function PreviewPage() {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <button 
      className="rounded-md bg-gradient-to-tl from-[#6f7863] to-[#2A3923] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#6f7863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2"
      onClick={() =>{
        checkout({
          lineItems: [
            {
              price: 'price_1PEE2LP81D2P6S8DHvHqOkZ2',
              quantity: 1,
            }
          ]
        })
      }}> Pay Now</button>
    </div>
  )
}
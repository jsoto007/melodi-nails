'use client'
import React from "react";
import { checkout } from "./checkout";


export default function PreviewPage() {
  
  return (
    <div>
      <button onClick={() =>{
        checkout({
          lineItems: [
            {
              price: 'price_1PEE2LP81D2P6S8DHvHqOkZ2',
              quantity: 1,
            }
          ]
        })
      }}>Booking Fee</button>
    </div>
  )
}
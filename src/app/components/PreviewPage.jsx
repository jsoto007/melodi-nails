'use client'
import React from "react";
import { checkout } from "./checkout";

export default function PreviewPage() {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
      <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Políticas del Centro</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Para confirmar su cita luego de poner su información debe realizar un depósito de $25 que serán descontado al finalizar el servicio (No reembolsable), le damos 10 minutos de prórroga para llegar a su cita, si se pasa de esos 10 minutos el depósito se pierde y si pasa de los 15 minutos su cita automáticamente queda cancelada, siempre recuerde llegar temprano a su cita.
            </dd>
          </div>
      </div>
      <button 
      className="rounded-md bg-gradient-to-tl from-[#6f7863] to-[#2A3923] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#6f7863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2"
      onClick={() =>{
        checkout({
          lineItems: [
            {
              price: 'price_1PGBkqP81D2P6S8DJc9EMbkK',
              quantity: 1,
            }
          ]
        })
      }}>Pagar Reserva Ahora</button>
    </div>
  )
}
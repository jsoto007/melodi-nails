'use client'
import React from 'react'

export default function ProductList() {

  const products = [
    {
    id: 1,
    name: "Russian Manicure",
    price: "50",
    description: "Consta de una manicura en seco donde nos enfocamos en la limpieza de las cutículas y pulido de la piel, más un esmaltado semi permanente y gel calcio."
    },
    {
      id: 2,
    name: "Gel Pedicure",
    price: "45",
    description: "Una limpieza de uñas y pies , exfoliación , hidratación y el esmaltado de su preferencia semi permanent."
    },
    {
      id: 3,
    name: "Acrylic Full Set",
    price: "65",
    description: "Consta de un acrílico de color ya sea el de su preferencia. "
    },
    {
    id: 4,
    name: "Fill In Acrylic Color",
    price: "55",
    description: "Es un relleno en el área ya crecida de las uñas que ya lleva puesta del mismo color."
    },
    {
    id: 5,
    name: "Acrylic Clear & Polish Gel",
    price: "50",
    description: "Uñas en acrílico trasparente y un esmaltado semi permanente."
    },
    {
    id: 6,
    name: "Fill In Clear",
    price: "40",
    description: "Relleno de acrílico cristal y un esmaltado semi permanente"
    },
    {
    id: 7,
    name: "Ombré Nails",
    price: "70",
    description: "Consta de un difuminado entre dos acrílicos de colores."
    },
    {
    id: 8,
    name: "Perfect French",
    price: "90",
    description: "Este set consta de un fresh y una base en acrílico de color."
    },
    {
    id: 9,
    name: "Soack Off",
    price: "10",
    description: "Remojamos las uñas en acetona pura al 100% y agua caliente para retiro de uñas."
    },
    {
    id: 10,
    name: "Acrylic full set + French",
    price: "75",
    description: "Acrílico de color más French del color de su preferencia en gel."
    },
    {
    id: 11,
    name: "Paraffin treatment",
    price: "15",
    description: "En este tratamiento les sumergiremos  sus pies o manos a una cera caliente que le ayudará con la hidratación y circulación."
    },
  ]


  return (
    <div className='bg-[#ECE7E2]' id='services'>
    <div className='sm:mx-16 md:mx-16 lg:mx-16'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Nail Bar</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">El Arte De Tus Uñas</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {
            products.map((product)=> {
              return(

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={product.id}>
                  <dt className="text-sm font-bold leading-6 text-gray-900">{product.name}</dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">{product.description}</span>
                    <span className="ml-4 flex-shrink-0">
                      <span className="rounded-md font-bold text-grey-900">
                        $ {product.price} <span className='text-xs font-light'>& Up</span>
                      </span>
                    </span>
                  </dd>
                </div>
              )
            })
          }
        
       
        </dl>
      </div>
    </div>
    </div>
  )
}

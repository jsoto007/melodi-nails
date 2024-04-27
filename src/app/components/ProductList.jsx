import React from 'react'

export default function ProductList() {

  const products = [
    {
    name: "Russian Minicure",
    price: "50",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Gel Pedicure",
    price: "45",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Acrylic Full Set",
    price: "65",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Fill In Acrylic Color",
    price: "55",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Acrylic Clear & Polish Gel",
    price: "50",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Fill In Clear",
    price: "40",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Ombré Nails",
    price: "70",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Perfect French",
    price: "90",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
    {
    name: "Soack Off",
    price: "10",
    description: "We use a proprietaty system to apply acrillic nail polish and dry it."
    },
  ]


  return (
    <div className='bg-[#ECE7E2]'>
    <div className='md:mx-16 lg:mx-16'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Our Services</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">El Arte De Tus Uñas</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {
            products.map((product)=> {
              return(

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-bold leading-6 text-gray-900">{product.name}</dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">{product.description}</span>
                    <span className="ml-4 flex-shrink-0">
                      <span className="rounded-md font-bold text-grey-900">
                        $ {product.price}
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
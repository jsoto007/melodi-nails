'use client'
 import React from "react";
 import Image from "next/image";

const products = [
  {
    id: 1,
    name: 'Russian Manicure',
    price: '$50',
    imageSrc: '/russianManicure2.jpg',
    imageAlt: 'Russian Manicure',
    href: '#',
  },
  {
    id: 2,
    name: 'Gel Pedicure',
    price: '$45',
    imageSrc: '/gelPedicure.jpg',
    imageAlt: 'Gel Pedicure',
    href: '#',
  },
  {
    id: 3,
    name: 'Acrylic Full Set',
    price: '$65',
    imageSrc: '/fullSet.jpg',
    imageAlt: 'Acrylic Full Set',
    href: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {



  return (
    <div className="bg-[#ECE7E2]">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Image
                  src={product.imageSrc}
                  width={400}
                  height={400}
                  // className="h-full w-full object-cover object-center"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  alt={product.imageAlt}
                />
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900 overflow-hidden">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

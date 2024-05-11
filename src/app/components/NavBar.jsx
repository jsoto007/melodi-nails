'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MNLogo from "../../../public/MNLogo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar() {


  const navList = [
    {
      id: 1,
      ref: "home", 
      value: "Home"
    },
    {
      id: 2,
      ref: "services", 
      value: "Nail Bar"
    },
    {
      id: 3,
      ref: "about", 
      value: "About"
    },
    {
      id: 4,
      ref: "booking", 
      value: "Book Now"
    },
  ]

  return (
    <Disclosure as="nav" className="bg-[#2a3923] shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-12 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                <Image
                  src={MNLogo}
                  className="h-auto w-16 object-cover shadow-lg"
                  alt="Melodi Nails Logo"
                />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navList.map((item) => {
                    return(
                        <Link
                          key={item.id}
                        href={`#${item.ref}`}
                          className="scroll-smooth inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-neutral-200 hover:border-[#c1a88a] hover:text-white"
                        >
                          {item.value}
                    </Link>
                    )
                  })}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-[#c8af8f] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">

            {navList.map((item) => {
              return(
                <Link
                  key={item.ref}
                  href={`#${item.ref}`}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-neutral-200 "
                >
                  {item.value}
                    </Link>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

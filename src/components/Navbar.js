'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiShoppingCart, FiSearch } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#4E4E4E] opacity-90 text-white fixed z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold">LOGO</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
                <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
                <Link href="/service" className="hover:bg-gray-700 px-3 py-2 rounded-md">Service</Link>
                <Link href="/gallery" className="hover:bg-gray-700 px-3 py-2 rounded-md">Gallery</Link>
                <Link href="/pricing" className="hover:bg-gray-700 px-3 py-2 rounded-md">Pricing</Link>
                <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <FiShoppingCart className="h-6 w-6 mr-4" />
            <FiSearch className="h-6 w-6" />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            <Link href="/service" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Service</Link>
            <Link href="/gallery" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Gallery</Link>
            <Link href="/pricing" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Pricing</Link>
            <Link href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Contact Us</Link>
          </div>
          <div className="px-4 py-3 flex items-center">
            <FiShoppingCart className="h-6 w-6 mr-4" />
            <FiSearch className="h-6 w-6" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
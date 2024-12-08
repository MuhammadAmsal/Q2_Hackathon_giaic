'use client'; 
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaSearch  } from 'react-icons/fa';
import { MdManageAccounts } from "react-icons/md";
const Header = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 m-auto  max_padd_container w-full bg-transparent z-10">
      {/* Main Navigation */}
      <div className="mx-auto flex justify-between items-center px-4 py-4">
       <div></div>
       

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
 

     <nav className="hidden md:flex space-x-8 text-sm font-medium">
      <Link href="/" legacyBehavior>
        <a className="hover:text-gray-500">Home</a>
      </Link>
      <Link href="/shop" legacyBehavior>
        <a className="hover:text-gray-500">Shop</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="hover:text-gray-500">About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="hover:text-gray-500">Contact</a>
      </Link>
    </nav>


        {/* Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
        <Link href="/account"  >  <MdManageAccounts className="cursor-pointer text-2xl" /> </Link>
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <Link href="/cart"  >    <FaShoppingCart className="cursor-pointer" /></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <nav className="flex flex-col space-y-4 px-4 py-4">
        <Link href="/" legacyBehavior>
        <a className="hover:text-gray-500">Home</a>
      </Link>
      <Link href="/shop" legacyBehavior>
        <a className="hover:text-gray-500">Shop</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="hover:text-gray-500">About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="hover:text-gray-500">Contact</a>
      </Link>

          {/* Icons inside Mobile Menu */}
          <div className="flex items-center space-x-4 mt-4">
          <Link href="/account"  >   <MdManageAccounts className="cursor-pointer text-2xl text-gray-700" /></Link>
          <FaSearch className="cursor-pointer text-gray-700" />
              <FaHeart className="cursor-pointer text-gray-700" />
           <Link href="/cart"  >   <FaShoppingCart className="cursor-pointer text-gray-700" /></Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

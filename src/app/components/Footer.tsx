import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] text-white w-90 mt-0">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Exclusive Section */}
          <div className='flex items-center' >
            {/* <h3 className="text-lg font-semibold mb-4">Exclusive</h3> */}
            <p className="mb-4 text-sm text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>

          </div>

      
          {/* Link Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#9F9F9F]">Links</h3>
            <ul className="space-y-2 text-black">
              <li><a href="/account" className="text-sm hover:underline">My Account</a></li>
              <li><a href="/account" className="text-sm hover:underline">Login / Register</a></li>
              <li><a href="/cart" className="text-sm hover:underline">Cart</a></li>
              <li><a href="#" className="text-sm hover:underline">Wishlist</a></li>
              <li><a href="/shop" className="text-sm hover:underline">Shop</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#9F9F9F]">Help</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* News Letter Section */}
          <div >
            <h3 className="text-lg font-semibold mb-4 text-[#9F9F9F]">News Letter</h3>
            <form className="flex ">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-full rounded-md bg-white placeholder-gray-400 text-sm text-black border-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
            
            
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-start border-t border-gray-700 pt-4 text-sm">
          <p className='text-[#9F9F9F]' >2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

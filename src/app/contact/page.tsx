import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
export default function page() {
  return (
    <div className='mt-[60px] bg-white' >
         <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >Contact</h1>
             <p className='font-normal text-xl' >Home {'>'} Contact</p>
      </div>
      <div className='mt-10' >
        <h1 className='text-[36px] font-md text-center max-sm:text-[25px]' >Get In Touch With Us</h1>
        <p className='text-[16px] text-center text-[#9F9F9F] max-sm:text-[10]' >For More Information About Our Product & Services. Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className='flex justify-around my-20 max-md:grid p-[20px]' >
        {/* login  */}
        <div className='flex max-w-[608px] max-h-[630px] flex-row gap-4 ' >
          
          <div className='flex flex-col gap-24' >
          <span><FaLocationPin className='inline text-[28px] '/></span>
          <span><FaPhoneAlt className='inline text-[28px] '/></span>
          <span><MdOutlineWatchLater className='inline text-[28px] '/></span>
          </div>
          <div className='flex flex-col gap-10' >
          <div>
        <p className='ml-3 text-[24px] text-md max-sm:text-[14px] inline'>Address</p>
          
          <p className='ml-3' >236 5th SE Avenue, New York<br/> NY10000, United States</p></div>

          <div>
            
          <p className='ml-3 text-[24px] text-md max-sm:text-[14px] inline'>Phone</p>
          <p className='ml-3' >Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p></div>
          <div>
            
          <p className='ml-3 text-[24px] text-md max-sm:text-[14px] inline'>Working on Time</p>
          <p className='ml-3' >Monday-Friday: 9:00 - 22:00 <br/>Saturday-Sunday: 9:00 - 21:00</p></div>
          
          
         
          
        </div>
        </div>
        {/*  RIGHT */}
        <div className='flex max-w-[608px] max-h-[630px] flex-col gap-4 max-md:mt-4' >
            <p className='text-[16px] max-sm:text-[14px]' >Your Name</p>
            <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='abc' />
            <p className='text-[16px] max-sm:text-[14px]' >Email Address</p>
            <input type='email' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Email' />
            <p className='text-[16px] max-sm:text-[14px]' >Subject</p>
            <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Optional' />
            <p className='text-[16px] max-sm:text-[14px]' >Message</p>
            <textarea className='outline-none border border-black rounded-md px-10 py-3' placeholder='Hi! i’d like to ask about' />
             <button className='px-9 py-2 hover:bg-black hover:text-white border border-black rounded-md' >Submit</button>
        </div>
      </div>




      <div className='flex justify-around bg-[#eceaea] p-32 max-sm:p-20 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1' >
        <div className='p-7 max-sm:p-3' >
            <h1 className='text-[32px] font-medium max-sm:text-[26px] ' >Free Delivery</h1>
            <p className='text-[#9F9F9F]' >For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className='p-7 max-sm:p-3' >
            <h1 className='text-[32px] font-medium max-sm:text-[26px]' >90 Days Return</h1>
            <p className='text-[#9F9F9F]' >If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className='p-7 max-sm:p-3' >
            <h1 className='text-[32px] font-medium max-sm:text-[26px]' >Secure Payment</h1>
            <p className='text-[#9F9F9F]' >100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  )
}

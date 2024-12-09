import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"

export default function page() {
  return (
    <div className='mt-[60px] bg-white' >
         <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >About</h1>
             <p className='font-normal text-xl' >Home {'>'} About</p>
      </div>
      <div className='flex justify-around my-20 max-md:grid p-[20px]' >
       
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

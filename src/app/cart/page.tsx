import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"
import img3 from "../images/img5.png"
import { TbTrash } from "react-icons/tb";
import Link from 'next/link';

export default function page() {
  return (
    <div className='mt-[60px] bg-white' >
         <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >Cart</h1>
             <p className='font-normal text-xl' >Home {'>'} Cart</p>
      </div>
      {/* cart  */}
      <div className="mx-auto px-6 lg:px-20 pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-[#FFF9E5] regular-18 sm:regular-22 text-start py-12 ">
            <th className="p-1 py-2">Products</th>
            
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Sub Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          
              
                <tr className="border border-slate-900/20 text-gray-20 p-6 medium-14 text-center">
                  <td className="flex items-center justify-center">
                    <Image
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                      src={img3}
                      alt="prdctImg"
                      height={43}
                      width={43}
                    />
                  </td>
                 
                  <td>Rs:320000</td>
                  
                  <td className="w-16 h-16 bg-white">1</td>
                  <td>Rs: 320000</td>
                  <td>
                    <div className="bold-22 pl-14">
                      <TbTrash
                        className="cursor-pointer"
                      
                      />
                    </div>
                  </td>
                </tr>
           
        </tbody>
      </table>
       {/* cart details */}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-[#FFF9E5] w-full max-w-[666px]" >
        <div className="flex flex-col gap-10" >
        <h4 className="bold-20 text-xl font-bold" >Cart Total</h4>
         <div>
          <div className="flexBetween py-4" >
            <h4 className="medium-16 inline text-xl font-md" >Subtotal:</h4>
            <h4 className="text-gray-30  inline ml-20 text-xl text-[#9F9F9F]" > Rs: 320000</h4>
          </div>
          <hr/>
          <div className="flexBetween py-4" >
            <h4 className="bold-18 inline text-xl font-md" >Total:</h4>
            <h4 className="inline text-xl text-[#B88E2F] ml-28" > Rs: 320000</h4>
          </div>
         </div>
       <Link href="/checkout"> <button className=" medium-15 border text-black border-black bg-green-90 px-7 py-3  hover:text-white transition-all hover:bg-black rounded-full w-44" >Checkout</button></Link> 
         
        </div>
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

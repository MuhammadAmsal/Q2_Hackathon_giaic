import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import shop from "../images/shop.jpeg"
import img1 from "../images/img16.png"
import img2 from "../images/img4.png"
import img3 from "../images/img11.png"
import img4 from "../images/img18.png"
import img5 from "../images/img17.png"
import img6 from "../images/img13.png"
import img7 from "../images/img6.png"
import img8 from "../images/img14.png"
import img9 from "../images/img16.png"
import img10 from "../images/img4.png"
import img11 from "../images/img11.png"
import img12 from "../images/img6.png"
import logo from "../images/logo.png"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
export default function page() {



const products=[
    {
        id:1,
        image:img1,
        title:"Asgaard Sofa",
        price:250000
    },
    {
        id:2,
        image:img2,
        title:"Granite dining table with dining chair",
        price:25000
    },
    {
        id:3,
        image:img3,
        title:"Reclaimed teak Sideboard",
        price:20000
    },
    {
        id:4,
        image:img4,
        title:"Kent Coffee Table",
        price:232000
    },
    {
        id:5,
        image:img5,
        title:"Maya sofa three seater",
        price:11000
    },
    {
        id:6,
        image:img6,
        title:"Reclaimed teak Sideboard",
        price:20000
    },
    {
        id:7,
        image:img7,
        title:"Plain console with teak mirror",
        price:50000
    },
    {
        id:8,
        image:img8,
        title:"Reclaimed teak coffee table",
        price:76000
    },
    {
        id:9,
        image:img9,
        title:"Outdoor sofa set",
        price:220000
    },
    {
        id:10,
        image:img10,
        title:"Round coffee table_color 2",
        price:10000
    },
    {
        id:11,
        image:img11,
        title:"Trenton Modular Sofa",
        price:25000
    },
    {
        id:12,
        image:img12,
        title:"Plain console with teak mirror",
        price:65000
    },
]



  return (
    <div className='mt-[60px] bg-white' >
        {/* banner  */}
      <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >Shop</h1>
             <p className='font-normal text-xl' >Home {'>'} Shop</p>
      </div>
   
       {/* filter  */}
      <div className='flex items-center justify-between my-8 py-8 px-[20px] bg-[#eceaea]' >
          <h5 className='font-bold max-md:text-sm' ><span>Showing 1-12</span> out of 36 products</h5>
          <div className=' flex items-center justify-between gap-x-4 px-8 py-3 max-md:py-1 max-md:text-[13px] max-md:px-4 rounded-full ring-1 ring-slate-900/15' >
            Sort by <MdOutlineKeyboardArrowDown/>
          </div>
          
            </div>

      <div className='grid  max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6' >
    {products.map((product)=>{
        return(
            <div key={product.id} className='max-sm:mx-auto max-w-[287px] max-h-[397px]'>
                <Link href={`/product/${product.id}`} >
            <Image src={product.image} width={287} height={287} className='rounded-xl' alt='topPicks' />
            <p className='text-center text-[16px] max-md:text-[15px]' >{product.title}</p>
            <h2 className='text-center bold text-[24px] max-md:text-[17px]' >Rs: {product.price}</h2></Link>
        </div>

        )
    })}
      </div>
      <div className='flex justify-center gap-9 p-10' >
        <div className='bg-[#d6d6d6] rounded-xl px-7 py-3 max-md:px-5 max-md:py-1/2' >1</div>
        <div className='bg-[#eceaea] rounded-xl px-7 py-3 max-md:px-5 max-md:py-1/2' >2</div>
        <div className='bg-[#eceaea] rounded-xl px-7 py-3 max-md:hidden' >3</div>
        <div className='bg-[#eceaea] rounded-xl px-9 py-3 max-md:px-5 max-md:py-3'  >Next</div>
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

import React from 'react'
import img1 from "../images/img1.png" 
import img2 from "../images/img2.png" 
import Image from 'next/image'
export default function Popular() {
  return (
    <section className='bg-[#F4F4F4] min-h-[672px] flex w-full max-md:flex-col max-md:justify-center max-md:p-[10px] ' >
      <div className='flex-col' >
        <Image src={img1} height={1641} width={1092} className='left-[-54px]' alt='popularImg' />
         <h1 className='text-3xl pl-16 max-md:text-xl' >Side Table</h1>
         <h3 className="mt-4 text-xl  pl-16 max-md:text-sm" >View More</h3>
         <hr className='border-b-2 ml-16 border-black w-1/6' />
      </div>
      <div className='flex-col' >
        <Image src={img1} height={1641} width={1092} className='left-[-54px]' alt='popularImg' />
         <h1 className='text-3xl pl-16 max-md:text-xl' >Side Table</h1>
         <h3 className="mt-4  text-xl  pl-16 max-md:text-sm" >View More</h3>
         <hr className='border-b-2 ml-16 border-black w-1/6' />
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import sofa from "../images/sofa.png"

function Arrivals() {
  return (
    <div className='flex  bg-[#FFF9E5] w-full max-sm:flex-col' >
      <div ><Image src={sofa} height={799} width={983} alt='sofa' /></div>
      <div className='flex flex-col justify-center p-12' >
        <p className='text-[24px] font-medium max-sm:text-[18px]' >New Arrivals</p>
        <h1 className='text-[48px] font-bold max-sm:text-[42px]' >Asgaard Sofa</h1>
        <button className='border-2 border-black p-3 max-sm:p-1' >Order Now</button>
      </div>
    </div>
  )
}

export default Arrivals

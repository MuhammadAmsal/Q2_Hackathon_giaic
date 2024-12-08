import React from 'react'
import Image from 'next/image'
import img7 from "../images/img7.jpeg"
import img8 from "../images/img8.jpeg"
import img9 from "../images/img9.jpeg"

function OurBlogs() {
  return (
    <div>
      <div className='flex items-center flex-col p-[50px]' >
      <h1 className='text-[36px] font-medium' >Our Blogs</h1>
       <p className='font-medium text-[#9F9F9F] text-[16px]' >Find a bright ideal to suit your taste with our great selection</p>
      </div>
 
 {/* product  */}
      <div className='flex justify-around p-[20px] max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1' >
        <div className='ml-3  max-md:mt-8' >
          <Image src={img7} height={393} width={393} alt="product" className='rounded-md' />
          <p className='text-[20px] text-center p-[10px]' >Going all-in with millennial design</p>
          <h3 className=" text-[22px] font-medium text-center p-[10px]" >Read More</h3>
          <p className='text-[16px] font-normal text-center' >12 Oct 2022</p>
           
        </div>
        <div className='ml-3  max-md:mt-8' >
          <Image src={img8} height={393} width={393} alt="product" className='rounded-md' />
          <p className='text-[20px] text-center p-[10px]' >Going all-in with millennial design</p>
          <h3 className=" text-[22px] font-medium text-center p-[10px]" >Read More</h3>
          <p className='text-[16px] font-normal text-center' >12 Oct 2022</p>
           
        </div>
        <div className='ml-3  max-md:mt-8' >
          <Image src={img9} height={393} width={393} alt="product" className='rounded-md' />
          <p className='text-[20px] text-center p-[10px]' >Going all-in with millennial design</p>
          <h3 className=" text-[22px] font-medium text-center p-[10px]" >Read More</h3>
          <p className='text-[16px] font-normal text-center' >12 Oct 2022</p>
           
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default OurBlogs

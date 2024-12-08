import React from 'react'
import Image from 'next/image'
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
export default function TopPicks() {
  return (
    <div className='flex flex-col w-full justify-around ' >
    <div className='flex justify-center text-2xl pt-[30px] max-sm:pt-[22px] max-sm:text-xl' ><h1>Top Picks For You</h1></div>
    <div className='flex justify-center' ><p className='text-[#9F9F9F] max-md:text-center max-sm:text-sm pt-8' >Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p></div>
    {/* products  */}
    <div className='flex justify-around max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1' >
    <div>
        <Image src={img3} width={287} height={287} alt='topPicks' />
        <p className='text-center text-[16px] max-md:text-[15px]' >Trenton modular sofa_3</p>
        <h2 className='text-center bold text-[24px] max-md:text-[17px]' >Rs. 25,000.00</h2>
    </div>
    <div>
        <Image src={img4} width={287} height={287} alt='topPicks' />
        <p className='text-center text-[16px] max-md:text-[15px]' >Trenton modular sofa_3</p>
        <h2 className='text-center bold text-[24px] max-md:text-[17px]' >Rs. 25,000.00</h2>
    </div>
    <div>
        <Image src={img4} width={287} height={287}  alt='topPicks' />
        <p className='text-center text-[16px] max-md:text-[15px]' >Trenton modular sofa_3</p>
        <h2 className='text-center bold text-[24px] max-md:text-[17px]' >Rs. 25,000.00</h2>
    </div>
    <div>
        <Image src={img6} width={287} height={287}  alt='topPicks' />
        <p className='text-center text-[16px] max-md:text-[15px]' >Trenton modular sofa_3</p>
        <h2 className='text-center bold text-[24px] max-md:text-[17px]' >Rs. 25,000.00</h2>
    </div>

    </div>
    <div className='flex justify-center p-[30px]' ><button>View More</button></div>
      
    </div>
  )
}

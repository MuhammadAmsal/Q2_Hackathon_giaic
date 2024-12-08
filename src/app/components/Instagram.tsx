import React from 'react'
// import Image from 'next/image'
// import img10 from "../images/img10.jpeg"

function Instagram() {
  return (
    <div className='h-[450px] w-full bg-instaImg bg-center bg-cover bg-repeat' >

      <div className='flex justify-center h-full items-center flex-col' >
        <h1 className='font-bold text-[60px] max-sm:text-[40px]' >Our Instagram</h1>
        <p className='text-[20px] font-normal max-sm:text-[13px]' >Follow our store on Instagram</p>
        <button className='px-[45px] py-[11px] rounded-full border-2 hover:bg-black hover:text-white border-black shadow-xl mt-[10px] max-sm:px-[30px] max-sm:py-[8px]' >Follow us</button>
      </div>
    </div>
  )
}

export default Instagram
 
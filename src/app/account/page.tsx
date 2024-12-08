import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"

export default function page() {
  return (
    <div className='mt-[60px] bg-white' >
         <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >Account</h1>
             <p className='font-normal text-xl' >Home {'>'} Account</p>
      </div>
      <div className='flex justify-around my-20 max-md:grid p-[20px]' >
        {/* login  */}
        <div className='flex max-w-[608px] max-h-[630px] flex-col gap-4 ' >
          <h1 className='text-[36px] font-bold max-sm:text-[29px]' >Log In</h1>
          <p className='text-[16px] max-sm:text-[14px]' >Username or Email Address</p>
          <input type='email' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Email'/>
          <p className='max-sm:text-[14px]' >Password</p>
          <input type='password' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Password'/>
          <div className='flex gap-3' >
          <input type='checkbox' name='' id='' />
          <p className='max-sm:text-[14px]' >Remember me</p>

          </div>
          <div className='flex gap-4' >
          <button className='px-9 py-2 hover:bg-black hover:text-white max-md:grid-cols-1  border border-black rounded-md max-sm:px-7 max-sm:py-2' >Login</button>
          <p className='my-auto max-sm:text-[14px]' >Lost Your Password?</p>
          </div>
          
        </div>
        {/* signup  */}
        <div className='flex max-w-[608px] max-h-[630px] flex-col gap-4 max-md:mt-4' >
            <h1 className='text-[36px] font-bold max-sm:text-[29px]'>Register</h1>
            <p className='text-[16px] max-sm:text-[14px]' >Email Address</p>
            <input type='email' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Email' />
            <p className='max-sm:text-[14px]' >A link to set a new password will be sent to your email<br/> address.</p>
            
            <p className='max-sm:text-[14px]' >Your personal data will be used to support your<br/> experience throughout this website, to manage access<br/> to your account, and for other purposes described in our <br/> <span className='font-bold' >privacy policy</span>.</p>
             <button className='px-9 py-2 hover:bg-black hover:text-white border border-black rounded-md' >Register</button>
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

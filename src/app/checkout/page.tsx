import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"

export default function page() {
  return (
    <div className='mt-[60px] bg-white' >
         <div className='flex flex-col justify-center items-center bg-shopImg bg-center opacity-50 bg-cover bg-repeat w-full h-[316px]' >
             <Image src={logo} width={77} height={77} alt='logo' />
             <h1 className='text-black text-3xl font-bold' >Checkout</h1>
             <p className='font-normal text-xl' >Home {'>'} Checkout</p>
      </div>
      <div className='flex justify-around my-20 max-md:grid p-[20px]' >
      {/* left  */}
        <div className='flex max-w-[608px] flex-col gap-4 ' >
          <h1 className='text-[36px] font-bold max-sm:text-[29px]' >Billing Details</h1>
          <p className='text-[16px] max-sm:text-[14px]' >Name</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Name'/>
          <p className='text-[16px] max-sm:text-[14px]' >Company Name</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Optional'/>
          <p className='text-[16px] max-sm:text-[14px]' >Country/Region</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Pakistan'/>
          <p className='text-[16px] max-sm:text-[14px]' >Street Address</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Street Address'/>
          <p className='text-[16px] max-sm:text-[14px]' >Town/City</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Town/City'/>
          <p className='text-[16px] max-sm:text-[14px]' >Province</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Province'/>
          <p className='text-[16px] max-sm:text-[14px]' >Zip Code</p>
          <input type='text' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Zip Code'/>
          <p className='text-[16px] max-sm:text-[14px]' >Phone</p>
          <input type='number' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Phone'/>
          <p className='text-[16px] max-sm:text-[14px]' >Email Address</p>
          <input type='email' className='outline-none border border-black rounded-md px-10 py-3' placeholder='Email Address'/>
          <textarea className='outline-none border border-black rounded-md px-10 py-3' placeholder='Additional Information'/>
         
           
          
        </div>
        {/* right  */}
        <div className='flex max-w-[608px] flex-col gap-4 max-md:mt-4' >
           
            <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]" >
        <div className="flex flex-col gap-10" >
       
        <h4 className="bold-20 text-xl font-bold ml-44" >Sub Total</h4>
         <div>
          <div className="flexBetween py-4" >
            <h4 className="medium-16 inline text-xl font-md" >Subtotal:</h4>
            <h4 className="text-gray-30  inline text-xl ml-20 text-[#9F9F9F]" > Rs: 320000</h4>
          </div>
          <hr/>
          <div className="flexBetween py-4" >
            <h4 className="bold-18 inline text-xl font-md" >Total:</h4>
            <h4 className="inline text-xl text-[#B88E2F] ml-28" > Rs: 320000</h4>
          </div>
         </div>
       
         
        </div>
      </div>
            <p className='max-sm:text-[14px]' >• Direct Bank Transfer</p>
            
            <p className='max-sm:text-[14px] text-[#9F9F9F]' >Make your payment directly into our bank account. Please use <br/>your Order ID as the payment reference. Your order will not be<br/> shipped until the funds have cleared in our account.</p>
            
            <p className='max-sm:text-[14px] text-[#9F9F9F]' >• Direct Bank Transfer</p>
            <p className='max-sm:text-[14px] text-[#9F9F9F]' >• Cash on Delivery</p>
            <p className='max-sm:text-[14px]' >Your personal data will be used to support your<br/> experience throughout this website, to manage access<br/> to your account, and for other purposes described in our <br/> <span className='font-bold' >privacy policy</span>.</p>
             <button className='px-9 py-2 hover:bg-black hover:text-white border border-black rounded-md' >Place an Order</button>
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

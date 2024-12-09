import React from "react";
import hero from "@/app/images/hero.png" 
import Image from 'next/image'
export default function Hero() {
   

  return (
    <section className="relative bg-[#FBEBB5] bg-cover bg-center pl-[20px] h-[1000px] bg-no-repeat w-full m pb-16 " >
        {/* main div   */}
        <div className="top-36 flex justify-around items-center max-md:flex-col max-md:pt-[150px] " >
        <div className="font-medium width-[1440px] height-[900px] " ><h1 className="text-5xl leading-tight" >Rocket Single <br/>Seater</h1>
        <h3 className="mt-4 border-b-2 border-black w-1/3 text-xl" >Shop Now</h3>
        </div>
        <div><Image  src={hero} width={853} height={1000} className="scale-x-[-1]"  alt="HeroImg" /></div>
    </div>
    
    </section>
  );
}

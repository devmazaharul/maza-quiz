"use client"
import Link from 'next/link'
import {useContext} from 'react'
import { Anek_Bangla } from 'next/font/google'
import { Usercontext } from '../contex/Contextapi'
import { PiShootingStarThin } from "react-icons/pi";

const Banglafont=Anek_Bangla({
  weight:"300",
  style:"normal",
  subsets:["latin"]
})

   
export default function Hero() {

    const {isDark,setisDark}=useContext(Usercontext)

  return (
    <>
    <section className={`${isDark?'bg-gray-800':'bg-white text-gray-800'} ${Banglafont.className}`}>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-emerald-300 via-sky-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        আপনার দক্ষতা কে যাচাই বাছাই

        <span className="sm:block dark:hidden py-2">করে দেখুন! </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-gray-400 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex  flex-wrap justify-center gap-4">
        <Link
          className="  w-fit flex items-center gap-1 rounded-full  bg-emerald-500 px-12 py-3 text-sm font-medium text-white  hover:bg-emerald-700  active:text-opacity-75 sm:w-auto"
          href="/test"
        >
          Get Test <PiShootingStarThin/>
        </Link>

     
          
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}



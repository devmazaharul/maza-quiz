"use client"
import Link from 'next/link'
import {useContext} from 'react'
import { Usercontext } from '../contex/Contextapi'
export default function Hero() {

    const {isDark,setisDark}=useContext(Usercontext)

  return (
    <>
    <section className={`${isDark?'bg-gray-800':'bg-white text-gray-800'}`}>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-emerald-300 via-blue-500 to-green-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block dark:hidden"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-gray-400 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex  flex-wrap justify-center gap-4">
        <Link
          className="  w-fit  rounded border border-emerald-600 bg-emerald-500 px-12 py-3 text-sm font-medium text-white  hover:bg-emerald-700  active:text-opacity-75 sm:w-auto"
          href="/test"
        >
          Get Test
        </Link>

     
          
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}



"use client"
import React, { useContext } from 'react'
import { Usercontext } from '../contex/Contextapi'

export default function Resultform() {
  const {isDark,setisDark}=useContext(Usercontext)

  return (
    <>

    <div className={`md:w-[30%] w-[80%] py-6 px-4 mx-auto mt-8 `}>
        <h1 className={`text-center text-xl font-bold ${isDark?"text-gray-300":"text-gray-800"}  py-2 capitalize`}>Get result</h1>
        <input type="text" placeholder='Enter Your roll' name="roll" id="roll" className={`px-3 ${isDark?"bg-gray-800 border border-gray-800 ":"bg-gray-100 text-gray-700 border border-gray-300 "}font-semibold py-2 w-full rounded-md text-gray-300  outline-none`} />
   <button className='bg-emerald-700 hover:bg-emerald-800 px-12 py-2 my-4 rounded-md text-gray-200 mx-auto   block '>RESULT</button>
    </div>
    
    </>
  )
}

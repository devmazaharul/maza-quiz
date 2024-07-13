"use client"
import React, { useContext } from 'react'
import { Usercontext } from '../contex/Contextapi'

export default function Resultform() {
  const {isDark,setisDark}=useContext(Usercontext)

  return (
    <>

    <div className={`md:w-[35%] w-[90%] py-6 px-4 rounded-md  shadow-xl  ${isDark?"bg-gray-900 border-gray-800":"bg-gray-100 border-gray-300"} mx-auto mt-8 border`}>
        <h1 className={`text-center text-xl ${isDark?"text-gray-300":"text-gray-800"} font-semibold py-2 capitalize`}>Get result</h1>
        <input type="text" placeholder='Enter Your roll' name="roll" id="roll" className={`px-3 ${isDark?"bg-gray-900 border border-gray-800 ":"bg-gray-100 border border-gray-300 "}font-semibold py-2 w-full rounded-md text-gray-300  outline-none`} />
   <button className='bg-emerald-600 hover:bg-emerald-700 px-2 py-2 my-4 rounded-md text-gray-200 mx-auto w-[70%]  block md:w-[40%]'>RESULT</button>
    </div>
    
    </>
  )
}

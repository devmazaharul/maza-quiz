import React from 'react'

export default function Resultform() {
  return (
    <>

    <div className='md:w-[35%] w-[90%] py-6 px-4 rounded-md  shadow-xl  bg-gray-900 border-gray-800 mx-auto mt-8 border'>
        <h1 className='text-center text-xl text-gray-300 font-semibold py-2 capitalize'>Get result</h1>
        <input type="text" placeholder='Enter Your roll' name="roll" id="roll" className='px-3 bg-gray-900 border border-gray-800 font-semibold py-2 w-full rounded-md text-gray-300  outline-none' />
   <button className='bg-emerald-600 hover:bg-emerald-700 px-2 py-2 my-4 rounded-md mx-auto w-[70%]  block md:w-[40%]'>RESULT</button>
    </div>
    
    </>
  )
}

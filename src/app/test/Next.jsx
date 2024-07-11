import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Next() {
  return (
    <div className='flex items-center md:w-[50%] w-[80%] mx-auto my-4 justify-between'>

        <button className='bg-yellow-600 hover:bg-yellow-700  text-gray-100 px-4 py-1 rounded-md shadow-md flex items-center  text-center'> <GrFormPrevious className='text-gray-200 text-lg text-center '/>Previous </button>
        <button className='bg-emerald-600  text-gray-100 hover:bg-emerald-700 px-4 py-1 rounded-md shadow-md flex items-center  text-center'> Next <MdNavigateNext className='text-gray-200 text-lg text-center '/></button>
    </div>
  )
}

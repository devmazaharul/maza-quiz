"use client"
import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import Next from './Next';
export default function Testform({testData,questionOpt}) {

    const [checked, setchecked] = React.useState("")

console.log(checked)
  return (
    <>
    

      
          <div
            key={Math.random()}
            className="border my-6 text-gray-400 border-gray-700 w-[94%] mx-auto md:w-[80%]  m-2 py-12 px-4 rounded-md shadow-md shadow-gray-900"
          >
            <h2 className="text-lg flex gap-2 items-center py-3 font-semibold">
              <FaRegCircleQuestion className="text-emerald-600	 text-2xl" />
              নিচের কোডে কি ভুল আছে?
            </h2>
            <p>
              ধরে নেই আমাদের দুটি .js ফাইল আছে। একটি হলো sum.js এবং আরেকটি হলো
              index.js এবং দুটি ফাইল একই ফোল্ডারে আছে। index.js ফাইলটি তে sum()
              ফাংশনটি কল করে সঠিকভাবে আউটপুট দেখানোর ক্ষেত্রে নিচের কোডে কি ভুল
              আছে?
            </p>

            <div className="multiplechoice py-4 md:w-[74%] mx-auto">

   <div className="grid grid-cols-1 py-3 md:grid-cols-2 gap-2 items-center">
   {questionOpt.map((opt,index)=>(
              <div key={Math.random()} className=" cursor-pointer flex items-center gap-2  border rounded-md hover:bg-gray-700 border-gray-700 px-3 py-1 shadow-sm">
              <input
                className="text-green-500"
             
                id="option"
                name="gender"
                type="radio"
              
              />
              <label className="cursor-pointer" htmlFor="option">
               {opt}
              </label>
            </div>
          ))}

   </div>
              

         
          

          
              
            </div>
            <Next/>
          </div>
 
    
    </>
  )
}

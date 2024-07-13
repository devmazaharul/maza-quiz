import React from 'react'
import { fethcData } from '../action';
import { FaRegCircleQuestion } from "react-icons/fa6";
export default async function Quiz() {
    const UserData = await fethcData()
    const {data}=UserData;
  return (
    <>
    
    {data && data.map((item,i) => (
       <div key={i} className="text-gray-500 rounded-md  m-4 border border-gray-700 w-[94%] mx-auto md:w-[80%]">
  <p className="text-center font-semibold text-emerald-600 rounded-t-md bg-slate-800 p-2"> {i+1}</p>
         <div
          
          className=" my-6  px-4  "
        >
          <h2 className="text-lg text-gray-400 flex gap-2 items-center py-3 font-semibold">
            <FaRegCircleQuestion className="text-emerald-600	 text-2xl" />
            নিচের কোডে কি ভুল আছে?
          </h2>
          <p  className="w-[80%] mx-auto">
            ধরে নেই আমাদের দুটি .js ফাইল আছে। একটি হলো sum.js এবং আরেকটি হলো
            index.js এবং দুটি ফাইল একই ফোল্ডারে আছে। index.js ফাইলটি তে sum()
            ফাংশনটি কল করে সঠিকভাবে আউটপুট দেখানোর ক্ষেত্রে নিচের কোডে কি ভুল
            আছে?
          </p>
        </div>
       </div>
      ))}
    </>
  )
}

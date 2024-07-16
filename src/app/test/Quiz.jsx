import React from 'react'
import { getQuizlist } from '../action';
import { FaRegCircleQuestion } from "react-icons/fa6";
export default async function Quiz() {
  const UserData = await getQuizlist()
  return (
    <>
    {UserData && UserData.reverse().map((item,i) => (
       <div key={i} className="text-gray-500 rounded-md  m-4 border border-gray-700 w-[94%] mx-auto md:w-[80%]">
  <div className="font-semibold flex items-center justify-between text-emerald-500 rounded-t-md bg-slate-800 p-1"> <p className="bg-emerald-600 text-gray-200 border-gray-800 border p-2 rounded-md">{i+1}</p>  <p > {item.quizId}</p></div>
         <div
          
          className=" my-6  px-4  "
        >
          <h2 className="text-lg text-gray-400 flex gap-2 items-center py-3 font-semibold">
            <FaRegCircleQuestion className="text-emerald-600	 text-2xl" />
            {item.title}
          </h2>
          <p  className="w-[80%] mx-auto">
           {item.desc}
          </p>
         
        </div>
       </div>
      ))}
    </>
  )
}

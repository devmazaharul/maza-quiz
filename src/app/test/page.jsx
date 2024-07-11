import { Anek_Bangla } from "next/font/google";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { fethcData } from "../action";

const tiroBangla = Anek_Bangla({
  style: "normal",
  weight: ["400"],
  subsets: ["bengali"],
});




export default async function page() {
  const UserData = await fethcData()
const {data}=await UserData;


  return (
    <>

      <div className={`${tiroBangla.className}  text-gray-400`}>
    <div className={` text-center py-6  text-gray-400`}>
          <h1 className="text-3xl px-2 font-semibold">
            আপনার 
            <p className="text-emerald-500 px-2 text-3xl inline-block">
              স্কিল টেস্ট
            </p>
            করুন
          </h1>
          <p>
            কোর্সটি করার জন্য প্রয়োজনীয় বিষয়গুলো সম্পর্কে আপনার যথেষ্ট ধারণা আছে
            কিনা সেটি যাচাই করে নিন
          </p>
        </div>


        {data && data.map((item,i) => (
       <div key={i} className="text-gray-400 rounded-md  m-4 border border-gray-700 w-[94%] mx-auto md:w-[80%]">
  <p className="text-center font-semibold text-emerald-600 rounded-md bg-slate-800 p-2"> {i+1}</p>
         <div
          
          className=" my-6  px-4  shadow-md shadow-gray-900"
        >
          <h2 className="text-lg flex gap-2 items-center py-3 font-semibold">
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


      </div>
    </>
  );
}

import { FaRegCircleQuestion } from "react-icons/fa6";

import { fethcData } from "../action";
export default async function Testform() {
  const user_data = await fethcData();

  const questionOpt = [
    "  sum ভ্যারিয়েবলটি অবশ্যই named export করতে হবে।1 ",
    "  sum ভ্যারিয়েবলটি অবশ্যই named export করতে হবে।2 ",
    "  sum ভ্যারিয়েবলটি অবশ্যই named export করতে হবে।3 ",
    "  sum ভ্যারিয়েবলটি অবশ্যই named export করতে হবে। 4",
  ];
  return (
    <>
      {user_data.data.map((item,i) => (
       <div key={Math.random()} className="text-gray-400 rounded-md  m-4 border border-gray-700 w-[94%] mx-auto md:w-[80%]">
  <p className="text-center font-semibold text-emerald-600 rounded-md bg-slate-800 p-2"> {i+1}</p>
         <div
          key={Math.random()}
          className=" my-6  px-4  shadow-md shadow-gray-900"
        >
          <h2 className="text-lg flex gap-2 items-center py-3 font-semibold">
            <FaRegCircleQuestion className="text-emerald-600	 text-2xl" />
            নিচের কোডে কি ভুল আছে?
          </h2>
          <p className="w-[80%] mx-auto">
            ধরে নেই আমাদের দুটি .js ফাইল আছে। একটি হলো sum.js এবং আরেকটি হলো
            index.js এবং দুটি ফাইল একই ফোল্ডারে আছে। index.js ফাইলটি তে sum()
            ফাংশনটি কল করে সঠিকভাবে আউটপুট দেখানোর ক্ষেত্রে নিচের কোডে কি ভুল
            আছে?
          </p>

          {/* <div className="multiplechoice py-4 md:w-[74%] mx-auto">
            <div className="grid grid-cols-1 py-3 md:grid-cols-2 gap-2 items-center">
              {questionOpt.map((opt, index) => (
                <div
                  key={Math.random()}
                  className=" cursor-pointer flex items-center gap-2  border rounded-md hover:bg-gray-700 border-gray-700 px-3 py-1 shadow-sm"
                >
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
          </div> */}
   
        </div>
       </div>
      ))}
    </>
  );
}

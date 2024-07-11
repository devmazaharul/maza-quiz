import { Anek_Bangla } from "next/font/google";

const tiroBangla = Anek_Bangla({
  style: "normal",
  weight: ["400"],
  subsets: ["bengali"],
});

import Testform from "./Testform";


export default async function page() {



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

       <Testform />


      </div>
    </>
  );
}

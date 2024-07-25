
import { Anek_Bangla } from "next/font/google";

import Quiz from "./Quiz";
import { Suspense } from "react";
import Signup from "./Signup";
import { cookies } from "next/headers";

const tiroBangla = Anek_Bangla({
  style: "normal",
  weight: ["400"],
  subsets: ["bengali"],
});

export async function generateMetadata() {
  return {
    title: 'Verify your skill'

  }
}

export default async function page() {
  const getCookie=cookies().get("user")

 

  return (
    <>

      <div className={`${tiroBangla.className}  `}>
    <div className={` text-center py-6 text-gray-400`}>
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

        {getCookie && (
            <div className="caninfi">
            <h1 className="text-emerald-500 capitalize w-fit my-3 rounded-md px-4 block mx-auto  ">Candidate name : {getCookie.value} </h1>
          </div>
        )}

        </div>

<div className="text-emerald-500 text-center font-bold">
<Suspense  fallback="loading...">


{!getCookie ? <Signup/> : <Quiz/>}

</Suspense>
</div>


      </div>
    </>
  );
}

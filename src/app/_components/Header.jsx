"use client"
import Link from 'next/link'
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from 'react';
 import { Usercontext } from '../contex/Contextapi';
 import Image from 'next/image';
 import { FaLock } from "react-icons/fa";


export default function Header() {
  const {isDark,setisDark}=useContext(Usercontext)

  return (
    <header className={`${isDark?"bg-gray-900 text-gray-200":"bg-white border border-b-gray-200 text-black"}`}>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link className="block text-emerald-500" href="/">
          <span className="sr-only">Home</span>
         <Image width={80} height={70} alt='site logo' src={'/Maza-quiz__2_-removebg-preview.png'} />
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="">
          <ul className="flex items-center gap-6 text-sm">
           

            <li>
              <Link className={`${isDark?" transition hover:text-gray-200/75":" transition hover:text-gray-800/75"}`} href="/test"> Test </Link>
            </li>

            <li>
              <Link className={`${isDark?" transition hover:text-gray-200/75":" transition hover:text-gray-800/75"}`} href="/result"> Result </Link>
            </li>
            <li>
              <Link className={`${isDark?" transition flex items-center hover:text-gray-200/75":" transition flex items-center gap-1 hover:text-gray-800/75"}`} href="/admin"><FaLock/>  </Link>
            </li>

            <li>
              <button onClick={()=>setisDark(!isDark)}  className=" transition text-2xl hover:text-gray-300/75" > {isDark?<MdOutlineLightMode />:<MdNightlightRound />} </button>
            </li>
          </ul>
        </nav>

       
      </div>
    </div>
  </div>
</header>
  )
}

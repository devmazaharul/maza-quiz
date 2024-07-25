"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { doLogout } from '../action';
import { usePathname } from 'next/navigation';
import { Usercontext } from '../contex/Contextapi';
import { FiUsers } from "react-icons/fi";




export default function Navbar() {
  const {isDark,setisDark}=useContext(Usercontext)

  const path=usePathname()

  const handleLogout=()=>{
    const confirma=confirm("are you sure")
    if(confirma){
      doLogout("logout")
    }
 
  }



  return (
    <form action={handleLogout} className={`${!isDark?"bg-gray-100  border border-r-1 text-gray-800":"bg-gray-800 "}   print:hidden md:block hidden w-[200px] h-[100vh] rounded-md p-2`}>
        <ul>
           <Link  href={'/dashboard'}> <li className={` bg-pink-500 text-gray-200 p-2 m-1 my-2 flex items-center gap-2 rounded-md `}> <IoHomeOutline/> Dashboard</li></Link>
           <Link   href={'/dashboard/quiz'}> <li className={`${path=="/dashboard/quiz"?"bg-gray-600 text-gray-300":""} hover:bg-gray-600 hover:text-gray-100 p-2 m-1 flex items-center gap-2 rounded-md`}> <MdOutlineAddBox/> Quiz</li></Link>
           <Link  href={'/dashboard/candidate'}> <li className={`${path=="/dashboard/candidate"?"bg-gray-600 text-gray-300":""} hover:bg-gray-600 hover:text-gray-100 p-2 m-1 flex items-center gap-2 rounded-md`}> <FiUsers/> Candidate </li></Link>
           <Link  href={'/dashboard/certificate'}> <li className={`${path=="/dashboard/certificate"?"bg-gray-600 text-gray-300":""} hover:bg-gray-600 hover:text-gray-100 p-2 m-1 flex items-center gap-2 rounded-md`}> <GrCertificate/> Certificate </li></Link>
          <button name='action' value="logout" > <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center hover:text-gray-100 gap-2 rounded-md'> <HiOutlineLogout/> Logout </li></button>
        </ul>
    </form>
  )
}

"use client"
import React from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { doLogout } from '../action';
import { usePathname } from 'next/navigation';




export default function Navbar() {

  const path=usePathname()

  return (
    <form action={doLogout} className='bg-gray-800 print:hidden md:block hidden w-[200px] h-[100vh] rounded-md p-2'>
        <ul>
           <Link  href={'/dashboard'}> <li className={` bg-pink-500 text-gray-200 p-2 m-1 my-2 flex items-center gap-2 rounded-md `}> <IoHomeOutline/> Dashboard</li></Link>
           <Link   href={'/dashboard/quiz'}> <li className={`${path=="/dashboard/quiz"?"bg-gray-600":""} hover:bg-gray-600 p-2 m-1 flex items-center gap-2 rounded-md`}> <MdOutlineAddBox/> Quiz</li></Link>
           <Link  href={'/dashboard/certificate'}> <li className={`${path=="/dashboard/certificate"?"bg-gray-600":""} hover:bg-gray-600 p-2 m-1 flex items-center gap-2 rounded-md`}> <GrCertificate/> Certificate </li></Link>
          <button name='action' value="logout" > <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <HiOutlineLogout/> Logout </li></button>
        </ul>
    </form>
  )
}

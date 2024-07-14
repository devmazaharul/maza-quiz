"use client"
import React from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { doLogout } from '../action';

export default function Navbar() {



  return (
    <form action={doLogout} className='bg-gray-800 md:block hidden w-[200px] h-[100vh] rounded-md p-2'>
        <ul>

           <Link  href={'/dashboard'}> <li className='bg-emerald-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <IoHomeOutline/> Dashboard</li></Link>
           <Link  href={'/add-quiz'}> <li className='hover:bg-gray-600 p-2 m-1 flex items-center gap-2 rounded-md'> <MdOutlineAddBox/> Add Quiz</li></Link>
           <Link  href={'dashboard/certificate'}> <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <GrCertificate/> Certificate </li></Link>
           <button name='action' value="logout" > <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <HiOutlineLogout/> Logout </li></button>
          
        </ul>
    </form>
  )
}

import React from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className='bg-gray-800 w-[200px] h-[100vh] rounded-md p-2'>
        <ul>

           <Link  href={'/dashboard'}> <li className='bg-emerald-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <IoHomeOutline/> Dashboard</li></Link>
           <Link  href={'/add-quiz'}> <li className='hover:bg-gray-600 p-2 m-1 flex items-center gap-2 rounded-md'> <MdOutlineAddBox/> Add Quiz</li></Link>
           <Link  href={'/certificate'}> <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <GrCertificate/> Certificate </li></Link>
           <Link  href={'/logout'}> <li className='hover:bg-gray-600 p-2 m-1 my-2 flex items-center gap-2 rounded-md'> <HiOutlineLogout/> Logout </li></Link>
          
        </ul>
    </div>
  )
}

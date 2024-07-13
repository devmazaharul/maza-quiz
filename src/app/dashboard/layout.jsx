import React from 'react'
import Navbar from './Navbar'
import { cookies } from 'next/headers'

export default function layout({children}) {

  const cruser=async()=>{
  
    if(!cookies().get("token")){
      redirect("/admin")
    }
  }

cruser()


  return (
    <div className='grid text-gray-200 grid-cols-5 '>
    <div className='col-span-1'>
        <Navbar/>
    </div>
<div className='col-span-4'>
    {children}
</div>
</div>
  )
}

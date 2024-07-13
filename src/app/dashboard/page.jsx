import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import { getAdmindetails } from '../action/admin'

export default function page() {

  const cruser=async()=>{
  
    if(!cookies().get("token")){
      redirect("/admin")
    }else{
     const res= await getAdmindetails()
     return res
     
    } 
  }

const crstatus=cruser()

  return (
    <div>

      <h1>details - {crstatus}</h1>

    </div>
  )
}

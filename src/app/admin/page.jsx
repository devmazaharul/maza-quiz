
import React from 'react'
import {AdminLoginform} from './AdminLoginform'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function page() {

const getCookie=()=>{
  if(cookies().get("mazaharul")){
    redirect("/dashboard")
  }

}

getCookie()

  return (
    <div>
        <AdminLoginform/>
   

    </div>
  )
}

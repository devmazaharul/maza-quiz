import React from 'react'
import Quizform from './Quizform'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function page() {
  // if(cookies().has("token")){
  //   cookies().delete("token")
  //   redirect("/admin")
  // }
  return (
    <div>
      <Quizform/>
    </div>
  )
}

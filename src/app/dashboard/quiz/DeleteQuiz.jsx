"use client"
import { site_url } from '@/siteurl'
import  Axios  from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

export  function DeleteQuiz(qizid) {
console.log(qizid)
    const handleDelete=async()=>{
        // const res=await Axios.post(site_url+"quizdelete",{

        // })


        toast.success("Deleted")
    }


  return (
 
      <button onClick={handleDelete} className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-500">Delete</button>
  
  )
}

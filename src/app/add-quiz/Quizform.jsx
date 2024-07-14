"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { site_url } from '@/siteurl'
export default function Quizform() {
    const [value, setValue] =React.useState({title:"",desc:""})
    const [loading,setLoading]=useState(false)


const handleChange=(e,name)=>{
setValue({...value,[name]:e.target.value})

}
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)

        const fetChaapi=await fetch(site_url+"admin/add-quiz",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({data:value})
        })

        if(fetChaapi.ok){
           toast.success("Quiz added")
            setLoading(false)
        }else{
            toast.error("Quiz not added")
            setLoading(false)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='w-[700px] mx-auto bg-gray-800 py-8 px-4 border border-gray-700 rounded-md shadow-md' >
            <input type="text"className='w-full py-2 px-4 rounded-md text-gray-700 outline-none my-1' placeholder='Quiz titile' name="title" value={value.title} onChange={(e)=>handleChange(e,"title")} />
            <input type="text" className='w-full py-2 px-4 rounded-md text-gray-700 outline-none my-1' placeholder='Quiz Description' name="title" value={value.desc} onChange={(e)=>handleChange(e,"desc")} />
        <button className='bg-emerald-600 text-gray-200 mt-3 rounded-md py-2 px-6 mx-auto w-fit '>{!loading?"Add quiz":"Adding..."}</button>
        </form>
    </div>
  )
}

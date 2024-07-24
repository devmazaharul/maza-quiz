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

const validation=async(title,desc)=>{
try {
    
    if(title.length>5 && desc.length>10){
        const fetChaapi=await fetch(site_url+"api/add-quiz",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({data:value})
        })
        if(fetChaapi.ok){
            const fData=await fetChaapi.json()
            if(fetChaapi.status==200){
             
                toast.success("Successfully quiz added! quiz ID: " + fData.data)
                setLoading(false)
            }else if(fetChaapi.status==201){
                toast.error(fData.message)
                setLoading(false)
            }else if(fetChaapi.status==500){
                toast.error(fData.message)
                setLoading(false)
            }
        }else{
            toast.error("Quiz not added")
            setLoading(false)
        }
    }else{
        toast.error("Title min 5 and desc min 10 digit")
        setLoading(false)
    }
} catch (error) {
    toast.error("Network error")
    setLoading(false)
}
}


    const handleSubmit=(e)=>{
        e.preventDefault()
       try {
        setLoading(true)
        const {title,desc}=value;
        validation(title,desc)
       } catch (error) {
        setLoading(false)
        toast.error("Network error")
       }
    }



  return (
    <div>
        <form onSubmit={handleSubmit} className='w-[700px] mx-auto bg-gray-800 py-8 px-4 border border-gray-700 rounded-md shadow-md' >
            <input type="text"className='w-full bg-gray-800 border border-gray-600 py-2 px-4 rounded-md text-gray-300 outline-none my-1' placeholder='Quiz titile' name="title" value={value.title} onChange={(e)=>handleChange(e,"title")} />
        
            <textarea  value={value.desc} onChange={(e)=>handleChange(e,"desc")} placeholder='Enter your quiz details' className='w-full bg-gray-800 border border-gray-600 py-2 px-4 rounded-md text-gray-300 outline-none my-1'></textarea>
       
        <button className='bg-pink-600 text-gray-200 mt-3 rounded-md py-2 px-6 mx-auto w-fit '>{!loading?"Add quiz":"Adding..."}</button>
        </form>
    </div>
  )
}

"use client"

import { site_url } from "@/siteurl"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import Quiz from "./Quiz"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"


export default function Signup() {
const route=useRouter()


    const [data, setdata] = useState({
        name:"",
        number:""
    })
  

const handleChange=(e,name)=>{
setdata({...data,[name]:e.target.value})
}



const validitiCheck=async(name,number)=>{
    try {
        if(name!=="" && number!==""){
            var namePattern = /^[a-zA-Z\s-]+$/;
            if(number.length==11){
                if(!namePattern.test(name)){
                    toast.error("Invalid name")
                }else{
                    const res=await axios.post(site_url+"signup",{data})
                    if(res.status==200){
                        toast.success("Successfully signup")
                        Cookies.set("user",name)
                        route.refresh()
                  
                    }else{
                        toast.error("Faild to signup") 
                    }
                }
            }else{
                toast.error("Number must be 11 digit")
            }
        }else{
            toast.error("Empty Info")
        }
        
    } catch (error) {
        toast.error("Connection error")
    }
}




    const handleSubit=(e)=>{
        e.preventDefault()

        try {
            validitiCheck(data.name,data.number)
        } catch (error) {
            toast.error("Connection error")
        }
    }


    const getUser=Cookies.get("user")



  return (
    <>
       {!getUser && (
         <form onSubmit={handleSubit} className='w-[400px] border border-gray-800 mx-auto mt-5 px-4 py-6 rounded-md shadow-md '>
         <h1 className="text-xl font-bold text-gray-400 py-3">Identity</h1>
         <input value={data.name} onChange={(e)=>handleChange(e,"name")} className='w-full capitalize px-3 py-2 text-gray-400 rounded-md outline-none my-1 bg-gray-800' type="text" placeholder='Enter your full name' name="" id="" />
         <input  value={data.number} onChange={(e)=>handleChange(e,"number")} className='w-full px-3 text-gray-400 py-2 rounded-md outline-none my-1 bg-gray-800' type="number" placeholder='Enter your Number' name="" id="" />
         <button className='bg-emerald-700 outline-none mt-3 text-gray-300 py-2 px-4 rounded-lg'>Start question</button>
     </form>
       )}



    </>
  )
}

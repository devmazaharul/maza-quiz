"use server"
import { site_url } from "@/siteurl"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"

export  const getQuizlist=async()=>{
    try {
        const res=await fetch(site_url+"allquiz",{
            cache:"no-store"
        })
        if(res.ok){
            if(res.status==200){
                const jsCon=await res.json()
                return {data:jsCon}
            }else{
                throw new Error("faild fetch3")
            }
        }
    } catch (error) {

        return "Some thing went wrong"
    }
}  


export  const fethcadminData=async()=>{
    try {
    
        const fetchApi=await fetch(site_url+"getadmininfo",{cache:"no-store" })

        const jsCon=await fetchApi.json()

        return jsCon
    } catch (error) {
        return error
    }
}  

 export const doQuizdlt=async(formData)=>{
    try {
        const id=await formData.get("action")
        const res=await fetch(site_url+"deletequiz",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({quizid:id})
        })
        if(res.ok){
            const jsCon=await res.json()
          console.log(jsCon)
        }else{
            console.log("Something went wrong")
        }
        
   
    } catch (error) {
        console.log("error")
    }
}



export  const doLogout=async(formData)=>{
 const data=formData.get("action")   
 if(cookies().has("slip") && data=="logout"){
    cookies().delete("slip")
    redirect("/admin")
 }

}


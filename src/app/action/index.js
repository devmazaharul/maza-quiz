"use server"
import { site_url } from "@/siteurl"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export  const fethcData=async()=>{
    try {
        
        const fetchApi=await fetch(site_url+"quiz",{
            cache:"no-store"
        })
        const jsCon=await fetchApi.json()


        return jsCon
    } catch (error) {
        return "Some thing went wrong"
    }
}  
export  const fethcadminData=async()=>{
    try {
        const token=cookies().get("token")
   
        const fetchApi=await fetch(site_url+"admin/getadmindata",{
            cache:"no-store",
            method:"POST",
            headers:{  
                "Content-type":"application/json"
            },
            body:JSON.stringify({token_code:token.value})
        })
        const jsCon=await fetchApi.json()

        return jsCon
    } catch (error) {
        return error
    }
}  

export  const doLogout=async(formData)=>{
 const data=formData.get("action")   
 if(cookies().has("token") && data=="logout"){
    cookies().delete("token")
    redirect("/admin")
 }

}


import { cookies } from "next/headers"

export const getAdmindetails=async()=>{
    try {
        const token=cookies().get("token")
        if(!token){
            return "invalid attempt"
        }else{
            const getAdminde=await fetch("api/admin/getadmindata",{
                cache:"no-store"
            })
            if(getAdminde.ok){
                if(getAdminde.status==200){
                    return getAdminde.json()
                }else{
                    return "no data found"
                }
            }
        }
    } catch (error) {
        
    }
}
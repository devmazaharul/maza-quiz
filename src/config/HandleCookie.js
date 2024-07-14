import { redirect } from "next/dist/server/api-utils"
import { cookies } from "next/headers"

export const logout=async()=>{
   if( cookies().has("token")){
    cookies().delete("token")
    redirect("/admin")
   }
}
import { cookies } from "next/headers"

export const setCookie=async()=>{
   return cookies().set({
        name:"mazaharul",
        value:"1562maza"
    })
}
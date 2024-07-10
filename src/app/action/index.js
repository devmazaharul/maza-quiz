import { site_url } from "@/siteurl"

export const fethcData=async()=>{
    try {
        const fetchApi=await fetch(site_url+"users")
        const jsCon=await fetchApi.json()
        return jsCon
    } catch (error) {
        return "Some thing went wrong"
    }
}
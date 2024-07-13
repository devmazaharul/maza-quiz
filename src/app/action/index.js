import { site_url } from "@/siteurl"

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



import {AdminLoginform} from './AdminLoginform'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function generateMetadata({ params }) {
  return {
    title: 'Admin Login'

  }
}




export default function page() {

const getCookie=()=>{
  if(cookies().get("slip")){
    redirect("/dashboard")
  }
}

getCookie()

  return (
    <div>
        <AdminLoginform/>
   

    </div>
  )
}

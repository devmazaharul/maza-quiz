
import { redirect } from 'next/navigation'
import Navbar from './Navbar'
import { cookies } from 'next/headers'

export default function layout({children}) {

  if(!cookies().get("slip")){
    redirect("/admin")
  }


  return (
    <div className='grid text-gray-200 grid-cols-5 '>
    <div className='col-span-1'>
        <Navbar/>
    </div>
<div className='col-span-4'>
    {children}
</div>
</div>
  )
}

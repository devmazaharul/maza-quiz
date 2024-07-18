"use client"
import { getcertificateData } from '@/app/action'
import { site_url } from '@/siteurl'
import axios from 'axios'
import { Arvo,Sanchez } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const speaceGrotic=Arvo({
  style:"italic",
  weight:"400",
  subsets:["latin"]
})
const Sanchez_font=Sanchez({
  style:"normal",
  weight:"400",
  subsets:["latin-ext"]
})

export default  function Formcer() {
  const [data, setdata] = useState([])
    const {id}=useParams()

//   const {cData}=await getcertificateData(61027)
// const crInfo=cData.data.data

useEffect(()=>{
    axios.post(site_url+"getcertificate",{id}).then((res)=>{
      setdata(res.data.data)
      
    })
    
  

},[id])


const handlePrint=()=>{
  print()
}


return (
 <>
 
{data && (
   <div className={`${Sanchez_font.className}`}>
   <div className="mailCr border text-center print:mt-20 print:border-none border-gray-800 px-4 py-6 mt-10 pb-10 mx-auto print:h-[500px]  w-[90%] print:w-[90%] md:w-[60%] rounded-md shadow-md">
       <div className="crHeadlogo ">
           <Image src={'/Maza-quiz__2_-removebg-preview.png'} className='text-center w-fit mx-auto' width={100} height={100} alt="siteloog"/>
       </div>
       <div>
         <h1 className='text-2xl '>Your skill certificate</h1>
       </div>
       <div>
         <h1 className='text-md text-gray-400'>present to</h1>
       </div>
       <div className='pt-1 pb-3'>
         <h1 className={`${speaceGrotic.className} text-xl text-semibold text-emerald-500 uppercase`}>{data.candidateName}</h1>
       </div>
       
       <div>
         <h1 className='text-gray-400'> <p className={`${data.candidateGrade=="fail"?"text-red-400 capitalize":"text-green-500"}  inline gap-2 text-center text-lg`}>{data.candidateGrade}</p> For Successfully completing a online cources. </h1>
       </div>
       <div className='py-1'>
         <h1 className='text-md'>{data.candidateTitle}</h1>
       </div>
       <div className='pt-4'>
         <small className='text-gray-500 font-semibold'>Powered by</small>
       </div>
       <div>
         <h1 className='text-gray-300'>Maza learning Academy</h1>
       </div>
       <div>
         <Link target='_black' href={'https://dev-maza.vercel.app/'}><small className='text-gray-500 text-sm'>www.mazaharul.dev</small></Link>
       </div>
      
   </div>
   <button onClick={handlePrint} className='bg-emerald-600 mx-auto w-fit block text-center my-3 px-8 py-2 rounded-md print:hidden'>Print </button>
</div>

)}

 </>
)
}
 

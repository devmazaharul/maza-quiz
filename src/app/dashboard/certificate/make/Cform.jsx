"use client"
import { site_url } from '@/siteurl'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
export default function Cform() {
    const [info, setinfo] = useState({
        candidateName:"",
        candidateNumber:"",
        candidateGrade:"",
        candidateTitle:"",
    })

    const [loading,setLoading]=useState(false)
    const [error, seterror] = useState(null)
    const handleChange=(e,name)=>{
        setinfo({...info,[name]:e.target.value})
    }



const handleSubmit=async(e)=>{

    e.preventDefault()
    setLoading(true)
 
    try {
        const postCertificateData=await axios.post(site_url+"genaratecertificate",{info})
    
        if(postCertificateData.status==200){
           toast.success(postCertificateData.data.message)
           setLoading(false)
           setinfo({
            candidateName:"",
            candidateNumber:"",
            candidateGrade:"",
            candidateTitle:"",
        })
        }else if(postCertificateData.status==201){
            toast.error(postCertificateData.data.message)
            setLoading(false)
        }
        else if(postCertificateData.status==202){
            toast.error(postCertificateData.data.message)
            setLoading(false)
        }
        else if(postCertificateData.status==203){
            toast.error(postCertificateData.data.message)
            setLoading(false)
        }
        
    } catch (error) {
       toast.error("Connection error")
       setLoading(false)
    }
}


  return (


<>
       
        <form onSubmit={handleSubmit} className='bg-gray-800 rounded-md shadow-md w-[600px] mx-auto py-8 px-3'>
        <h1 className='text-emerald-400 text-center text-xl pb-3'>certificate form</h1>
            <input type="text" placeholder='Candidate name' onChange={(e)=>handleChange(e,"candidateName")}  value={info.candidateName} className='w-full capitalize outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600'  />
            <input type="text" placeholder='Candidate Number'  onChange={(e)=>handleChange(e,"candidateNumber")}  value={info.candidateNumber} className='w-full outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600'  />
           
           <select  onChange={(e)=>handleChange(e,"candidateGrade")} className='w-full outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600' name="grade" value={info.candidateGrade}>
            <option>Grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="fail">Fail</option>
           </select>
            <input type="text" placeholder='Candidate Title'  onChange={(e)=>handleChange(e,"candidateTitle")}  value={info.candidateTitle} className='w-full capitalize outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600'  />
            <button className='bg-indigo-500 my-2 px-8 py-2 rounded-md '>{loading?"Genarating...":"Genarate"}</button>
        </form>
    </>
  
  )
}

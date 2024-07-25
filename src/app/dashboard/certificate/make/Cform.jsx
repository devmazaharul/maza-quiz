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
       
        <form onSubmit={handleSubmit} className='rounded-md shadow-3xl  w-[600px] mx-auto py-8 px-3'>
        <h1 className='text-gray-200 text-center text-xl  pb-3'>Certificate <p className='text-pink-500 inline text-2xl'>form</p></h1>
            <input type="text" placeholder='Candidate name' onChange={(e)=>handleChange(e,"candidateName")}  value={info.candidateName} className='w-full capitalize outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600'  />
            <input type="number" placeholder='Candidate Number'  onChange={(e)=>handleChange(e,"candidateNumber")}  value={info.candidateNumber} className='w-full outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600'  />
           

           <select  onChange={(e)=>handleChange(e,"candidateTitle")}  value={info.candidateTitle} required  className='w-full border-none outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600' name="grade" >
            <option value="">Topic</option>
            <option value="Web Design">Web Design</option>
            <option value="Grapich Design">Grapich Design</option>
            <option value="basic computer">Basic Computer</option>
            <option value="ms word and excel">MS Word And Excel</option>
            <option value="ms word and excel">Social Media Manage</option>
            <option value="Data Entry">Data Entry</option>
            <option value="facebook marketing">Facebook Marketing</option>
            <option value="youtube marketing">Youtube Marketing</option>
            <option value="Google Marketing">Google Marketing</option>
            <option value="SEO">SEO</option>
            <option value="other">Other</option>
           </select>

           <select  onChange={(e)=>handleChange(e,"candidateGrade")} className='w-full border-none outline-none my-1 py-2 px-4 rounded-md border border-gray-700 bg-gray-600' name="grade" value={info.candidateGrade}>
            <option value="fail">Grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="fail">Fail</option>
           </select>

            <button className='bg-pink-600 hover:bg-pink-700 my-2 px-8 py-2 rounded-md '>{loading?"Genarating...":"Genarate"}</button>
        </form>
    </>
  
  )
}

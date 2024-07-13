"use client";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Usercontext } from "../contex/Contextapi";

export function AdminLoginform() {



  const {isDark,setisDark}=useContext(Usercontext)


const router=useRouter()
const [otp, setOtp] = useState(false);
const [otpval,setOtpval]=useState("")
const [loading,setLoading]=useState(false)


const handleSendmail=(e)=>{
  e.preventDefault()
  setLoading(true)
  const sendMail=async()=>{
    const mailapi=await fetch("api/admin/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({confirm_code_status:true})
    })
    if(mailapi.ok){
      const jsCon=await mailapi.json()
     if(mailapi.status==200){
      toast.success("OTP send")
      setLoading(false)
      setOtp(true)
     }
    }else{
      console.log("No data found")
      setLoading(false)
      toast.error("Connection error")

    }

  }
  sendMail()
}



const handlesubmit=async(e)=>{
  e.preventDefault()
  console.log(otpval)
  setLoading(true)
  const mailapi=await fetch("api/admin/loginwithcode",{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({confirm_code:otpval})
  })
  if(mailapi.ok){
    const jsCon=await mailapi.json()
   if(mailapi.status==200){

    toast.success("Successfully login")
    setLoading(false)
    setOtpval("")
    router.push("/dashboard")


   }else if(mailapi.status==201){
    toast.error(jsCon.message)
    setLoading(false)
   }else if(mailapi.status==202){
    toast.error(jsCon.message)
    setLoading(false)
   }else if(mailapi.status==203){
     toast.error(jsCon.message)
    setLoading(false)
   
   }
  }else{
    setLoading(false)
    toast.error("Faild to login")
  }
}


  return (
    <>
  <div className="mt-14">
  <h1 className={`${isDark?"text-center text-gray-200  font-semibold text-lg":"text-center text-gray-800 py-6 font-semibold text-lg"}`}>Admin login </h1>
      {otp ? (
      <form onSubmit={handlesubmit} className={`md:w-[30%] w-[95%] py-8  p-4 text-white rounded-md  mx-auto  ${isDark?"bg-gray-800 border-gray-700":"bg-gray-100 border-gray-300"} border shadow-md "`}>
          <input
            type="tel"
            placeholder="Enter OTP"
            maxLength={5}
            className={`{${isDark?"bg-gray-700 text-gray-200":"bg-gray-100 border text-gray-700 border-gray-400"}}  my-3 outline-none  px-3 py-2 w-full rounded-md `}
            value={otpval}
            onChange={(e)=>setOtpval(e.target.value)}
          />
          <button
          onClick={() => setOtp(true)}
          className="bg-emerald-600  outline-none text-emerald-200  px-7 py-2 w-[160px] hover:bg-emerald-800 mx-auto flex items-center gap-1 rounded-md "
        >
     {loading ? "Entering...":"Enter admin"}
        </button>
{otp &&  <p ><small className="text-green-600 w-fit mx-auto  text-center flex items-center gap-1  py-4 "><MdOutlineMarkEmailRead/>Code send at ex****l@gmail.com</small></p>}
      </form>
        ) : (
          ""
        )}
   {!otp?(
       <button
       onClick={handleSendmail}
       className="bg-emerald-600 mt-4  outline-none text-emerald-200  px-7 py-2 w-[160px] hover:bg-emerald-800 mx-auto flex items-center gap-1 rounded-md "
     >
   {loading ? "sending...":<p className="flex items-center">Send code <FiSend /></p>}  
     </button>
   ):""}

  </div>

    </>
  );
}

import { Adminlogimodel } from "@/app/model/AdminModel";
import { Dbcon } from "@/config/Dbcon";
import { sendEmail } from "@/config/Mailer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST=async(req)=>{
    try {
        await Dbcon()
        const {confirm_code}=await req.json();
        if(confirm_code.length==5){
            const getAdmin=await Adminlogimodel.findOne({loginCode:confirm_code})
           if(getAdmin){
           getAdmin.adminStatus="authorize"+confirm_code
           getAdmin.lastLogin=new Date().toLocaleDateString()+" - " +new Date().toLocaleTimeString()

           const updateStatement=await getAdmin.save()

           if(updateStatement){
            const mailBody=`
            <p style="line-height:24px;font-family: monospace;"><h3>Welcome to Quiz Test</h3> 
            <br> Are you logging in? If not, take action.
             </p>`

            cookies().set({name:"token",value:getAdmin._id})
            await sendEmail("expertmazaharul@gmail.com","Login attempt",mailBody)

            return NextResponse.json({message:"Successfully login",},{status:200})
           }else{
            return NextResponse.json({message:"Please try again later",},{status:202})
           }
           }else{
            return NextResponse.json({message:"Invalid OTP",},{status:203})
           }
        }else{
            return NextResponse.json({message:"Code must be 5 digit",},{status:201})
        }
   
   
     
    } catch (error) {
        return NextResponse.json({message:"Connection error",},{status:500})
    }
}
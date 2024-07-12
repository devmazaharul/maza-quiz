import { Adminlogimodel } from "@/app/model/AdminModel";
import { NextResponse } from "next/server";
import Randomstring from "randomstring";
import { sendEmail } from "./Mailer";
import { Dbcon } from "@/config/Dbcon";
export const POST=async(req)=>{
    try {
        await Dbcon()
        const {confirm_code_status}=await req.json()
        if(confirm_code_status){

            const genCode=Randomstring.generate({length:5,charset:"numeric"})
            const findUser=await Adminlogimodel.findOne({email:"expertmazaharul@gmail.com"})
            findUser.loginCode=genCode
          const updateCode= await findUser.save()
          if(updateCode){
            await sendEmail("expertmazaharul@gmail.com",genCode)
            return NextResponse.json({message:"Send mail",},{status:200})
          }else{
            return NextResponse.json({message:"Faild Send mail",},{status:402})
          }
            
        }
    } catch (error) {
        return NextResponse.json({message:"server error",},{status:500})
    }
}
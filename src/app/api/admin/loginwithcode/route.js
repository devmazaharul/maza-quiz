import { Adminlogimodel } from "@/app/model/AdminModel";
import { Dbcon } from "@/config/Dbcon";
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

           const updateStatement=await getAdmin.save()

           if(updateStatement){
            cookies().set({name:"mazaharul",value:"maza123"})
            return NextResponse.json({message:"Successfully login",},{status:200})
           }else{
            return NextResponse.json({message:"Something went wrong",},{status:202})
           }
           }else{
            return NextResponse.json({message:"No user found",},{status:203})
           }
        }else{
            return NextResponse.json({message:"Code must be 5 digit",},{status:201})
        }
   
   
     
    } catch (error) {
        return NextResponse.json({message:"server error",},{status:500})
    }
}
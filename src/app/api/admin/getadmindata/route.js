import { NextResponse } from "next/server";

import { Dbcon } from "@/config/Dbcon";
import { Adminlogimodel } from "@/app/model/AdminModel";

export const POST=async(req)=>{
    try {
        await Dbcon()
        const {token_code}=await req.json()
    
            const findAdmin=await Adminlogimodel.findOne({_id:token_code})
          if(findAdmin){
      
            return NextResponse.json({message:"Success",data:findAdmin},{status:200})
          }else{
            return NextResponse.json({message:"Faild Get data",},{status:201})
          }
            
        
    } catch (error) {
        return NextResponse.json({message:"server error",},{status:500})
    }
}
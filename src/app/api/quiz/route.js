import { NextResponse } from "next/server";
import { QuizModel } from "@/app/model/Quizmodel";
import { Dbcon } from "@/config/Dbcon";

export const GET=async(req)=>{
    try {
    await Dbcon()
        const getAlluser=await QuizModel.find()
        if(getAlluser.length>0){
            return NextResponse.json({data:getAlluser,status:200,msg:"Successfully "})
        } else{
            return NextResponse.json({data:getAlluser,status:200,msg:"Faild"})
        }
    } catch (error) {
        return NextResponse.json({status:500,msg:"Server error"})
    }
}
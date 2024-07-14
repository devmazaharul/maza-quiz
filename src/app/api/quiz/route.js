import { NextResponse } from "next/server";

import { Dbcon } from "@/config/Dbcon";
import { QuizModel } from "@/app/model/Quizmodel";

export const GET=async(req)=>{
    try {
    await Dbcon()
        const getAlluser=await QuizModel.find()
        if(getAlluser.length>0){
            return NextResponse.json({data:getAlluser,msg:"Successfully "},{status:200})
        } else{
            return NextResponse.json({data:getAlluser,msg:"Faild"},{status:201})
        }
    } catch (error) {
        return NextResponse.json({msg:"Server error"},{status:500})
    }
}
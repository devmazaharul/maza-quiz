import { NextResponse } from "next/server";
import { QuizModel } from "@/app/model/Quizmodel";
import { Dbcon } from "@/config/Dbcon";
import Randomstring from "randomstring";
export const POST=async(req)=>{
    try {
        await Dbcon()
        const {data}=await req.json()
        const {title,desc}=data;
        const insertQuizdata=new QuizModel({
            quizId:Randomstring.generate({charset:"numeric",length:7}),
            title,
            desc,
            insertDate:new Date().toLocaleDateString()+" - " + new Date().toLocaleTimeString()
        })

        const insertsave=await insertQuizdata.save()
        console.log(insertQuizdata)
        if(insertsave){
            return NextResponse.json({message:"successfully quiz added"},{status:200})
        }else{
            return NextResponse.json({message:"Faild to added quiz data"},{status:201})
        }



       
    } catch (error) {
        return NextResponse.json({message:"Server Error"},{status:500})
    }
}
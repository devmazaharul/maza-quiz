import { Adminlogimodel } from "@/app/model/AdminModel";
import { NextResponse } from "next/server";
import Randomstring from "randomstring";
export const POST=async(req)=>{
    try {
        const {send}=await req.json()
        if(send){
            const Inserquery=new Adminlogimodel({
                id:"admin"+Randomstring.generate({charset:"numeric",length:5}),
                name:"Mazaharul islam",
                email:"expertmazaharul@gmail.com",
                adminStatus:"unauthorize",
                loginCode:Randomstring.generate({charset:"numeric",length:5}),
                lastLogin:new Date().toLocaleDateString()+"-"+new Date().toLocaleTimeString()
            })
            await Inserquery.save()
            return NextResponse.json({message:"successfully data inserted ",},{status:200})
        }else{
            return NextResponse.json({message:"Faild to create accout ",},{status:401})
        }
       
    } catch (error) {
        return NextResponse.json({message:"server error",},{status:500})
    }
}
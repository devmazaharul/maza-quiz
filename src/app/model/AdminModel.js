import mongoose from "mongoose";

const AdminloginSchima=mongoose.Schema({
    id:String,
    name:{
        type:String,
        require:true,
    },email:{
        type:String,
        require:true
    },
    loginCode:{
        require:true,
        type:Number
    },
    adminStatus:{
  
        type:String
    },
    lastLogin:{
        type:String,
        require:true
    }
})

export const Adminlogimodel=mongoose.models.adminlogin || mongoose.model("adminlogin",AdminloginSchima)


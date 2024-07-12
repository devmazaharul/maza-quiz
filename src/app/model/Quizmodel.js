const mongoose=require("mongoose")

const HisabUserSchima=new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    currency:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    profileInfo:{
        type:Object,
        require:true
    },
    creationDatae:{
        type:String,
        require:true
    },
    activationKey:{
        type:String,
        require:true
    },
    activationStatus:{
        type:String,
        require:true
    }
},{timestamps:true})

export const QuizModel=mongoose.models.hisabuser || mongoose.model("hisabuser",HisabUserSchima)

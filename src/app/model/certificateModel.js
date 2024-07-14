const mongoose=require("mongoose")

const certificateSchima=new mongoose.Schema({
    crId:{
        type:String,
        require:true
    },
    candidateName:{
        type:String,
        require:true
    },
    courcesTile:{
        type:String,
        require:true
    },
    courcesDesc:{
        type:String,
        require:true
    },
    genarateDate:{
        type:String,
        require:true
    }
   
})

export const certificateModel=mongoose.models.certificateTable || mongoose.model("certificateTable",certificateSchima)

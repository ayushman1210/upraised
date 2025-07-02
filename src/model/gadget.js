const mongoose =require('mongoose');

const gadgetSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name of gadget is required"]
    },
    status:{
        type:String,
        enum:["Available","Deployed","Destroyed","Decommissioned"]
    }
})

const gadget=new mongoose.model("gadget",gadgetSchema);

module.exports=gadget;
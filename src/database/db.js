const mongoose=require('mongoose');


const connectdb=async(URL)=>{
    await mongoose.connect(URL);
}


module.exports=connectdb;
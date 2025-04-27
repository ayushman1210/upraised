const express=require('express');
const gadget = require('./src/routes/gadget');
const connectdb = require('./src/database/db');
require('dotenv').config();
const app=express();

const port=process.env.PORT;

app.use(express.json())
app.use('/api/v1/',gadget)
app.listen(port,async()=>{
 
    console.log(`${port},started to losten`)
    await connectdb(process.env.MONGO_URI);
    console.log("database connnected ")
})
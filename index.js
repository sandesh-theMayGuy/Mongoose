import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import studentModel from "./models/studentModel.js";
import studentRoute from "./routes/studentRoute.js"




const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());


app.use("/student",studentRoute);




app.listen(PORT, async (err)=>{
    if(err){
        console.log(err);
    }else{

        
        console.log(`Listening at port ${PORT}`);

        try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log('Connected to DB....');
        }catch(err){
            console.log(err);
        }
    }


});




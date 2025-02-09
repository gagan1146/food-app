import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()

export const ConnectDB = async ()=>{
    await mongoose.connect(process.env.mongo_uri)
    .then(()=>{console.log("DB Connected")});
}


import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.URI).then(()=>console.log("DB connected")).catch(()=>console.log("Not Connected"));
}
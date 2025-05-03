import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gagansharma99690:asdf@cluster0.ldwzn.mongodb.net/food-del').then(()=>console.log("DB connected")).catch(()=>console.log("Not Connected"));
}
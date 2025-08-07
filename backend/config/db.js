import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://roysupriyajacloud:4036171103@cluster0.8gzqa.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
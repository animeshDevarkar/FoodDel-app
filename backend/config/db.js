import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://animeshfooddel:1209348756@cluster0.ug069bt.mongodb.net/food-del').then(() => {
        console.log("MongoDB connected successfully");
    })
} 
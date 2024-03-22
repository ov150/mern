import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("database connected...");
    } catch (error) {
        console.log("database connection error",error);
    }
}

export default connectDB;
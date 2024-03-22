import express from "express";
import dotenv from "dotenv"
import authRoute from "./routes/auth.routes.js"
import contactRoute from "./routes/contact.routes.js"
import connectDB from "./utils/db.js";
const app = express();
const PORT = 5000 || process.env.PORT

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`App is working on port : ${PORT}`);
})

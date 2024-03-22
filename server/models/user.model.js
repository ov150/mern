import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    }
},{timestamps:true});

userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin, 
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "15d",
        }
        )
    }catch(error){
        console.log(error);
    }
}

const User = new mongoose.model("User", userSchema);


export default User;

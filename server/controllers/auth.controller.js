import User from "../models/user.model.js";
import bcrypt from "bcrypt"

const Home = async (req, res)=>{
    try {
        res.send(" home page again")
        
    } catch (error) {
        console.log(error);
    }
}

const Register = async (req, res)=>{
    try{
        const { username , email, phone , password } = req.body;
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({msg:"email already exists "});
        }

        const saltRound = 10;
        const hash_pass = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password: hash_pass,
         });
        res.status(201).json({
            msg:userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(),
         });
    }
    catch(error){
        console.log(error);
    }
}


const Login = async (req, res) => {
    try {
        const { email , password} = req.body;
        const userExist = await User.findOne({ email });

        if(!userExist){
            return res.status(400).json({msg:"invalid cradentials"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({
                msg:"Login successfully",
                token:await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({msg:"invalid email or password"})
        }

    } catch (error) {
        console.log(error);
    }
}

export { 
    Home, 
    Register,
    Login 
}


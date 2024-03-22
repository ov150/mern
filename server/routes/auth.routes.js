import express from "express";
import {
    Home, Register, Login
} from "../controllers/auth.controller.js"

const router = express.Router();


router.route("/").get(Home);
router.route("/register").post(Register);
router.route("/login").post(Login);



export default router 

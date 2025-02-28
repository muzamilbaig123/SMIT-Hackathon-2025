import express from "express";
import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();


router.post("/", async (req, res, next) => {
    
    try{
        const {email, password} = req.body;

        const emailLowercase = email.toLowerCase();

        const findedUser = await UserModel.findOne({email: emailLowercase});

        //agr user nahi hai tw
        if(!findedUser){
            const error = new Error("No User Found!");
            error.statusCode = 400;
            throw error;
        }

        //password check
        const passwordCheck = await bcrypt.compare(password, findedUser.password);

        // user ney galat password dala ho tw
        if(!passwordCheck){
            const error = new Error("Password Not Match");
            error.statusCode = 400;
            throw error;
        }


        // humey confirmation ho gai hai user ney sign in karliya hai hum user aik token denin gai 
        // id = genertor = require('crypto').randomBytes(32).toString("hex")

        const acceseToken = jwt.sign({email: emailLowercase, userId: findedUser._id}, process.env.ACCESS_TOKEN_KEY, {expiresIn: '7d'});

        res.status(200).json({message: 'success', status: true, token: acceseToken})



    }catch(e){
        next(e)

    }


})

export default router
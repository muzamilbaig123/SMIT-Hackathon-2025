import express from "express";
import registerModel from "../models/user.js";
import bcrypt from "bcrypt";
import joi from "joi";


const router = express.Router();


function validateUser (data) {
    const userSchemaValidate = joi.object({
        name: joi.string().min(4).required(),
        email: joi.string().email().required(),
        cnic: joi.string().max(14).required(),
        password: joi.string().min(6).max(22).required(),
    });

    return userSchemaValidate.validate(data)

}


router.post("/", async (req, res) => {

    const {error: validationError} = validateUser(req.body);

    try{

        const {name, email, cnic, password} = req.body;


        if(validationError){
            const error = new Error(validationError.details[0].message);
            error.statusCode = 400;
            throw error;
        }


        const userName = name.toLowerCase();
        const userEmail = email.toLowerCase();

        const userFind = await registerModel.findOne({email: userEmail}); 
            if(userFind){
                const error = new Error("User Already Exists");
                error.statusCode = 400
                throw error;
            }

        const handlePassword = await bcrypt.hash(password, 10);
        
        const newUser = new registerModel({
            name: userName,
            email: userEmail,
            cnic: cnic,
            password: handlePassword
        });

        await newUser.save();
        return res.status(200).json({message: "User Registerted Succfully", status: true})
        // res.send(saveUser);
           
    }   
    catch(e){
        console.log(`create time error ${e}`)
        res.status(e.statusCode || 500).json({message: e.message || "Internal server error"})
    }
});

export default router;



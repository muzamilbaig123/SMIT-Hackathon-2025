import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    
    const { token } = req.body;

    try {

        if (!token) {  
            return res.status(400).json({ ok: false, message: "Token nahi mila!" });  
        }  

        const findUser = await User.findOne({'otp.token': token}).select('otp');
        
        if(!findUser){
            const err = new Error('something went wrong');
            err.statusCode = 400;
            throw err;
        }


        res.status(200).json({message: 'success', status: true, sendTime: findUser.otp.sendTime})


    } catch (e) {
        console.log(e);
        next(e);
    }
});

export default router;





import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    
    const { otp } = req.body;

    try {
        // Find user by OTP
        const findUser = await User.findOne({ 'otp.otp': otp }); 

        if (!findUser) {
            const err = new Error('Invalid OTP'); 
            err.statusCode = 400;
            throw err;
        }

        // Fix OTP expiration logic
        const otpSendTime = new Date(findUser.otp.sendTime);
        const expirationTime = new Date(otpSendTime.getTime() + 5 * 60 * 1000); 

        if (new Date().getTime() > expirationTime.getTime()) {
            const err = new Error('OTP expired');
            err.statusCode = 400;
            throw err;
        }

        // // OTP is valid, clear it and respond
        // findUser.otp.otp = null;
        // await findUser.save();

        // OTP verify hone ke baad null na karein, sirf verified flag set karein
        findUser.otp.verified = true;
        await findUser.save();






        res.status(200).json({ message: "OTP verified", status: true });

    } catch (e) {
        console.log(e);
        next(e);
    }
});

export default router;







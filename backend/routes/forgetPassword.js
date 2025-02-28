import express from "express";
import User from "../models/user.js";
import crypto from "crypto";
import sendMail from "../utils/sendMail.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
    const { email } = req.body;

    try {
        const formatEmail = email.toLowerCase();
        const userFind = await User.findOne({ email: formatEmail });

        if (!userFind) {
            const error = new Error("User Not Found!");
            error.statusCode = 404;
            throw error;
        }

        // Corrected timestamp calculation
        if (userFind.otp?.sendTime) {
            const lastRequestTime = new Date(userFind.otp.sendTime).getTime();
            const cooldownEnd = lastRequestTime + 60000;
            
            if (Date.now() < cooldownEnd) {
                const remainingTime = new Date(cooldownEnd);
                const error = new Error(
                    `Please wait until ${remainingTime.toLocaleTimeString()} before requesting another OTP`
                );
                error.statusCode = 429;
                throw error;
            }
        }

        // Generate new OTP
        const otp = Math.floor(Math.random() * 90000) + 100000;
        const token = crypto.randomBytes(32).toString("hex");

        // Update user record
        userFind.otp = {
            otp: otp,
            sendTime: Date.now(),
            token: token,
        };

        await userFind.save();

        // Send mail
        sendMail(otp, formatEmail);

        res.status(200).json({
            message: "Please check your email for OTP",
            status: true,
            token,
        });
    } catch (e) {
        next(e);
    }
});


export default router;

import nodemailer from "nodemailer";

export default function sendMail (otp, email) { 

    try{
    const transporter = nodemailer.createTransport({
        service: 'GMAIL',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
            
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to:email,
        subject: 'Reset Password Otp',
        html: `<div>${otp}</div>`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            throw new Error('failed to send mail')
        }
    })

    }catch(e){
        console.log(e.message)
    }


} 



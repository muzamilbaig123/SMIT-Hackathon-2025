import express from "express";
import userModel from "../models/user.js"

const router = express.Router(); 


router.post("/", async (req, res) => {
    try{
        const user = new userModel(req.body);
        const saveUser = await user.save();
        res.send(saveUser);
        console.log("Create Data is sucssfully")
        
    }catch(e){
        console.log("Save Time User Error plz Sole")
    }
})


export default router;
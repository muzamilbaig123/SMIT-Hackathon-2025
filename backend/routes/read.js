import express from "express";
const router = express.Router();
import userModel from "../models/user.js";

router.get("/", async (req, res) => { 
    try{
        const user = await userModel.find({});
        res.send(user)
        console.log("Reading Start")
    }catch(e){
        console.log(`Reading User Time Error ${e}`)
    }

})

export default router;
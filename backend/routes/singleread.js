import express from "express";
const router = express.Router();
import userModel from "../models/user.js";

router.get("/:id", async (req, res) => { 

    const id = req.params.id;

    try{
        const user = await userModel.findOne({_id: id});
        res.send(user)
        console.log("Reading Start only one")
    }catch(e){
        console.log(`Reading only one time Error ${e}`)
    }

})

export default router;
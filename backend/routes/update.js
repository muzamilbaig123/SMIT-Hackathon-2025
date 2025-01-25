import express from "express";
const router = express.Router();
import userModel from '../models/user.js';


router.put("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const user = await userModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
        res.send(user);
        console.log("User Updated"); 
    }catch(e){
        console.log(`Update Time Error ${e}`)
    }
})

export default router;

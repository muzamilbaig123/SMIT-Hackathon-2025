import express from "express";
const router = express.Router();
import userModel from "../models/user.js"

router.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete({_id: id});
        res.send(user);
        console.log("Deleted")
    }
    catch(e){
        console.log(`delete Time Error Plz Solve ${e}`)
    }
})

export default router;
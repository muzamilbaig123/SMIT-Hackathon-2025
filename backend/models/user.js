import mongoose from "mongoose";

const crudScheme = new mongoose.Schema({
    sn: {
        type: Number
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export default new mongoose.model("crud", crudScheme)
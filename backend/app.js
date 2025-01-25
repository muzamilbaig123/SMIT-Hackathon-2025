import express from "express";
import mongoose from "mongoose";
import create from "./routes/create.js";
import read from "./routes/read.js";
import singleRead from "./routes/singleread.js"
import update from "./routes/update.js";
import dotenv from "dotenv";
import deleteUser from "./routes/delete.js" 


dotenv.config();
const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log("=====DB is Succfully Connected!=====")
}).catch((err) => {
    console.log(`DB Connection Error ${err}`)
})


app.use((req, res, next) => {
    next();
});
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World")
});

app.use("/create", create)
app.use("/read", read)
app.use("/singleread", singleRead)
app.use("/update", update)
app.use("/delete", deleteUser)





app.listen(port, () => {
    console.log(`=====Server is running=====`)
})


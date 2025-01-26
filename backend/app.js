import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.js"
import loans from "./routes/loans.js"
import admin from "./routes/admin.js"


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


app.use("/api/auth", auth)
app.use("/api/loans", loans)
app.use("/api/admin", admin)




app.listen(port, () => {
    console.log(`=====Server is running=====`)
})


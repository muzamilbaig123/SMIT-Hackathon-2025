import express from "express";
import dotenv from "dotenv";
import register from "./routes/register.js";
import login from "./routes/login.js";
import forgetPassword from "./routes/forgetPassword.js";
import verifyOtp from "./routes/verifyOtp.js";
import verifyOtpTime from "./routes/verifyTime.js";
import home from "./routes/home.js";
import getConnectDb from "./utils/getconection.js";
import cors from "cors";


dotenv.config();
export const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))


const port = process.env.PORT;

app.use((req, res, next) => {
    next();
});
app.use(express.json());


app.use("/", home)
app.use("/register", register);
app.use("/login", login);
app.use("/forgetPassword", forgetPassword);
app.use("/verifyotp", verifyOtp);
app.use("/verifyTime", verifyOtpTime);



getConnectDb();
app.listen(port, () => {
    console.log(`=====Server is running=====`)
})


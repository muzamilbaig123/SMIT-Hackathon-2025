import mongoose from "mongoose"

export default function getConnectionDb() {

    mongoose.connect(process.env.MONGOOSE_URI).then(() => {
        console.log("=====DB is Succfully Connected!=====")
    }).catch((err) => {
        console.log(`DB Connection Error ${err}`)
    })


}


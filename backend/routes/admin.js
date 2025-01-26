import express from "express";
import auth from "../middleware/auth.js"
import User from "../models/User.js";
import AppLi from "../models/Application.js";



const router = express.Router()


const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    if (user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied. Admin only." })
    }
    next()
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
}

router.get("/applications", [auth, isAdmin], async (req, res) => {
  try {
    const applications = await AppLi.find()
      .populate("user", ["name", "email", "cnic"])
      .populate("loan")
      .sort({ createdAt: -1 })
    res.json(applications)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})


router.put("/applications/:id", [auth, isAdmin], async (req, res) => {
  const { status, appointmentDate } = req.body

  try {
    const application = await AppLi.findById(req.params.id)

    if (!application) {
      return res.status(404).json({ msg: "Application not found" })
    }

    AppLi.status = status
    if (appointmentDate) {
      application.appointmentDate = appointmentDate
    }

    await application.save()

    res.json(application)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})
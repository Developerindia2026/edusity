const express = require("express");
const router = express.Router();
const ApplicationData = require("../models/Application");
const upload = require("../middleware/upload");

router.post("/apply", upload.single("resume"), async (req, res) => {

    try {
        const { name, email, phone, experience, city, jobTitle } = req.body;

        const resumeUrl = req.file.path;

        const application = new ApplicationData({
            name, email, phone, experience, city, jobTitle, resumeUrl, resumeOriginalName: req.file.originalname,
        });

        await application.save();

        res.status(200).json({
            success: true,
            message: "working goodly",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            sucess: false,
            message: "something went wrong",
        });

    };


});

module.exports = router;



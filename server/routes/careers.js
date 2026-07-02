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


// admin panel 

// show resume 
router.get("/admin/dashboard", async (req, res) => {

    try {

        const applications = await ApplicationData.find();

        res.status(200).json({
            sucess: true,
            applications,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "data not coming"
        });

    }

});

// Delete resume 
router.delete("/admin/delete/:id", async (req, res) => {
    try {

        const {id} = req.params;

       await  ApplicationData.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "resume deleted successfully"
        });

    } catch (error) { 
        console.log(error);
        res.status(500).json({
            success: false,
            message: "delete route stopped"
        })
        }
})

module.exports = router;



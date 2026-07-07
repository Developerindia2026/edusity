const express = require("express");
const router = express.Router();
const loginAdmin = require("../Controllers/adminControlers");
const ApplicationData = require("../models/Application");

// login request 
router.post("/login", async (req, res)=> {

    loginAdmin(req, res);

});

//Admin panel Main

//get request
router.get("/", async (req, res) => {

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
router.delete("/delete/:id", async (req, res) => {
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
});



module.exports = router;
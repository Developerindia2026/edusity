require('dotenv').config();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {

    try {

        const { userEmail, userPassword } = req.body;

        // database veryfy 
        const emailVerify = await Admin.findOne({ email: userEmail });
        if (!emailVerify) {
            return (
                res.status(401).json({
                    success: false,
                    message: "email not correct",
                })
            )
        } else {

            const isMatch = await bcrypt.compare(
                userPassword,
                emailVerify.password,
            );

            if (!isMatch) {
                return (

                    res.status(401).json({
                        success: false,
                        message: "password not matced with the system",
                    })

                );
            } else {

                const token = jwt.sign(
                    {
                        adminId: emailVerify._id,
                        adminEmail: emailVerify.email,
                    }, process.env.JWT_KEY, { expiresIn: "7d" }
                )

                res.status(200).json({
                    success: true,
                    token,
                    message: "login verification completed"
                });

            }

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "login admin fn error",
        });
    }
};

module.exports = loginAdmin;




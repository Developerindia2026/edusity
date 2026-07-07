require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const careersRoute = require("./routes/careers");
const contactRoutes = require("./routes/contact");
const adminRoute = require("./routes/admin");
const connectDB = require("./config/db");
connectDB();
const cors = require('cors')
let app = express();
let PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// routes 

app.get("/", (req, res) => {
    res.send("backend working EDUSITY");
});

// contact form 
app.use("/contact", contactRoutes);

// career form 
app.use("/career", careersRoute);

// login route 
app.use("/admin", adminRoute);



app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
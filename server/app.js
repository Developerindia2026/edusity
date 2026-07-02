require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const careersRoute = require("./routes/careers");
const contactRoutes = require("./routes/contact");
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

app.use("/contact", contactRoutes);
app.use("/career", careersRoute);



app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
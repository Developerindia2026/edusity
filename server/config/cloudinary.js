
// setup cloudinary setup 
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDARNY_CLOUD_NAME,
    api_key: process.env.CLOUDARNY_API_KEY,
    api_secret: process.env.CLOUDARNY_API_SECRET,
});

module.exports = cloudinary;

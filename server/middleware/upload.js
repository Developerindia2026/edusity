const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require("../config/cloudinary");


// path on cloudary to store resumes 
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "resumes",
    resource_type: "auto",
    use_filename: true,
    unique_filename: false,
  }),
});


// allowing multer to save file on cloudarny over the local server 
const upload = multer({
    storage,
});

module.exports = upload;
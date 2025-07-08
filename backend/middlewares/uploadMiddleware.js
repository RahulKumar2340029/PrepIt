const multer = require('multer')

// configure storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    // Extract the original extension
    const ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
    // Create a filename with timestamp + original extension
    cb(null, Date.now() + ext)
  }
})


// file filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg','image/png','image/jpg'];
    if(allowedTypes.includes(file.mimetype)) {
        cb(null,true);
    } else {
        cb(new Error('Only .jpeg, .jpg and .png formats are allowed'),false);
    }
}

const upload = multer({storage, fileFilter})

module.exports = upload
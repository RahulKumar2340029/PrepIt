const express = require("express")
const router = express.Router()

const {registerUser, loginUser, getUserProfile} = require("../controllers/auth.controller.js")
const {protect} = require("../middlewares/authMiddleware")
const upload = require("../middlewares/uploadMiddleware.js")

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/profile",protect,getUserProfile)

router.post('/upload-image',upload.single('image'),(req, res)=>{
    if(!req.file){
        return res.status(400).json(
            {message : 'No file uploaded'}
        )
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${
        req.file.filename
    }`;

    res.status(200).json({ imageUrl })
})

module.exports = router
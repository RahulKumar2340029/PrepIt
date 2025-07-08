const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

// Generate jwt token
const generateToken = (userId) =>{
    return jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: "7d"})
}

// @desc Register a user
// @route POST /api/auth/register
// @access PUBLIC

const registerUser = async (req, res) =>{
    try{

        console.log('Inside register')
        const {name, email, password, profileImageUrl} = req.body;

        // check if user already exist 
        const userExists = await User.findOne({ email })
        if(userExists) {
            return res.status(400).json({ message: "User already exists"})
        }


        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl
        })

        // return user data with JWT
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id)
        })
    }catch(error) {
        return res.status(500).json({message :"Internal Server error",error: error.message})
    }
}

// @desc   Login user
// @route   POST /api/auth/login/a
// @access   Public
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(500).json({message: 'Invalid email or password'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(500).json({ message: "Invalid email or password"})
        }
        
        //  return user data with jwt
        res.json({
            _id:user._id,
            email: user.email,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id)
        })

    } catch (error) {
        res.status(500).json({message: "Internal Server Error",error: error.message})
    }
}

// @desc     Get user profile
// @route   GET /api/autg/profile
// @access     Private (Requires JWT)
const getUserProfile = async (req, res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error",error: error.message})
    }
}

module.exports = { registerUser, loginUser, getUserProfile }
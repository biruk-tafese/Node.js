
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
       expiresIn:'30d',
    })
}


// @Des Register new user
// @route POST /api/user
//@access public
const registerUser = asyncHandler(async (req, res)=> {

    const  {name, email, password} = req.body;

    if(!name || !email || !password){
         res.status(400)
         throw new Error('Please add a fields')
    }

    /// Checks if the user exists
    const userExists = await User.findOne({email})

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

     const user = await User.create({
        name,
        email,
        password:hashedPassword
     })

    
     if(user) {
        res.status(201).json({
           __id: user.id,
           name: user.name,
           email: user.email,
           token: generateToken(user._id)
        })
     }else {
        res.status(400)
        throw new Error('Invalid Data')
     }
     
     
})
// @Des Authenticate a user
// @route POST /api/users/login
//@access public
const loginUser =asyncHandler(async (req, res)=> {

     const {email, password} = req.body

    // Check the use email
     const user = await User.findOne({email})

     if(user && (await bcryptjs.compare(password, user.password))) {
       
        res.json({
        __id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
       })
     }
      else {
        res.status(400)
        throw new Error('Invalid Credentials')
     }

    res.json({message:'Login User'})
})

// @Des Get user Data
// @route GET /api/users/me
//@access private
const getMe = asyncHandler(async(req, res)=> {

   //  const {_id, name, email}   = await User.findById(req.user.id)
   // { id: _id, name, email }

     res.status(200).json(req.user)
})




module.exports = {
    registerUser,
    loginUser,
    getMe,
};
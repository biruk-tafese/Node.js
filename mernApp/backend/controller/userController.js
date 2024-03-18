

// @Des Register new user
// @route POST /api/user
//@access public
const registerUser = (req, res)=> {
    res.json({message:'Reqister User'})
}

// @Des Authenticate a user
// @route POST /api/users/login
//@access public
const loginUser = (req, res)=> {
    res.json({message:'Login User'})
}

// @Des Get user Data
// @route GET /api/users/me
//@access public
const getMe = (req, res)=> {
    res.json({message:'User data display'})
}



module.exports = {
    registerUser,
    loginUser,
    getMe,
};
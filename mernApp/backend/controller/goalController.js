const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalmodel');
const User = require('../model/userModel');


// @Des GetGoals
// @route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {

     const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals)
})


// @Des setGoals
// @route POST /api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
    
    if(!req.body.text) {
        res.status(400)
        throw new Error("please add a text field")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})


// @Des updateGoals
// @route PUT /api/goals/:id
//@access private




const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

     if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
     }

//  const user = await User.findById(req.user.id)

// Check for user
 if(!user) {
    res.status(401)
    throw new Error('User not found')
 }

 // Make sure the logged user match the goal user
 if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
 }


     const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
     })
    res.status(200).json(updateGoal)
   
})


// @Des deleteGoals
// @route DELETE /api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal) {
       res.status(400)
       throw new Error('Goal not found')
    }


    const user = await User.findById(req.user.id)

// Check for user
 if(!user) {
    res.status(401)
    throw new Error('User not found')
 }

 // Make sure the logged user match the goal user
 if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
 }
 
    await Goal.deleteOne({ _id: req.params.id });
        res.status(200).json({id: req.params.id})
    
    }  
)




module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,

}
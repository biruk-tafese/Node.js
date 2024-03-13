// @Des GetGoals
// @route GET /api/goals
//@access private
const getGoals = (req, res) => {
    res.status(200).json({message:'get Goal'})
}


// @Des setGoals
// @route POST /api/goals
//@access private
const setGoals = (req, res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error("please add a text field")
    }
    res.status(200).json({message:'Set Goal'})
}


// @Des updateGoals
// @route PUT /api/goals/:id
//@access private
const updateGoals = (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})

}


// @Des deleteGoals
// @route DELETE /api/goals/:id
//@access private
const deleteGoals = (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})

}





module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,

}
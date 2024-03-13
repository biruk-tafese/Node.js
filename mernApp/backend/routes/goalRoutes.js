
const express = require('express')
const {getGoals,setGoals, updateGoals, deleteGoals} = require('../controller/goalController');
const router = express.Router()


// router.get('/', getGoals)
// router.post('/', setGoals)
router.route('/').get(getGoals).post(setGoals);
 
// router.put('/:id',updateGoals)
// router.delete('/:id', deleteGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals);


module.exports = router

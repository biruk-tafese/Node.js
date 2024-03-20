
const express = require('express')
const {getGoals,setGoals, updateGoals, deleteGoals} = require('../controller/goalController');
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

// router.get('/', getGoals)
// router.post('/', setGoals)
router.route('/').get(protect, getGoals).post(protect, setGoals);
 
// router.put('/:id',updateGoals)
// router.delete('/:id', deleteGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect,updateGoals);


module.exports = router

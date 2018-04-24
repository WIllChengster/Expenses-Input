const router = require('express').Router();
const ExpenseModel = require('../models/expense');

router.post('/submit', (req,res) => {
    console.log('reached!')
})

module.exports = router
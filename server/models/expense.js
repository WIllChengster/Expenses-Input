const mongoose = require('mongoose');



const Expense = new mongoose.Schema({
    date: {type: String},
    amount: {type:String},
    reason:{type: String},
})

module.exports = mongoose.model('Expense', Expense)
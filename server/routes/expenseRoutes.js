const router = require('express').Router();
const ExpenseModel = require('../models/expense');

router.post('/submit', (req,res) => {
    console.log(req.body)
    if(req.body.date.length===0 || req.body.amount.length===0 ||req.body.reason.length===0 ){
        console.log('invalid request :'+ req.body)
        res.send('invalid request: '+ req.body)
    } else{
        const expenseData = new ExpenseModel({
            date: req.body.date,
            amount: req.body.amount,
            reason: req.body.reason
        })
        res.send(expenseData);
        console.log('expense input: '+expenseData)
        expenseData.save((err,post)=>{
            if(err){
                return next(err)
            }
        })

    }
})

router.get('/data', (req,res) => {
    ExpenseModel.find().then( data=>{
        console.log('SENDING EXPENSE DATA: ' + data)
        res.send(data);

    } )
})

module.exports = router
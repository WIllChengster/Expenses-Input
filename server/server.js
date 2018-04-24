const express = require('express')
const mongoose = require('mongoose');

const server = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();

const keys = require('./config/keys')
const submitRoute = require('./routes/submit')

//bypass CORS error
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


server.use(express.json())
server.use(express.urlencoded({extended:false}))


//imported routes
server.use('/api', submitRoute)

mongoose.connect(keys.mongoURI, err=>{
    if(err){
        throw err;
    }

    console.log('Successfully connceted to the mLab database!')
})

server.listen(PORT, ()=> {console.log('server is listening to '+PORT)})
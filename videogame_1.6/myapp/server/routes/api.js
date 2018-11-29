const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');   //import player database  

var app=express();
var db = mongoose.connection;

mongoose.Promise = global.Promise; //Promise type avoids warnings mongoose throws

mongoose.connect('mongodb://admin:tiago123@ds263493.mlab.com:63493/user', {useNewUrlParser: true},function(err)
{
    if(err){
        console.error("Error! "+ err);
    }
});

app.listen(3001, ()=>
{
    console.log('listening on 3001');
})


 


module.exports = router;
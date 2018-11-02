var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:Passw0rd@ds249233.mlab.com:49233/video_game_lobby', {useNewUrlParser:true});

var Schema = mongoose.Schema;


//Player Creation
var userSchema = new Schema({name: String,
    rank: Number, score: Number, time:String,
    gamesPlayed:String, status: String});
var User = mongoose.model('User', userSchema);

//Player 1 Creation
var FuRyX = User({name: 'FuRyX ex', rank: 1 , score: 1298995
, time: '1d 12h 32m',  gamesPlayed: 'Overwatch', status: 'active'});
john.save(function(err)
{
    console.log('Player Saved!');
})


var port = process.env.port || 3000;
app.listen(port);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let game = new Schema({
    Title:String,
    Platform: String,
    Genre:String,
    Rating: String,
    Publisher:String,
    Release: Number,
    Status:String
});


module.exports = mongoose.model('game', game);
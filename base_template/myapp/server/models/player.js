const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var playerSchema = new Schema({
    player: String,
    rank: Number,
    score: Number,
    time: String,
    gamesPlayed: String,
    status: String
});

/*var player = mongoose.model('Player', playerSchema);

var loco = player({
    player: "loco",
    rank: 1,
    score: 200,
    time: "1d 2hrs",
    gamesPlayed: "League",
    status: "online"
});

loco.save(function(err)
{
    if (err) throw err;
    console.log("user saved!");
});*/

module.exports = mongoose.model('player', playerSchema, 'players'); //export to be used elsewhere, can now be used for crud


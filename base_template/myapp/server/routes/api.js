const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');   //import player database  

mongoose.Promise = global.Promise; //Promise type avoids warnings mongoose throws
mongoose.connect('mongodb://admin:tiago123@ds263493.mlab.com:63493/user', {useNewUrlParser: true},function(err)
{
    if(err){
        console.error("Error! "+ err);
    }
});

router.get('/players', function(req, res)               //make req to players
{
    console.log('Get request for all players');
    Player.find({})                                     //connected to players collection in database
    .exec(function(err, players)                        //once players are found, send as response to browser
    {
        if(err)
        {
            console.log("Error retrieving players");
        }
        else
        {
            res.json(players);
        }
    })
});

//Get single player
/*
router.get('/players/:id', function(req, res)               //make req to players
{
    console.log('Get request for single players');
    Player.findById(req.params.id)                                    //connected to players collection in database
    .exec(function(err, player)                        //once players are found, send as response to browser
    {
        if(err)
        {
            console.log("Error retrieving player");
        }
        else
        {
            res.json(players);
        }
    })
});*/


//CREATE PLAYER WITH POST REQUEST
router.post('player', function(req, res)   //when there is a post req for player 2 database
{   
    console.log('Create a pleyer');
    var newPlayer = new Player();          //create new player with attributes of player
    newPlayer.player = req.body.player;
    newPlayer.rank = req.body.rank;
    newPlayer.save(function(err, insertedPlayer)
    {
        if(err)
        {
            console.log('Error saving player');
        }
        else
        {
            res.json(insertedPlayer);
        }
    });
})

//UPDATE PLAYER WITH PUT REQUEST

router.put('/player/:id', function(req, res)            //make put request to localhost/api/player:id
{
    console.log('Update a player');                 
    Player.findByIdAndUpdate(req,params.id,             //get hold of player module and update player based on its id
    {
        $set: {player: req.body.player, rank: req.body.rank}    //new or updated values 
    },
    {
        new: true                                       //if this is true, method (down) returns updated player 
    },
    function(err, updatedPlayer)
    {
        if(err)
        {
            res.send("error updating player");
        }
        else
        {
            res.json(updatedPlayer);
        }
    });
});


//DELETE PLAYER FROM DATABASE USING DELETE REQUEST

router.delete('player/:id', function(req, res)
{
    console.log('Delete a player');
    Player.findByIdAndRemove(req,params.id, function(err, deletedPlayer)
    {
        if(err)
        {
            res.send('Error deleting player');
        }
        else
        {
            res.json(deletedPlayer);   
        }
    });
});

module.exports = router;
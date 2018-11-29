const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const player = require('./models/player');

const port = 3000;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://ncoder:ndmtnodm123@ds263493.mlab.com:63493/user', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () =>                   //OPEN OF DATABASE EVENT LISTENER ONE TIME EVENT
{
    console.log('MongoDB connection established successfully');
});  

app.use('/', router);

router.route('/players').get((req, res)=>       //HTTP request to get list of players to json format
{
    player.find((err, players)=>
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.json(players);
        }
    });
});

router.route('/players/:id').get((req, res)=>
{
    player.findById(req.params.id, (err, players) =>
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.json(player);
        }
    });
});

router.route('/players/add').post((req, res)=>
{
    let player = new player(req.body);
    player.save().then(player => 
        {
            res.status(200).json({'player': 'Added successfully'});
        })
        .catch(err => 
            {
                res.status(400).send('Failed to create new player');
            });
});

router.route('/players/update/:id').post((req, res) =>
{
    player.findById(req.params.id, (err, player) =>
    {
        if (!player)
        {
            return nextTick(new Error('Could not load player'));
        }
        else
        {
            player.player = req.body.player;
            player.rank = req.body.rank;
            player.score = req.body.score;
            player.time = req.body.time;
            player.gamesPlayed = req.body.gamesPlayed;
            player.status = req.body.status;

            player.save().then(player =>
                {
                    res.json('Update complete');
                }).catch(err =>
                    {
                        res.status(400).send('Update failed');
                    });
        }
    });
});

router.route('/players/delete/:id').get((req,res) =>
{
    player.findByIdAndRemove({_id: req.params.id}, (err, player) =>
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json('Player has been removed');
        }
    });
});


/*
app.use(express.static(path.join(__dirname, 'dist'))); //gives express access to server

app.use(bodyParser.urlencoded({extended: true})); //Parses text as urlencoded data
app.use(bodyParser.json()); //Parses text as json 

app.use('/api', api);

app.get('*', (req,res)=>
{
    res.sendFile(path.join(__dirname, 'src/app/app.component.html'));
});*/


app.listen(port);
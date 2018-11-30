const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const game = require('./models/games');
const player = require('./models/player');
const admin = require('./models/admin');
const passport = require('passport');
const config = require('./config/db');
const connection = mongoose.connection;
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
//connect to database
mongoose.connect('mongodb://ncoder:ndmtnodm123@ds263493.mlab.com:63493/user', {useNewUrlParser: true});
//Successfull Connection
connection.on('connected', () => {
    console.log('Connected to database ' + config.db);
});
//UnsuccessfullConnection
connection.on('error', (err) => {
    console.log('Database error: ' + err);
});
//CORS middlewear
app.use(cors());
//Body Parser Middleware
app.use(bodyParser.json());
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/admin', admin)

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

router.route('/games').get((req, res)=>       //HTTP request to get list of players to json format
{
    game.find((err, games)=>
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.json(games);
        }
    });
});

/*Player DB Info */

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
    let newplayer = new player(req.body);
    newplayer.save().then(newplayer => 
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


// Start Server 
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
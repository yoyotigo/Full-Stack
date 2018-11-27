const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist'))); //gives express access to server

app.use(bodyParser.urlencoded({extended: true})); //Parses text as urlencoded data
app.use(bodyParser.json()); //Parses text as json 

app.use('/api', api);

app.get('*', (req,res)=>
{
    res.sendFile(path.join(__dirname, 'src/app.component.html'));
});

app.listen(port);
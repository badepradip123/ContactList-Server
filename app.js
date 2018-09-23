const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

const route = require('./routes/route'); 

//connect to database   
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database ');
});

//err
mongoose.connection.on('error', (err) => {
    console.log('database error: '+ err);
});


const port = 3000;  // Port no.

//cors middleware
app.use(cors());

//body-parser middleware
app.use(bodyParser.json());

app.use('/api', route); 

//index route
app.get('/', (req, res) => {
   res.send('Invalid point');
})

//start server
app.listen(port, () => {
    console.log('Server started on port:' + port);
});



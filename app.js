// from using Pug in your express app video 4 of 2nd pug

// by default express will look in folder called views in the root of your project


const express = require('express'); //get Express dependency module

const app = express(); 

const bodyParser = require('body-parser'); // get body parser middleware

const cookieParser = require('cookie-parser'); // get cookie parser middleware

const path = require('path'); 


app.set('view engine', 'pug'); //tell express (set the view engine) to use pug

app.get('/', (req, res) => {
    res.send('');
});

app.listen(3000, () => {
    console.log('HoooRay!!! app.listen local host 3000 is working!');
});

// control + back tic brings up the terminal in visual studio code
// node app.js written in terminal to view the project

 

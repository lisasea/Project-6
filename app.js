const express = require('express'); //get Express dependency module
const data = require('./data.json'); // './data.json.projects?'
const projects = data.projects;
const path = require('path'); //trying to get express.static working correctly?
const app = express();

app.set('view engine', 'pug'); //tell express (set the view engine) to use pug

app.use('/static', express.static('public')); // serve static files - images, CSS files, and JavaScript files in a directory named public 

app.get('/', (req, res) => { // '/index' ?
    res.render('index', { projects } ); // data.projects? Indasia in directions data.projects?
}); 

app.get('/about', (req, res) => {
    res.render('about');
}); 

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const allProjects = projects[id];
    res.render('project', allProjects);
});

app.use((req, res, next) => { //error handler
    const err = new Error('Not Found');
    console.log('Oops! This page can not be found.')
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => { //error handler
    res.locals.error = err;
    res.status(err.status); //read status property we just set
    res.render('error');
});



app.listen(3000, () => { //set up local host and test console.log
    console.log('HoooRay!!! app.listen local host 3000 is working!');
});

/*
app.get('/', (req, res) => {
    res.send('');
});
/*
app.get('/', (req, res) => {
    res.send('');
});
*/

//const path = require('path');  //optional to set up static
//const bodyParser = require('body-parser'); // get body parser middleware


// control + back tic brings up the terminal in visual studio code
// node app.js written in terminal to view the project

/*
XXCreate an app.js file at the root of your directory.
xxAdd variables to require the necessary dependencies. You'll need to require:
xxExpress
xxYour data.json file
xxOptionally - the path module which can be used when setting the absolute path in the express.static function.
xxSet up your middleware:
xxset your “view engine” to “pug”
xxuse a static route and the express.static method to serve the static files located in the public folder
xxSet your routes. You'll need:
xxAn "index" route (/) to render the "Home" page with the locals set to data.projects
xxAn "about" route (/about) to render the "About" page
Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to. 
*/

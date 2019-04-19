const express = require('express'); //get Express dependency module
const app = express();
const { projects } = require('./data.json'); //import data
const path = require('path'); 

app.set('view engine', 'pug'); //tell express set the view engine to use pug

app.use('/static', express.static('public')); // serve static files - images, CSS files, and JavaScript files in a directory named public 

app.get('/', (req, res) => { // set index route
    res.render('index', { projects } ); // 
}); 

app.get('/about', (req, res) => { // set about route
    res.render('about'); //
}); 

app.get('/projects/:id', (req, res) => { // set projects route
    const { id } = req.params;
    const project = projects[id];
    res.render('project', { project });
});

app.use((req, res, next) => { // error handler
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
    console.log('This app is running on local host 3000. It is working!');
});
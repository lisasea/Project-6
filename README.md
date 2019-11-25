# Treehouse FSJS Portfolio
    Portfolio to showcase JavaScript projects
    Site built using Static Node.js and Express 

## To Launch: ##
1. Navigate to project in command line
2. Run "npm start" 
3. Navigate to localhost:3000 in browser

## To run on Heroku
```
heroku create
git push heroku master
```


## Project Structure: ##

### /project_starter_files ### 
Mockup pages, CSS and starter Pug templates

### /public ###
Static files: CSS, images and client-side scripts

### /views ###
Pug templates for page rendering

### data.json ###
Project description, links to images and github

### index.js ###
Main page - run from Node

## Routes: ##
Routes are defined using Express get() and use() methods

### / (home) ###
Main page displaying various projects. Project data is read from data.json. Page is rendered using index.pug

### /about ###
Information about my background, programming skills and contact info rendered using about.pug

### /project/... ###
The /project route searches the project data for an id that is the same as the URL segment following /project/. If one is found the project data is passed to the project.pug template for rendering the project page. If a project is not found the catch-all handler generates a 404 error.

### not-defined routes ###
If a route is not defined the catch-all handler creates an error object with status code 404 and forwards it to the general error handler.

## Exceeds Expectations Tasks: ##

### Error Handler ###
Error handling middleware and error.pug file.
The general error handler renders a page using an error.pug template which displays the error message, status code and stack.
Set up "friendly" error handlers and sets status code using error.pug template to display the error message, status code and stack. If status code is 404 an "error 404" image is displayed instead of the error message and status code.

### NPM Start ### 
    
### Customized Layout, CSS and Styles ###
    Background color
    Button color
    Hover color
    Box shadow
        

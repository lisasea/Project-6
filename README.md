# Treehouse FSJS Project-6
    Portfolio to showcase JavaScript projects
    Site built using Static Node.js and Express 

Initialized project
  Use command line to navigate to project, and ran the npm init command to set up package.json file
Added dependencies
  Express and Pug installed via the command line
Created .gitignore file
Created an images folder to store images
  Added a profile pic
  Added screenshots of projects
  Added main shot for the landing page
Added project data to directory
Created a data.json file at the root of the directory
  Each project object contains the following properties:
    id 
    digit number starting at 0 
    project_name
    description
    technologies 
    live_link - link to the live version of the project
    github_link 
    image_urls  

Setup server, routes and middleware
Created an app.js file at the root of the directory
Added variables to require the necessary dependencies:
  Express
  Data.json file
  The path module used in setting the absolute path in the   express.static function.
Set up middleware:
  set “view engine” to “pug”
  static route and the express.static method to serve the static files located in the public folder
Set routes:
  An "index" route (/) that renders the "Home" page with the locals set to data.projects
  An "about" route (/about) that renders the "About" page
  Dynamic "project" routes (/project or /projects) based on the id of the project that renders a customized version of the Pug project template to show off each project. Adds data, or "locals", as an object that contains data to be passed to the Pug template.
Start server / listening on port 3000
Set up "friendly" error handlers and sets status code
Pug templates set to inject data
Set live links to projects

Exceeds Expectations Tasks:
    npm start //gleaned from stackoverflow.com
    error handling middleware and error.pug file
    Customized Layout, CSS and Styles
        background color
        button color
        hover color
        box shadow
        

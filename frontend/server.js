const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.PORT || 8083;
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@akshayapatracluster-fxxch.mongodb.net/test?retryWrites=true&w=majority')

// Used in order to render the static files 
// Without this line, the HTML file served will serve a blank screen
app.use(express.static(path.join(__dirname, 'build')));

// Used to parse the URLs sent from post requests
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(require('express-session')({
  secret: 'Chicken Little', //Used for encoding and decoding the session
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

/**
 * A function to determine if a user is currently logged in
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } 
  res.redirect('/login');
}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => { 
  console.log(`Server is listening at ${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const http = require('http');

const user = require('./routes/api/user');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', user);

if (process.env.NODE_ENV === 'production') {
    // Express will server up production assets
    app.use(express.static('client/build'));

    // Express will server up the index.html file
    const path = require('path');
    app.get(('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))));
}

// Load Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
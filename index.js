const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const fileUpload = require('express-fileupload');

const user = require('./routes/api/user');
const evento = require('./routes/api/evento');
const inscricao = require('./routes/api/inscricao');

const app = express();

// File Upload
// app.use(fileUpload());

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
app.use('/api/evento', evento);
app.use('/api/inscricao', inscricao);

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
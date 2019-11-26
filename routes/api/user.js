const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateResgisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route GET /api/users/test
// @desc Test users route
// @access Public
router.get('/test', (req, res) => res.send({ msg: 'Users Works' }));

// @route POST /api/users/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
    const { errors, isValid } = validateResgisterInput(req.body);
    const { name, email, password } = req.body;

    // check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find User
    const user = await User.findOne({ email });
    if (user) {
        errors.email = 'Email já existe na base de dados';
        return res.status(400).json(errors);
    }
    // New User 
    const newUser = new User({name, email, password});
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
    });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const { email, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email });
    // Check for user
    if (!user) {
        errors.email = 'Usuario não encontrado';
        return res.status(404).json(errors);
    }
    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar, admin: user.admin }; // Create JWT Payload

        // Sign Token
        jwt.sign(
            payload,
            keys.secret,
            { expiresIn: 3600 },
            (err, token) => {
            res.json({
                success: true,
                token: 'Bearer ' + token,
                expiresIn: 3600*30,
                localId: user.id,
                admin: user.admin
            });
        });
    } else {
        errors.password = 'Senha incorreta';
        return res.status(400).json(errors);
    }
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        admin: req.user.admin
      });
    }
);

module.exports = router;
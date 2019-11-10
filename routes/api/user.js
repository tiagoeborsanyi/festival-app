const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation

// Load User model
const User = require('../../models/User');

// @route GET /api/users/test
// @desc Test users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
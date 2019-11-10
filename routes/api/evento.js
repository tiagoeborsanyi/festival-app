const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Input Validation

// Load User model
const Evento = require('../../models/Evento');

// @route GET /api/evento/test
// @desc Test evento route
// @access Public
router.get('/test', (req, res) => res.send({ msg: 'Events Works' }));

// @route GET /api/evento/all
// @desc Events all
// @access Private
router.get('/all', async (req, res) => {
    const events = await Evento.find();
    if (events) {
        res.status(200).json(events);
    } else {
        res.json({ notEvents: 'Não foram encontrado eventos' });
    }
});

// @route POST /api/evento/:id
// @desc Event by id
// @access Private
router.get('/:id', async (req, res) => {
    const event = await Evento.findById(req.params.id);
    try {
        res.status(200).send(event);
    } catch(e) {
        res.status(400).send(e);
    }
});

// @route POST /api/evento
// @desc Events create
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { name, phone, mobile, nameCompany, state, city, email, EventDate, description } = req.body;
    const event = new Evento({
        name, phone, mobile, nameCompany, state, city, email, EventDate, description, _user: req.user.id
    });
    try {
        const result = await event.save();
        res.status(200).send(result);
    } catch(e) {
        res.status(400).send(e);
    }
})

module.exports = router;
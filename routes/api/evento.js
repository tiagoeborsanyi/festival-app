const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Mailer = require('../../config/Mailer');
const answerFestivalTemplate = require('../../config/emailTemplate/answerFestivalTemplate');

// Load Input Validation

// Load User model
const Evento = require('../../models/Evento');

// @route GET /api/evento/test
// @desc Test evento route
// @access Public
router.get('/test', (req, res) => res.send({ msg: 'Events Works' }));

// @route GET /api/evento/all
// @desc Events all
// @access Public
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
// @access Public
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
// @access Public
router.post('/', async (req, res) => {
    const { name, phone, mobile, nameCompany, state, city, email, EventDate, description } = req.body;
    const event = new Evento({
        name, phone, mobile, nameCompany, state, city, email, EventDate, description
    });
    try {
        const mailer = new Mailer(event, answerFestivalTemplate(event))
        await mailer.send();
        const result = await event.save();
        res.status(200).send(result);
    } catch(e) {
        console.log(e)
        res.status(400).send({ error: 'erro para gravar dados', e: e });
    }
})

// @route POST /api/evento/publish
// @desc Events Update
// @access Private
router.post('/publish', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id, active } = req.body;
    try {
        const response = await Evento.updateOne({ _id: id }, { active: active }).exec();
        res.status(200).send(response);
    } catch (error) {
        res.status(401).send(error);
    }
});

// @route POST /api/evento/edit
// @desc Events Update
// @access Private
router.post('/edit', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id, obj } = req.body;
    try {
        const response = await Evento.findByIdAndUpdate({_id: id}, { $set: obj }).exec();
        res.status(200).send(response);
    } catch (error) {
        res.status(401).send(error);
    }
});

// @route POST /api/evento/delete
// @desc Events Delete
// @access Private
router.delete('/delete/:id', passport.authenticate('jwt', { session: false}), async (req, res) => {
    console.log('delete', req.params.id)
    try {
        const response = await Evento.findOneAndDelete({ _id: req.params.id });
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
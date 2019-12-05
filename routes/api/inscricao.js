const express = require('express');
const router = express.Router();
const passport = require('passport');
const { createWriteStream } = require("fs");
const { Storage } = require("@google-cloud/storage");
const keys = require('../../config/keys');

// Load Input Validation

// Load User model
const Evento = require('../../models/Evento');
const Inscricao = require('../../models/Inscricao');

// @route GET /api/inscricao/test
// @desc Test evento route
// @access Public
router.get('/test', (req, res) => res.send({ msg: 'Events Works' }));

// @route POST /api/inscricao
// @desc Inscricao create
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id, obj } = req.body;
    try {
        const response = await Evento.updateOne({ _id: id }, { $push: { subscription: obj } }).exec();
        res.status(200).send(response);
    } catch(e) {
        console.log(e)
        res.status(400).send(e);
    }
});

router.post('/upload', passport.authenticate('jwt', { session: false }), (req, res) => {
    // console.log(req.files);
    const gc = new Storage({
        keyFilename: keys.firebase,
        projectId: 'festival-climb'
    });
    const coolFilesBucket = gc.bucket('festival-climb');
    res.send({ok: 'file ok'})
})

module.exports = router;
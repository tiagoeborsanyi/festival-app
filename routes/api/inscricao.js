const express = require('express');
const router = express.Router();
const passport = require('passport');
const Multer = require('multer');
const functions = require('firebase-functions');
const { Storage } = require("@google-cloud/storage");
const path = require('path')
const keys = require('../../config/keys');
const admin = require('firebase-admin');
const serviceAccount = require('../../festival-climb.json');

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});
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

router.post('/upload', passport.authenticate('jwt', { session: false }), multer.single('file'), (req, res, ) => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: 'festival-climb.appspot.com'
    });
    const bucket = admin.storage().bucket();
    // console.log('file: ', req.file);
    const opts = {
        destination: `testefolder/${req.file.originalname}`
    }
    let newFileName = `${Date.now()}-${req.file.originalname}`;
    let fileUpload = bucket.file(newFileName);
    const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
    });
    blobStream.on('error', (error) => {
        console.log('STREAAAAAAM ERRRROOOOOOO', error)
    });
    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
      console.log(url)
      res.status(200).send({ok: 'file ok', url: url})
    });
    blobStream.end(req.file.buffer);
});

module.exports = router;
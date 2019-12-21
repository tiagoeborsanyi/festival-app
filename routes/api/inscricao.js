const express = require('express');
const router = express.Router();
const passport = require('passport');
const Multer = require('multer');
const admin = require('../../config/firebaseAdmin');
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

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
    const bucket = admin.storage().bucket();
    let newFileName = `${Date.now()}_${req.file.originalname}`;
    let fileUpload = bucket.file(newFileName);
    const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
    });
    blobStream.on('error', (error) => {
        console.log('error', error)
        res.status(400).send({error});
    });
    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}`;
      console.log(url)
      res.status(200).send({ok: 'file ok', url: url})
    });
    blobStream.end(req.file.buffer);
});

// @route POST /api/inscricao/stripe
// @desc Inscricao billing
// @access Private
router.post('/stripe', async (req, res) => {
    console.log(req.body)
    const { value, id } = req.body;
    const charge = await stripe.charges.create({
        amount: value,
        currency: 'usd',
        description: `Valor de RS 00 pago. Obrigado.`,
        source: id.id
    });
    // Aqui tenho que criar uma função para somar o numero total de inscritos

    // um função para fazer update e salvar no banco de dados e nas coleções corretas

    // res.send falando que ta tudo certo e retornar uma resposta com status ok
    res.status(200).send({ok: 'ok'});
});

module.exports = router;
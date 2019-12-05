const express = require('express');
const router = express.Router();
const passport = require('passport');
const Multer = require('multer');
const { Storage } = require("@google-cloud/storage");
const keys = require('../../config/keys');

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

router.post('/upload', passport.authenticate('jwt', { session: false }), multer.single('file'), (req, res) => {
    console.log(req.file);
    
    let file = req.file
    if (file) {
        uploadImageToStorage(file).then((success) => {
          res.status(200).send({
            status: 'success'
          });
        }).catch((error) => {
          console.error('ERRO ALGUM: ', error);
        });
    }
    res.send({ok: 'file ok'})
});

const uploadImageToStorage = (file) => {
    const gc = new Storage({
        keyFilename: keys.firebase,
        projectId: 'festival-climb'
    });
    const bucket = gc.bucket('festival-climb');
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No image file');
      }
      let newFileName = `${file.name}gdfgrretyerhre${Date.now()}`;
      console.log(newFileName)
      let fileUpload = bucket.file(newFileName);
  
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
      });
  
      blobStream.on('error', (error) => {
          console.log('STREAAAAAAM ERRRROOOOOOO', error)
        reject('Something is wrong! Unable to upload at the moment.');
      });
  
      blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
        resolve(url);
      });
  
      blobStream.end(file.buffer);
    });
}

module.exports = router;
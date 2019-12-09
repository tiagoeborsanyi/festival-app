const admin = require('firebase-admin');

const serviceAccount = require('./keys');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.firebase),
  storageBucket: 'festival-climb.appspot.com'
});

module.exports = admin;
var admin = require('firebase-admin');

var serviceAccount = require('./ebuddy-admin-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ebuddy-test.firebaseio.com',
});

const db = admin.firestore();

module.exports = db;

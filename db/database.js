// // Paste this at the top of `server.js`
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = 'mongodb://localhost:27017';
//
// const dbName = 'movie-reservations';
// let db;
// // Paste this inside `app.listen` callback!
// MongoClient.connect(url, function(err, client) {
//      assert.equal(null, err);
//      console.log("Connected successfully to server");
//
//       db = client.db(dbName);
//     });
//
// module.exports = MongoClient

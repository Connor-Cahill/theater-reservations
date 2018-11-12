const express = require('express');
// Paste this at the top of `server.js`
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const session = require('./models/Session')
const theater = require('./models/Theater')

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db;

// Use connect method to connect to the server.

const Theater = require('./models/Theater');
const port = process.env.PORT || 3000
const app = express();


app.get('/theaters', (req, res) => {
    // returns json of theathers

})

app.post('/theaters', (req, res) => {
    const theater = new Theater(req.body);


})

app.get('/theaters/:id', (req, res) => {
    // returns information  on specifics theaters "list of session"
})

app.get('/theaters/:name/:session', (req, res) => {
    //returns session info and avalible seats
})

app.put('/theaters/:name/:session', (req, res) => {
    //updates db when user buys a seat

})

// app.listen(port, () => console.log(`listening on port ${port}`))
app.listen(port, () => {
    // Paste this inside `app.listen` callback!
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        db = client.db(dbName);
    });
})
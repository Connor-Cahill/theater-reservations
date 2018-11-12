const express = require('express');
const app = express()
const port = process.env.PORT || 3000

app.get('/theathers', (req, res) => {
    // returns json of theathers
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

app.listen(port, () => console.log(`listening on port ${port}`))
const express = require('express')
const app = express()

//app.listen(5005, () => console.log('SERVIDOR LEVANTADO'))
app.listen(process.env.PORT || 5005, () => console.log('SERVIDOR LEVANTADO'))

//DB conection
const mongoose = require('mongoose');
mongoose
    //.connect('mongodb://127.0.0.1/cycle-four')
    .connect('mongodb://mongo:3i2VDhiqtseLfLFGNepE@containers-us-west-173.railway.app:5667')
    .then(() => console.log('CONECTADO A BASE DE DATOS'));

//Model
const Language = require('./Models/Language.model')

//CORS
const cors = require('cors')
app.use(cors())

//Routing
app.get('/api/languages', (req, res) => {

    Language
        .find()
        .then(allLanguages => res.json(allLanguages))
})

app.get('/api/details/:language_id', (req, res) => {

    const { language_id } = req.params

    Language
        .findById(language_id)
    .then(language => res.json(language))
})

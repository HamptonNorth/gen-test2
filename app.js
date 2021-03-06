const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.status(200).send('Generated REST API app is working'))
app.use('/api', routes)

module.exports =  app

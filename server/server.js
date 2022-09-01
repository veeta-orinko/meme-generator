const path = require('path')
const express = require('express')
const request = require('superagent')

const welcome = require('./routes/welcome')
const snacks = require('./routes/snacks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)
server.use('/api/v1/snacks', snacks)

server.get('/api/v1/shibas', (req, res) => {
  return request
    .get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
    .then((response) => res.json(response.body))
  return null
})

server.get('/api/v1/dadjoke', (req, res) => {
  return request
    .get('https://icanhazdadjoke.com/')
    .set('Accept', 'application/json')
    .then((response) => {
      res.json(response)
    })
})

module.exports = server

const express = require('express')

const router = express.Router()

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

// GET - '/v1/snacks' - Get a list of snacks - Returns an array of snacks
router.get('/', (req, res) => {
  db.getRandomSnack()
    .then((snack) => {
      console.log(snack)
      res.json(snack)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('server error')
    })
})
module.exports = router

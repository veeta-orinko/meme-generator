const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)
const request = require('superagent')

module.exports = {
  getSnacks,
}

function getSnacks(db = connection) {
  return db('snacks').select()
}


// server.get('/api/v1/affirmation', (req, res) => {
//   console.log(process.env.SECRET_KEY)
//   return request
//     .get('https://affirmations.dev')
//     .set('X-API-KEY', process.env.SECRET_KEY)
//     .then((response) => {
//       res.json(response.body.affirmation)
//       return null
//     })
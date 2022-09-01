const { post } = require('superagent')

const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = {
  getSnacks,
}

function getSnacks(db = connection) {
  return db('snacks').select()
}

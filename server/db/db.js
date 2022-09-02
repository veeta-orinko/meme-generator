const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)
const request = require('superagent')

module.exports = {
  getRandomSnack,
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

function getRandomSnack() {
  let arr = []

  return (
    getSnacks()
      .then((snacks) => {
        arr = [...snacks]
      })
      // get all the snacks, populate the array
      .then(() => {
        //console.log(arr)
        const randomIndex = Math.floor(Math.random() * arr.length)
        // random index based on the array
        const item = arr[randomIndex]
        //console.log(item)
        // console.log(randomIndex)
        // console.log(arr)

        // puts it in the item
        return item
      })
      .catch((err) => {
        console.log(err)
      })
  )
}

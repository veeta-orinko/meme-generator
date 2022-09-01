const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = {
  getRandomSnack,
}

function getSnacks(db = connection) {
  return db('snacks').select()
}

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
        // puts it in the item
        return item
      })
      .catch((err) => {
        console.log(err)
      })
  )
}

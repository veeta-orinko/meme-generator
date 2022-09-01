

exports.up = (knex) => {
  return knex.schema.createTable('Snacks', (table) => {
    table.increments().primary()
    table.string('name')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Snacks')
}
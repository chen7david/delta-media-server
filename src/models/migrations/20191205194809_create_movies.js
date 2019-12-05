
exports.up = function(knex) {
  return knex.schema.createTable('movies',(table)=>{
    table.increments()
    table.string('movieId').unique().notNullable()
    table.string('title').notNullable()
    table.string('fileName').notNullable()
    table.text('description')
    table.integer('duration')
    table.timestamps(true,true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};

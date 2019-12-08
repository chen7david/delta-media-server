
exports.up = function(knex) {
  return knex.schema.createTable('movies',(table)=>{
    table.increments()
    table.string('movieId').unique().notNullable()
    table.string('title').unique().notNullable()
    table.string('fileName').notNullable()
    table.string('cover').notNullable()
    table.string('poster').notNullable()
    table.string('mimeType').notNullable()
    table.string('size').notNullable()
    table.text('description')
    table.integer('duration')
    table.dateTime('releaseDate')
    table.timestamps(true,true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};

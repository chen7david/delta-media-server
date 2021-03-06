
exports.up = function(knex) {
    return knex.schema.createTable('subtitles',(table)=>{
      table.increments()
      table.string('subId').unique().notNullable()
      table.string('fileName').notNullable()
      table.string('label')
      table.string('langCode')
      table.integer('movie_id').notNullable().references('id').inTable('movies').onDelete('CASCADE').index()
      table.timestamps(true,true)
    })
}
  
exports.down = function(knex) {
    return knex.schema.dropTable('subtitles')
};
  
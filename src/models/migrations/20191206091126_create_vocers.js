
exports.up = function(knex) {
    return knex.schema.createTable('covers',(table)=>{
      table.increments()
      table.string('covId').unique().notNullable()
      table.integer('type').notNullable()
      table.string('fileName').notNullable()
      table.boolean('primary').defaultTo(false)
      table.integer('movie_id').notNullable().references('id').inTable('movies').onDelete('CASCADE').index()
      table.timestamps(true,true)
    })
}
  
exports.down = function(knex) {
    return knex.schema.dropTable('covers')
};
  
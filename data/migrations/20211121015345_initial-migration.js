
exports.up = async function(knex) {
    await knex.schema
    .createTable('resources', table=>{
        table.increments('resource_id')
        table.string('resource_name',128).notNullable().unique()
        table.text('resource_description')

    })
    .createTable('projects', table=>{
        table.increments('project_id')
        table.string('project_name',128).notNullable()
        table.text('project_description',128)
        table.boolean('project_completed').notNullable().defaultTo(0)
    })
    .createTable('tasks', table=>{
        table.increments('task_id')
        table.text('task_description').notNullable()
        table.text('task_notes')
        table.boolean('task_completed').notNullable().defaultTo(0)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') 

    })
    .createTable('project_resources', table=>{
        table.increments('p_r_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') 
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') 

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
  
};

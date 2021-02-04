const knex = require('knex')
/* 
    Description of user table
*/
const up = (knex) =>{
    return knex.schema.createTable("users",(table)=>{
        table.increments("id").primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.date('birthday').notNullable();
        table.string('email').notNullable();
        table.string('phone').nullable();
        table.boolean('active').defaultTo(false)
        table.string('perfil_image').nullable()
    })
}

const down = (knex) =>{
    return knex.schema.dropTable("users")
}

module.exports = {
    up,
    down
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('email').notNullable();
        table.string('first_name');
        table.string('last_name');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');

};

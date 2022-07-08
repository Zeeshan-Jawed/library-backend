/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('students', function (table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
    })
    .createTable('books', function (table) {
        table.increments('id');
        table.string('book_name', 255).notNullable();
        table.string('author', 255).notNullable();
        table.integer('borrowed_by', 255).references('id').inTable('students').onDelete('SET NULL')
        table.date('date_of_borrow', 255)
        table.date('expected_date_of_return', 255)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTable("students")
      .dropTable("books");
};

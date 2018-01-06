
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemons', function(table) {
        table.increments().notNullable();
        table.integer('level').notNullable();
        table.string('name').notNullable();
        table.string('type').notNullable();
        table.integer('health').notNullable();
        table.integer('xp').notNullable().defaultTo(0);
        table.integer('attackDamage').notNullable();
        table.string('attackName').notNullable();
        table.float('catchRate', 1).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pokemons');

};
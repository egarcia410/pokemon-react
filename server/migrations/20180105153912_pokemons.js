
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemons', function(table) {
        table.increments().notNullable();
        table.string('name').notNullable();
        table.string('type').notNullable();
        table.integer('health');
        table.integer('attackDamage');
        table.string('attackName').notNullable();
        table.string('rarity').notNullable();
        table.integer('evolves');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pokemons');

};
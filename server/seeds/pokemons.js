
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemons').insert([
        { id: 1, level: 1, name: 'Bulbasaur', type: 'Grass', health: 45, attackDamage: 49, attackName: 'Overgrow', catchRate: 5.9 },
        { id: 4, level: 1, name: 'Charmander', type: 'Fire', health: 39, attackDamage: 52, attackName: 'Blaze', catchRate: 5.9 },
        { id: 7, level: 1, name: 'Squirtle', type: 'Water', health: 44, attackDamage: 48, attackName: 'Torrent', catchRate: 5.9 },
      ]);
    });
};

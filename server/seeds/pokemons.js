
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemons').insert([
        { id: 1, name: 'Bulbasaur', type: 'Grass', health: 35, attackDamage: 5, attackName: 'Overgrow', rarity: 'common', evolves: 2 },
        { id: 2, name: 'Ivysaur', type: 'Grass', attackName: 'Razor Leaf', rarity: 'uncommon', evolves: 3 },
        { id: 3, name: 'Venusaur', type: 'Grass', attackName: 'Solar Beam', rarity: 'rare' },
        { id: 4, name: 'Charmander', type: 'Fire', health: 32, attackDamage: 4, attackName: 'Blaze', rarity: 'common', evolves: 5 },
        { id: 5, name: 'Charmeleon', type: 'Fire', attackName: 'Flamethrower', rarity: 'uncommon', evolves: 6 },
        { id: 6, name: 'Charizard', type: 'Fire', attackName: 'Inferno', rarity: 'rare' },
        { id: 7, name: 'Squirtle', type: 'Water', health: 38, attackDamage: 3, attackName: 'Water Gun', rarity: 'common', evolves: 8 },
        { id: 8, name: 'Wartortle', type: 'Water', attackName: 'Water Pulse', rarity: 'uncommon', evolves: 9 },
        { id: 9, name: 'Blastoise', type: 'Water', attackName: 'Hydro Pump', rarity: 'rare' },
        { id: 10, name: 'Caterpie', type: 'Bug', attackName: 'Tackle', rarity: 'common', evolves: 11 },
        { id: 11, name: 'Metapod', type: 'Bug', attackName: 'Tackle', rarity: 'uncommon', evolves: 12 },
        { id: 12, name: 'Butterfree', type: 'Bug', attackName: 'Whirlwind', rarity: 'rare' },
        { id: 13, name: 'Weedle', type: 'Bug', attackName: 'String Shot', rarity: 'common' },
        { id: 14, name: 'Kakuna', type: 'Bug', attackName: 'Bite', rarity: 'uncommon', evolves: 15 },
        { id: 15, name: 'Beedrill', type: 'Bug', attackName: 'Pin Missile', rarity: 'rare' },
        { id: 16, name: 'Pidgey', type: 'Flying', attackName: 'Gust', rarity: 'common', evolves: 17 },
        { id: 17, name: 'Pidgeotto', type: 'Flying', attackName: 'Twister', rarity: 'uncommon', evolves: 18 },
        { id: 18, name: 'Pidgeot', type: 'Flying', attackName: 'Hurricane', rarity: 'rare' },
        { id: 19, name: 'Rattata', type: 'Normal', attackName: 'Tail Whip', rarity: 'common', evolves: 20 },
        { id: 20, name: 'Raticate', type: 'Normal', attackName: 'Hyper Fang', rarity: 'rare' },
        { id: 21, name: 'Spearow', type: 'Flying', attackName: 'Peck', rarity: 'uncommon', evolves: 22 },
        { id: 22, name: 'Fearow', type: 'Flying', attackName: 'Aerial Ace', rarity: 'rare' },
        { id: 23, name: 'Ekans', type: 'Poison', attackName: 'Wrap', rarity: 'common', evolves: 24 },
        { id: 24, name: 'Arbok', type: 'Poison', attackName: 'Acid', rarity: 'uncommon' },
        { id: 25, name: 'Pikachu', type: 'Electric', attackName: 'Thunder Shock', rarity: 'uncommon', evolves: 26 },
        { id: 26, name: 'Raichu', type: 'Electric', attackName: 'Thunder Punch', rarity: 'rare' },
        { id: 27, name: 'Sandshrew', type: 'Ground', attackName: 'Scratch', rarity: 'uncommon', evolves: 28 },
        { id: 28, name: 'Sandslash', type: 'Ground', attackName: 'Earthquake', rarity: 'rare' },
        { id: 29, name: 'Nidoran♀', type: 'Poison', attackName: 'Scratch', rarity: 'common', evolves: 30 },
        { id: 30, name: 'Nidorina', type: 'Poison', attackName: 'Toxic Spikes', rarity: 'uncommon', evolves: 31 },
        { id: 31, name: 'Nidoqueen', type: 'Poison', attackName: 'Body Slam', rarity: 'rare' },
        { id: 32, name: 'Nidoran♂', type: 'Poison', attackName: 'Double Kick', rarity: 'common', evolves: 33 },
        { id: 33, name: 'Nidorino', type: 'Poison', attackName: 'Poison Jab', rarity: 'uncommon', evolves: 34 },
        { id: 34, name: 'Nidoking', type: 'Poison', attackName: 'Megahorn', rarity: 'rare' },
      ]);
    });
};

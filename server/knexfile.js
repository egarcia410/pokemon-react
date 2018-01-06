module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/pokemonGame'
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    }
};
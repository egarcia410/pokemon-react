const express = require('express');
const cors = require('cors');
const knex = require('./db/knex');

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(cors());

require('./routes')(app);

app.listen(PORT, () => {
    console.log(`Creating magic on port ${PORT}`)
});
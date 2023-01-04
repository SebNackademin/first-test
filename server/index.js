const express = require('express');
const app = express();
const pokemonJson = require('./pokemon.json');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/pokemon', (req, res, next) => {
    res.send(pokemonJson);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

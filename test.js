var Pokemons = require("./models/pokemon");

Pokemons.find({}, (err, pokemon) => {
  if (err) throw err;
  console.log(pokemon);
  // other code here
});

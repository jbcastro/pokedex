var Pokemons = require("../models/pokemon.js");

exports.getAll = () => {
  return Pokemons.find({}, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  });
};

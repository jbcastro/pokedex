// if (typeCount )

import PokeList from "./components/PokeList";
import pokeCell from "./components/PokeCell";
import PokeClass from "./components/PokeCell";
import { pokeClasses } from "./pokeClasses";
import cells from "./components/PokeList";
var asshead = pokeCell;
var assbutt = PokeList;
var buttass = PokeClass;
var ass = pokeClasses;
var butt = cells;
console.log(asshead);
class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.typesCount = data.types.length;
    this.ass = ass;
    this.asshead = asshead;
    this.assbutt = assbutt;
    this.buttass = buttass;
    this.butt = butt;
    // this.type2 = data.types[1].type.name;
    this.moves = data.moves[0].move.name;
    this.shiny = data.sprites.front_shiny;
  }
}

export default Pokemon;

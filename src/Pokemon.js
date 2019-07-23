class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.typesCount = data.types.length;
    
    this.type = data.types[0].type.name;

    if (this.typesCount === 2) {
      this.type2 = data.types[1].type.name;
    } else {
      this.type2 = null;
    }

    this.moves = data.moves;
  

    this.shiny = data.sprites.front_shiny;
  }
}

export default Pokemon;

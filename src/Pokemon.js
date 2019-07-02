class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.typesCount = data.types.length;

    this.type = data.types[0].type.name;


    const moveApiData = data.moves;
    // console.log(moveApiData)
  
  
  // console.log(moveList)



    this.moves = moveApiData;
    
    this.shiny = data.sprites.front_shiny;
  }
}

export default Pokemon;

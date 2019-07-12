class Type {
  constructor(data) {
    this.typeName = data.name;
    // this.moves = data.name;
    this.mons = data.pokemon;

    this.doubleDamageFrom = data.damage_relations.double_damage_from[0].name;
    // const doubleDamageFrom2 = data.damage_relations.double_damage_from[1].name;
    // console.log(doubleDamageFrom);
  }
}

export default Type;

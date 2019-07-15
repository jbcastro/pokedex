//the pokemon API has a limit on the number of calls that
//can be made per day. in order to not use too many by
//looping over each pokemon to get the type I enetered
//them here. it's cumbersome and I'll probably end up doing
//it "the correct way" at the end

export const pokeClasses = [
  {
    id: "1",
    backgroundPosition: "0 0",
    type: "grass",
    type2: "poison",
    name: "bulbasaur",
    image: "bulbasaur.png"
  },
  {
    id: "2",
    backgroundPosition: "-125px 0",
    type: "grass",
    type2: "poison",
    name: "Ivysaur"
  },
  {
    id: "3",
    backgroundPosition: "-250px 0",
    type: "grass",
    type2: "poison",
    name: "Venusaur"
  },
  {
    id: "4",
    backgroundPosition: "-375px 0",
    type: "fire",
    type2: null,
    name: "Charmander"
  },
  {
    id: "5",
    backgroundPosition: "-500px 0",
    type: "fire",
    type2: null,
    name: "Charmeleon"
  },
  {
    id: "6",
    backgroundPosition: "-625px 0",
    type: "fire",
    type2: "flying",
    name: "Charizard"
  },
  {
    id: "7",
    backgroundPosition: "-767px 0",
    type: "water",
    type2: null,
    name: "Squirtle"
  },
  {
    id: "8",
    backgroundPosition: "-892px 0",
    type: "water",
    type2: null,
    name: "wartortle"
  },
  {
    id: "9",
    backgroundPosition: "-1017px 0",
    type: "water",
    type2: null,
    name: "Blastoise"
  },
  {
    id: "10",
    backgroundPosition: "-1142px 0",
    type: "bug",
    type2: null,
    name: "Caterpie"
  },
  {
    id: "11",
    backgroundPosition: "-1267px 0",
    type: "bug",
    type2: null,
    name: "Metapod"
  },
  {
    id: "12",
    backgroundPosition: "-1392px 0",
    type: "bug",
    type2: "flying",
    name: "Butterfree"
  },
  {
    id: "13",
    backgroundPosition: "-1517px 0",
    type: "bug",
    type2: "poison",
    name: "Weedle"
  },
  {
    id: "14",
    backgroundPosition: "-1642px 0",
    type: "bug",
    type2: "poison",
    name: "Kakuna"
  },
  {
    id: "15",
    backgroundPosition: "-1767px 0",
    type: "bug",
    type2: "poison",
    name: "Beedrill"
  },
  {
    id: "16",
    backgroundPosition: "-1892px 0",
    type: "normal",
    type2: "poison",
    name: "Pidgey"
  },
  {
    id: "17",
    backgroundPosition: "-2017px 0",
    type: "normal",
    type2: "poison",
    name: "Pidgeotto"
  },
  {
    id: "18",
    backgroundPosition: "-2142px 0",
    type: "normal",
    type2: "poison",
    name: "Pidgeot"
  },
  {
    id: "19",
    backgroundPosition: "-2267px 0",
    type: "normal",
    type2: null,
    name: "Rattata"
  },
  {
    id: "20",
    backgroundPosition: "-2368px 0",
    type: "normal",
    type2: null,
    name: "Raticate"
  },
  {
    id: "21",
    backgroundPosition: "-2469px 0",
    type: "normal",
    type2: "flying",
    name: "Spearow"
  },
  {
    id: "22",
    backgroundPosition: "-2594px 0",
    type: "normal",
    type2: "flying",
    name: "Fearow"
  },
  {
    id: "23",
    backgroundPosition: "-2741px 0",
    type: "poison",
    type2: null,
    name: "Ekans"
  },
  {
    id: "24",
    backgroundPosition: "-2866px 0",
    type: "poison",
    type2: null,
    name: "Arbok"
  },
  {
    id: "25",
    backgroundPosition: "-2991px 0",
    type: "electric",
    type2: null,
    name: "Pickachu"
  },
  {
    id: "26",
    backgroundPosition: "-3116px 0",
    type: "electric",
    type2: null,
    name: "Raichu"
  },
  {
    id: "27",
    backgroundPosition: "-3241px 0",
    type: "ground",
    type2: null,
    name: "Sandshrew"
  },
  {
    id: "28",
    backgroundPosition: "-3366px 0",
    type: "ground",
    type2: null,
    name: "Sandslash"
  },
  {
    id: "29",
    backgroundPosition: "-3491px 0",
    type: "poison",
    type2: null,
    name: "Nidoran♀"
  },
  {
    id: "30",
    backgroundPosition: "-3616px 0",
    type: "poison",
    type2: null,
    name: "Nidorina"
  },
  {
    id: "31",
    backgroundPosition: "-3741px 0",
    type: "poison",
    type2: "ground",
    name: "Nidoqueen"
  },
  {
    id: "32",
    backgroundPosition: "-3866px 0",
    type: "poison",
    type2: null,
    name: "Nidoran♂"
  },
  {
    id: "33",
    backgroundPosition: "-3991px 0",
    type: "poison",
    type2: null,
    name: "Nidorino"
  },
  {
    id: "34",
    backgroundPosition: "-4116px 0",
    type: "poison",
    type2: "ground",
    name: "Nidoking"
  },
  {
    id: "35",
    backgroundPosition: "-4241px 0",
    type: "grass",
    type2: null,
    name: "Clefairy"
  },
  {
    id: "36",
    backgroundPosition: "-4366px 0",
    type: "grass",
    type2: null,
    name: "Clefable"
  },
  {
    id: "37",
    backgroundPosition: "-4491px 0",
    type: "fire",
    type2: null,
    name: "Vulpix"
  },
  {
    id: "38",
    backgroundPosition: "-4616px 0",
    type: "fire",
    type2: null,
    name: "Ninetales"
  },
  {
    id: "39",
    backgroundPosition: "-4741px 0",
    type: "normal",
    type2: "fairy",
    name: "Jigglypuff"
  },
  {
    id: "40",
    backgroundPosition: "-4866px 0",
    type: "normal",
    type2: "fairy",
    name: "Wigglytuff"
  },
  {
    id: "41",
    backgroundPosition: "-4991px 0",
    type: "poison",
    type2: "flying",
    name: "Zubat"
  },
  {
    id: "42",
    backgroundPosition: "-5116px 0",
    type: "poison",
    type2: "flying",
    name: "Golbat"
  },
  {
    id: "43",
    backgroundPosition: "-5253px 0",
    type: "grass",
    type2: "poison",
    name: "Oddish"
  },
  {
    id: "44",
    backgroundPosition: "-5378px 0",
    type: "grass",
    type2: "poison",
    name: "Gloom"
  },
  {
    id: "45",
    backgroundPosition: "-5503px 0",
    type: "grass",
    type2: "poison",
    name: "Vileplume"
  },
  {
    id: "46",
    backgroundPosition: "-5628px 0",
    type: "bug",
    type2: "grass",
    name: "Paras"
  },
  {
    id: "47",
    backgroundPosition: "-5753px 0",
    type: "bug",
    type2: "grass",
    name: "Parasect"
  },
  {
    id: "48",
    backgroundPosition: "-5878px 0",
    type: "bug",
    type2: "poison",
    name: "Venonat"
  },
  {
    id: "49",
    backgroundPosition: "-6003px 0",
    type: "bug",
    type2: "poison",
    name: "Venomoth"
  },
  {
    id: "50",
    backgroundPosition: "-6136px 0",
    type: "ground",
    type2: null,
    name: "Diglett"
  },
  {
    id: "51",
    backgroundPosition: "-6261px 0",
    type: "ground",
    type2: null,
    name: "Dugtrio"
  },
  {
    id: "52",
    backgroundPosition: "-6386px 0",
    type: "normal",
    type2: null,
    name: "Meowth"
  },
  {
    id: "53",
    backgroundPosition: "-6487px 0",
    type: "normal",
    type2: null,
    name: "Persian"
  },
  {
    id: "54",
    backgroundPosition: "-6588px 0",
    type: "water",
    type2: null,
    name: "Psyduck"
  },
  {
    id: "55",
    backgroundPosition: "-6713px 0",
    type: "water",
    type2: null,
    name: "Golduck"
  },
  {
    id: "56",
    backgroundPosition: "-6838px 0",
    type: "fighting",
    type2: null,
    name: "Mankey"
  },
  {
    id: "57",
    backgroundPosition: "-6963px 0",
    type: "fighting",
    type2: null,
    name: "Primeape"
  },
  {
    id: "58",
    backgroundPosition: "-7088px 0",
    type: "fire",
    type2: null,
    name: "Growlithe"
  },
  {
    id: "59",
    backgroundPosition: "-7213px 0",
    type: "fire",
    type2: null,
    name: "Arcanine"
  },
  {
    id: "60",
    backgroundPosition: "-7338px 0",
    type: "water",
    type2: null,
    name: "Poliwag"
  },
  {
    id: "61",
    backgroundPosition: "-7463px 0",
    type: "water",
    type2: null,
    name: "Poliwhirl"
  },
  {
    id: "62",
    backgroundPosition: "-7588px 0",
    type: "water",
    type2: "fighting",
    name: "Poliwrath"
  },
  {
    id: "63",
    backgroundPosition: "-7713px 0",
    type: "psychic",
    type2: null,
    name: "Abra"
  },
  {
    id: "64",
    backgroundPosition: "-7838px 0",
    type: "psychic",
    type2: null,
    name: "Kadabra"
  },
  {
    id: "65",
    backgroundPosition: "-7963px 0",
    type: "psychic",
    type2: null,
    name: "Alakazam"
  },
  {
    id: "66",
    backgroundPosition: "-8088px 0",
    type: "fighting",
    type2: null,
    name: "Machop"
  },
  {
    id: "67",
    backgroundPosition: "-8213px 0",
    type: "fighting",
    type2: null,
    name: "Machoke"
  },
  {
    id: "68",
    backgroundPosition: "-8338px 0",
    type: "fighting",
    type2: null,
    name: "Machamp"
  },
  {
    id: "69",
    backgroundPosition: "-8463px 0",
    type: "grass",
    type2: "poison",
    name: "Bellsprout"
  },
  {
    id: "70",
    backgroundPosition: "-8588px 0",
    type: "grass",
    type2: "poison",
    name: "Weepinbell"
  },
  {
    id: "71",
    backgroundPosition: "-8713px 0",
    type: "grass",
    type2: "poison",
    name: "Victreebel"
  },
  {
    id: "72",
    backgroundPosition: "-8838px 0",
    type: "water",
    type2: "poison",
    name: "Tentacool"
  },
  {
    id: "73",
    backgroundPosition: "-8963px 0",
    type: "water",
    type2: "poison",
    name: "Tentacruel"
  },
  {
    id: "74",
    backgroundPosition: "-9088px 0",
    type: "rock",
    type2: "ground",
    name: "Geodude"
  },
  {
    id: "75",
    backgroundPosition: "-9213px 0",
    type: "rock",
    type2: "ground",
    name: "Graveler"
  },
  {
    id: "76",
    backgroundPosition: "-9338px 0",
    type: "rock",
    type2: "ground",
    name: "Golem"
  },
  {
    id: "77",
    backgroundPosition: "-9463px 0",
    type: "fire",
    type2: null,
    name: "Ponyta"
  },
  {
    id: "78",
    backgroundPosition: "-9588px 0",
    type: "fire",
    type2: null,
    name: "Rapidash"
  },
  {
    id: "79",
    backgroundPosition: "-9713px 0",
    type: "water",
    type2: "psychic",
    name: "Slowpoke"
  },
  {
    id: "80",
    backgroundPosition: "-9838px 0",
    type: "water",
    type2: "psychic",
    name: "Slowbro"
  },
  {
    id: "81",
    backgroundPosition: "-9963px 0",
    type: "electric",
    type2: "steel",
    name: "Magnemite"
  },
  {
    id: "82",
    backgroundPosition: "-10088px 0",
    type: "electric",
    type2: "steel",
    name: "Magneton"
  },
  {
    id: "83",
    backgroundPosition: "-10213px 0",
    type: "normal",
    type2: "flying",
    name: "Farfetch'd"
  },
  {
    id: "84",
    backgroundPosition: "-10338px 0",
    type: "normal",
    type2: "flying",
    name: "Doduo"
  },
  {
    id: "85",
    backgroundPosition: "-10463px 0",
    type: "normal",
    type2: "flying",
    name: "Dodrio"
  },
  {
    id: "86",
    backgroundPosition: "-10588px 0",
    type: "water",
    type2: null,
    name: "Seel"
  },
  {
    id: "87",
    backgroundPosition: "-10713px 0",
    type: "water",
    type2: "steel",
    name: "Dewgong"
  },
  {
    id: "88",
    backgroundPosition: "-10838px 0",
    type: "poison",
    type2: null,
    name: "Grimer"
  },
  {
    id: "89",
    backgroundPosition: "-10963px 0",
    type: "poison",
    type2: null,
    name: "Muk"
  },
  {
    id: "90",
    backgroundPosition: "-11092px 0",
    type: "water",
    type2: null,
    name: "Shellder"
  },
  {
    id: "91",
    backgroundPosition: "-11217px 0",
    type: "water",
    type2: "ice",
    name: "Cloyster"
  },
  {
    id: "92",
    backgroundPosition: "-11342px 0",
    type: "ghost",
    type2: "poison",
    name: "Gastly"
  },
  {
    id: "93",
    backgroundPosition: "-11467px 0",
    type: "ghost",
    type2: "poison",
    name: "Haunter"
  },
  {
    id: "94",
    backgroundPosition: "-11592px 0",
    type: "ghost",
    type2: "poison",
    name: "Gengar"
  },
  {
    id: "95",
    backgroundPosition: "-11717px 0",
    type: "rock",
    type2: "ground",
    name: "Onix"
  },
  {
    id: "96",
    backgroundPosition: "-11842px 0",
    type: "psychic",
    type2: null,
    name: "Drowzee"
  },
  {
    id: "97",
    backgroundPosition: "-11967px 0",
    type: "psychic",
    type2: null,
    name: "Hypno"
  },
  {
    id: "98",
    backgroundPosition: "-12092px 0",
    type: "water",
    type2: null,
    name: "Krabby"
  },
  {
    id: "99",
    backgroundPosition: "-12217px 0",
    type: "water",
    type2: null,
    name: "Kingler"
  },
  {
    id: "100",
    backgroundPosition: "-12342px 0",
    type: "electric",
    type2: null,
    name: "Voltorb"
  },
  {
    id: "101",
    backgroundPosition: "-12467px 0",
    type: "electric",
    type2: null,
    name: "Electrode"
  },
  {
    id: "102",
    backgroundPosition: "-12592px 0",
    type: "grass",
    type2: "psychic",
    name: "Exeggcute"
  },
  {
    id: "103",
    backgroundPosition: "-12717px 0",
    type: "grass",
    type2: "psychic",
    name: "Exeggutor"
  },
  {
    id: "104",
    backgroundPosition: "-12858px 0",
    type: "ground",
    type2: null,
    name: "Cubone"
  },
  {
    id: "105",
    backgroundPosition: "-12983px 0",
    type: "ground",
    type2: null,
    name: "Marowak"
  },
  {
    id: "106",
    backgroundPosition: "-13108px 0",
    type: "fighting",
    type2: null,
    name: "Hitmonlee"
  },
  {
    id: "107",
    backgroundPosition: "-13233px 0",
    type: "fighting",
    type2: null,
    name: "Hitmonchan"
  },
  {
    id: "108",
    backgroundPosition: "-13358px 0",
    type: "nomral",
    type2: null,
    name: "Lickitung"
  },
  {
    id: "109",
    backgroundPosition: "-13483px 0",
    type: "poison",
    type2: null,
    name: "Koffing"
  },
  {
    id: "110",
    backgroundPosition: "-13584px 0",
    type: "poison",
    type2: null,
    name: "Weezing"
  },
  {
    id: "111",
    backgroundPosition: "-13685px 0",
    type: "ground",
    type2: "rock",
    name: "Rhyhorn"
  },
  {
    id: "112",
    backgroundPosition: "-13810px 0",
    type: "ground",
    type2: "rock",
    name: "Rhydon"
  },
  {
    id: "113",
    backgroundPosition: "-13935px 0",
    type: "normal",
    type2: null,
    name: "Chansey"
  },
  {
    id: "114",
    backgroundPosition: "-14060px 0",
    type: "grass",
    type2: null,
    name: "Tangela"
  },
  {
    id: "115",
    backgroundPosition: "-14185px 0",
    type: "normal",
    type2: null,
    name: "Kangaskhan"
  },
  {
    id: "116",
    backgroundPosition: "-14310px 0",
    type: "water",
    type2: null,
    name: "Horsea"
  },
  {
    id: "117",
    backgroundPosition: "-14435px 0",
    type: "water",
    type2: null,
    name: "Seadra"
  },
  {
    id: "118",
    backgroundPosition: "-14560px 0",
    type: "water",
    type2: null,
    name: "Goldeen"
  },
  {
    id: "119",
    backgroundPosition: "-14685px 0",
    type: "water",
    type2: null,
    name: "Seaking"
  },
  {
    id: "120",
    backgroundPosition: "-14810px 0",
    type: "water",
    type2: null,
    name: "Staryu"
  },
  {
    id: "121",
    backgroundPosition: "-14935px 0",
    type: "water",
    type2: "psychic",
    name: "Starmie"
  },
  {
    id: "122",
    backgroundPosition: "-15060px 0",
    type: "psychic",
    type2: "fairy",
    name: "Mr. Mime"
  },
  {
    id: "123",
    backgroundPosition: "-15185px 0",
    type: "bug",
    type2: "flying",
    name: "Scyther"
  },
  {
    id: "124",
    backgroundPosition: "-15310px 0",
    type: "ice",
    type2: "psychic",
    name: "Jynx"
  },
  {
    id: "125",
    backgroundPosition: "-15435px 0",
    type: "electric",
    type2: null,
    name: "Electabuzz"
  },
  {
    id: "126",
    backgroundPosition: "-15560px 0",
    type: "fire",
    type2: null,
    name: "Magmar"
  },
  {
    id: "127",
    backgroundPosition: "-15685px 0",
    type: "bug",
    type2: null,
    name: "Pinsir"
  },
  {
    id: "128",
    backgroundPosition: "-15810px 0",
    type: "normal",
    type2: null,
    name: "Tauros"
  },
  {
    id: "129",
    backgroundPosition: "-15935px 0",
    type: "water",
    type2: null,
    name: "Magikarp"
  },
  {
    id: "130",
    backgroundPosition: "-16060px 0",
    type: "water",
    type2: "flying",
    name: "Gyarados"
  },
  {
    id: "131",
    backgroundPosition: "-16185px 0",
    type: "water",
    type2: "ice",
    name: "Lapras"
  },
  {
    id: "132",
    backgroundPosition: "-16310px 0",
    type: "nomral",
    type2: null,
    name: "Ditto"
  },
  {
    id: "133",
    backgroundPosition: "-16435px 0",
    type: "nomral",
    type2: null,
    name: "Eevee"
  },
  {
    id: "134",
    backgroundPosition: "-16560px 0",
    type: "water",
    type2: null,
    name: "Vaporeon"
  },
  {
    id: "135",
    backgroundPosition: "-16685px 0",
    type: "electric",
    type2: null,
    name: "Vaporeon"
  },
  {
    id: "136",
    backgroundPosition: "-16810px 0",
    type: "fire",
    type2: null,
    name: "Jolteon"
  },
  {
    id: "137",
    backgroundPosition: "-16935px 0",
    type: "normal",
    type2: null,
    name: "Flareon"
  },
  {
    id: "138",
    backgroundPosition: "-17036px 0",
    type: "rock",
    type2: "water",
    name: "Porygon"
  },
  {
    id: "139",
    backgroundPosition: "-17161px 0",
    type: "rock",
    type2: "water",
    name: "Omanyte"
  },
  {
    id: "140",
    backgroundPosition: "-17286px 0",
    type: "rock",
    type2: "water",
    name: "Kabuto"
  },
  {
    id: "141",
    backgroundPosition: "-17411px 0",
    type: "rock",
    type2: "water",
    name: "Kabutops"
  },
  {
    id: "142",
    backgroundPosition: "-17536px 0",
    type: "rock",
    type2: "flying",
    name: "Aerodactyl"
  },
  {
    id: "143",
    backgroundPosition: "-17712px 0",
    type: "normal",
    type2: null,
    name: "Snorlax"
  },
  {
    id: "144",
    backgroundPosition: "-17837px 0",
    type: "ice",
    type2: "flying",
    name: "Articuno"
  },
  {
    id: "145",
    backgroundPosition: "-17991px 0",
    type: "electric",
    type2: "flying",
    name: "Zapdos"
  },
  {
    id: "146",
    backgroundPosition: "-18140px 0",
    type: "fire",
    type2: "flying",
    name: "Moltres"
  },
  {
    id: "147",
    backgroundPosition: "-18320px 0",
    type: "dragon",
    type2: null,
    name: "Dratini"
  },
  {
    id: "148",
    backgroundPosition: "-18445px 0",
    type: "dragon",
    type2: null,
    name: "Dragonair"
  },
  {
    id: "149",
    backgroundPosition: "-18570px 0",
    type: "dragon",
    type2: "flying",
    name: "Dragonite"
  },
  {
    id: "150",
    backgroundPosition: "-18695px 0",
    type: "psychic",
    type2: null,
    name: "Mewtwo"
  },
  {
    id: "151",
    backgroundPosition: "-18820px 0",
    type: "psychic",
    type2: null,
    name: "Mew"
  }
];
export default {
  pokeClasses
};

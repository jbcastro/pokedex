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
    type2: "poison"
  },
  {
    id: "2",
    backgroundPosition: "-125px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "3",
    backgroundPosition: "-250px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "4",
    backgroundPosition: "-375px 0",
    type: "fire",
    type2: null
  },
  {
    id: "5",
    backgroundPosition: "-500px 0",
    type: "fire",
    type2: null
  },
  {
    id: "6",
    backgroundPosition: "-625px 0",
    type: "fire",
    type2: "flying"
  },
  {
    id: "7",
    backgroundPosition: "-767px 0",
    type: "water",
    type2: null
  },
  {
    id: "8",
    backgroundPosition: "-892px 0",
    type: "water",
    type2: null
  },
  {
    id: "9",
    backgroundPosition: "-1017px 0",
    type: "water",
    type2: null
  },
  {
    id: "10",
    backgroundPosition: "-1142px 0",
    type: "bug",
    type2: null
  },
  {
    id: "11",
    backgroundPosition: "-1267px 0",
    type: "bug",
    type2: null
  },
  {
    id: "12",
    backgroundPosition: "-1392px 0",
    type: "bug",
    type2: "flying"
  },
  {
    id: "13",
    backgroundPosition: "-1517px 0",
    type: "bug",
    type2: "poison"
  },
  {
    id: "14",
    backgroundPosition: "-1642px 0",
    type: "bug",
    type2: "poison"
  },
  {
    id: "15",
    backgroundPosition: "-1767px 0",
    type: "bug",
    type2: "poison"
  },
  {
    id: "16",
    backgroundPosition: "-1892px 0",
    type: "normal",
    type2: "poison"
  },
  {
    id: "17",
    backgroundPosition: "-2017px 0",
    type: "normal",
    type2: "poison"
  },
  {
    id: "18",
    backgroundPosition: "-2142px 0",
    type: "normal",
    type2: "poison"
  },
  {
    id: "19",
    backgroundPosition: "-2267px 0",
    type: "normal",
    type2: null
  },
  {
    id: "20",
    backgroundPosition: "-2368px 0",
    type: "normal",
    type2: null
  },
  {
    id: "21",
    backgroundPosition: "-2469px 0",
    type: "normal",
    type2: "flying"
  },
  {
    id: "22",
    backgroundPosition: "-2594px 0",
    type: "normal",
    type2: "flying"
  },
  {
    id: "23",
    backgroundPosition: "-2741px 0",
    type: "poison",
    type2: null
  },
  {
    id: "24",
    backgroundPosition: "-2866px 0",
    type: "poison",
    type2: null
  },
  {
    id: "25",
    backgroundPosition: "-2991px 0",
    type: "electric",
    type2: null
  },
  {
    id: "26",
    backgroundPosition: "-3116px 0",
    type: "electric",
    type2: null
  },
  {
    id: "27",
    backgroundPosition: "-3241px 0",
    type: "ground",
    type2: null
  },
  {
    id: "28",
    backgroundPosition: "-3366px 0",
    type: "ground",
    type2: null
  },
  {
    id: "29",
    backgroundPosition: "-3491px 0",
    type: "poison",
    type2: null
  },
  {
    id: "30",
    backgroundPosition: "-3616px 0",
    type: "poison",
    type2: null
  },
  {
    id: "31",
    backgroundPosition: "-3741px 0",
    type: "poison",
    type2: "ground"
  },
  {
    id: "32",
    backgroundPosition: "-3866px 0",
    type: "poison",
    type2: null
  },
  {
    id: "33",
    backgroundPosition: "-3991px 0",
    type: "poison",
    type2: null
  },
  {
    id: "34",
    backgroundPosition: "-4116px 0",
    type: "poison",
    type2: "ground"
  },
  {
    id: "35",
    backgroundPosition: "-4241px 0",
    type: "grass",
    type2: null
  },
  {
    id: "36",
    backgroundPosition: "-4366px 0",
    type: "grass",
    type2: null
  },
  {
    id: "37",
    backgroundPosition: "-4491px 0",
    type: "fire",
    type2: null
  },
  {
    id: "38",
    backgroundPosition: "-4616px 0",
    type: "fire",
    type2: null
  },
  {
    id: "39",
    backgroundPosition: "-4741px 0",
    type: "normal",
    type2: "fairy"
  },
  {
    id: "40",
    backgroundPosition: "-4866px 0",
    type: "normal",
    type2: "fairy"
  },
  {
    id: "41",
    backgroundPosition: "-4991px 0",
    type: "poison",
    type2: "flying"
  },
  {
    id: "42",
    backgroundPosition: "-5116px 0",
    type: "poison",
    type2: "flying"
  },
  {
    id: "43",
    backgroundPosition: "-5253px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "44",
    backgroundPosition: "-5378px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "45",
    backgroundPosition: "-5503px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "46",
    backgroundPosition: "-5628px 0",
    type: "bug",
    type2: "grass"
  },
  {
    id: "47",
    backgroundPosition: "-5753px 0",
    type: "bug",
    type2: "grass"
  },
  {
    id: "48",
    backgroundPosition: "-5878px 0",
    type: "bug",
    type2: "poison"
  },
  {
    id: "49",
    backgroundPosition: "-6003px 0",
    type: "bug",
    type2: "poison"
  },
  {
    id: "50",
    backgroundPosition: "-6136px 0",
    type: "ground",
    type2: null
  },
  {
    id: "51",
    backgroundPosition: "-6261px 0",
    type: "ground",
    type2: null
  },
  {
    id: "52",
    backgroundPosition: "-6386px 0",
    type: "normal",
    type2: null
  },
  {
    id: "53",
    backgroundPosition: "-6487px 0",
    type: "normal",
    type2: null
  },
  {
    id: "54",
    backgroundPosition: "-6588px 0",
    type: "water",
    type2: null
  },
  {
    id: "55",
    backgroundPosition: "-6713px 0",
    type: "water",
    type2: null
  },
  {
    id: "56",
    backgroundPosition: "-6838px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "57",
    backgroundPosition: "-6963px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "58",
    backgroundPosition: "-7088px 0",
    type: "fire",
    type2: null
  },
  {
    id: "59",
    backgroundPosition: "-7213px 0",
    type: "fire",
    type2: null
  },
  {
    id: "60",
    backgroundPosition: "-7338px 0",
    type: "water",
    type2: null
  },
  {
    id: "61",
    backgroundPosition: "-7463px 0",
    type: "water",
    type2: null
  },
  {
    id: "62",
    backgroundPosition: "-7588px 0",
    type: "water",
    type2: "fighting"
  },
  {
    id: "63",
    backgroundPosition: "-7713px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "64",
    backgroundPosition: "-7838px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "65",
    backgroundPosition: "-7963px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "66",
    backgroundPosition: "-8088px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "67",
    backgroundPosition: "-8213px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "68",
    backgroundPosition: "-8338px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "69",
    backgroundPosition: "-8463px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "70",
    backgroundPosition: "-8588px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "71",
    backgroundPosition: "-8713px 0",
    type: "grass",
    type2: "poison"
  },
  {
    id: "72",
    backgroundPosition: "-8838px 0",
    type: "water",
    type2: "poison"
  },
  {
    id: "73",
    backgroundPosition: "-8963px 0",
    type: "water",
    type2: "poison"
  },
  {
    id: "74",
    backgroundPosition: "-9088px 0",
    type: "rock",
    type2: "ground"
  },
  {
    id: "75",
    backgroundPosition: "-9213px 0",
    type: "rock",
    type2: "ground"
  },
  {
    id: "76",
    backgroundPosition: "-9338px 0",
    type: "rock",
    type2: "ground"
  },
  {
    id: "77",
    backgroundPosition: "-9463px 0",
    type: "fire",
    type2: null
  },
  {
    id: "78",
    backgroundPosition: "-9588px 0",
    type: "fire",
    type2: null
  },
  {
    id: "79",
    backgroundPosition: "-9713px 0",
    type: "water",
    type2: "psychic"
  },
  {
    id: "80",
    backgroundPosition: "-9838px 0",
    type: "water",
    type2: "psychic"
  },
  {
    id: "81",
    backgroundPosition: "-9963px 0",
    type: "electric",
    type2: "steel"
  },
  {
    id: "82",
    backgroundPosition: "-10088px 0",
    type: "electric",
    type2: "steel"
  },
  {
    id: "83",
    backgroundPosition: "-10213px 0",
    type: "normal",
    type2: "flying"
  },
  {
    id: "84",
    backgroundPosition: "-10338px 0",
    type: "normal",
    type2: "flying"
  },
  {
    id: "85",
    backgroundPosition: "-10463px 0",
    type: "normal",
    type2: "flying"
  },
  {
    id: "86",
    backgroundPosition: "-10588px 0",
    type: "water",
    type2: null
  },
  {
    id: "87",
    backgroundPosition: "-10713px 0",
    type: "water",
    type2: "steel"
  },
  {
    id: "88",
    backgroundPosition: "-10838px 0",
    type: "poison",
    type2: null
  },
  {
    id: "89",
    backgroundPosition: "-10963px 0",
    type: "poison",
    type2: null
  },
  {
    id: "90",
    backgroundPosition: "-11092px 0",
    type: "water",
    type2: null
  },
  {
    id: "91",
    backgroundPosition: "-11217px 0",
    type: "water",
    type2: "ice"
  },
  {
    id: "92",
    backgroundPosition: "-11342px 0",
    type: "ghost",
    type2: "poison"
  },
  {
    id: "93",
    backgroundPosition: "-11467px 0",
    type: "ghost",
    type2: "poison"
  },
  {
    id: "94",
    backgroundPosition: "-11592px 0",
    type: "ghost",
    type2: "poison"
  },
  {
    id: "95",
    backgroundPosition: "-11717px 0",
    type: "rock",
    type2: "ground"
  },
  {
    id: "96",
    backgroundPosition: "-11842px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "97",
    backgroundPosition: "-11967px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "98",
    backgroundPosition: "-12092px 0",
    type: "water",
    type2: null
  },
  {
    id: "99",
    backgroundPosition: "-12217px 0",
    type: "water",
    type2: null
  },
  {
    id: "100",
    backgroundPosition: "-12342px 0",
    type: "electric",
    type2: null
  },
  {
    id: "101",
    backgroundPosition: "-12467px 0",
    type: "electric",
    type2: null
  },
  {
    id: "102",
    backgroundPosition: "-12592px 0",
    type: "grass",
    type2: "psychic"
  },
  {
    id: "103",
    backgroundPosition: "-12717px 0",
    type: "grass",
    type2: "psychic"
  },
  {
    id: "104",
    backgroundPosition: "-12858px 0",
    type: "ground",
    type2: null
  },
  {
    id: "105",
    backgroundPosition: "-12983px 0",
    type: "ground",
    type2: null
  },
  {
    id: "106",
    backgroundPosition: "-13108px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "107",
    backgroundPosition: "-13233px 0",
    type: "fighting",
    type2: null
  },
  {
    id: "108",
    backgroundPosition: "-13358px 0",
    type: "nomral",
    type2: null
  },
  {
    id: "109",
    backgroundPosition: "-13483px 0",
    type: "poison",
    type2: null
  },
  {
    id: "110",
    backgroundPosition: "-13584px 0",
    type: "poison",
    type2: null
  },
  {
    id: "111",
    backgroundPosition: "-13685px 0",
    type: "ground",
    type2: "rock"
  },
  {
    id: "112",
    backgroundPosition: "-13810px 0",
    type: "ground",
    type2: "rock"
  },
  {
    id: "113",
    backgroundPosition: "-13935px 0",
    type: "normal",
    type2: null
  },
  {
    id: "114",
    backgroundPosition: "-14060px 0",
    type: "grass",
    type2: null
  },
  {
    id: "115",
    backgroundPosition: "-14185px 0",
    type: "normal",
    type2: null
  },
  {
    id: "116",
    backgroundPosition: "-14310px 0",
    type: "water",
    type2: null
  },
  {
    id: "117",
    backgroundPosition: "-14435px 0",
    type: "water",
    type2: null
  },
  {
    id: "118",
    backgroundPosition: "-14560px 0",
    type: "water",
    type2: null
  },
  {
    id: "119",
    backgroundPosition: "-14685px 0",
    type: "water",
    type2: null
  },
  {
    id: "120",
    backgroundPosition: "-14810px 0",
    type: "water",
    type2: null
  },
  {
    id: "121",
    backgroundPosition: "-14935px 0",
    type: "water",
    type2: "psychic"
  },
  {
    id: "122",
    backgroundPosition: "-15060px 0",
    type: "psychic",
    type2: "fairy"
  },
  {
    id: "123",
    backgroundPosition: "-15185px 0",
    type: "bug",
    type2: "flying"
  },
  {
    id: "124",
    backgroundPosition: "-15310px 0",
    type: "ice",
    type2: "psychic"
  },
  {
    id: "125",
    backgroundPosition: "-15435px 0",
    type: "electric",
    type2: null
  },
  {
    id: "126",
    backgroundPosition: "-15560px 0",
    type: "fire",
    type2: null
  },
  {
    id: "127",
    backgroundPosition: "-15685px 0",
    type: "bug",
    type2: null
  },
  {
    id: "128",
    backgroundPosition: "-15810px 0",
    type: "normal",
    type2: null
  },
  {
    id: "129",
    backgroundPosition: "-15935px 0",
    type: "water",
    type2: null
  },
  {
    id: "130",
    backgroundPosition: "-16060px 0",
    type: "water",
    type2: "flying"
  },
  {
    id: "131",
    backgroundPosition: "-16185px 0",
    type: "water",
    type2: "ice"
  },
  {
    id: "132",
    backgroundPosition: "-16310px 0",
    type: "nomral",
    type2: null
  },
  {
    id: "133",
    backgroundPosition: "-16435px 0",
    type: "nomral",
    type2: null
  },
  {
    id: "134",
    backgroundPosition: "-16560px 0",
    type: "water",
    type2: null
  },
  {
    id: "135",
    backgroundPosition: "-16685px 0",
    type: "electric",
    type2: null
  },
  {
    id: "136",
    backgroundPosition: "-16810px 0",
    type: "fire",
    type2: null
  },
  {
    id: "137",
    backgroundPosition: "-16935px 0",
    type: "normal",
    type2: null
  },
  {
    id: "138",
    backgroundPosition: "-17036px 0",
    type: "rock",
    type2: "water"
  },
  {
    id: "139",
    backgroundPosition: "-17161px 0",
    type: "rock",
    type2: "water"
  },
  {
    id: "140",
    backgroundPosition: "-17286px 0",
    type: "rock",
    type2: "water"
  },
  {
    id: "141",
    backgroundPosition: "-17411px 0",
    type: "rock",
    type2: "water"
  },
  {
    id: "142",
    backgroundPosition: "-17536px 0",
    type: "rock",
    type2: "flying"
  },
  {
    id: "143",
    backgroundPosition: "-17712px 0",
    type: "normal",
    type2: null
  },
  {
    id: "144",
    backgroundPosition: "-17837px 0",
    type: "ice",
    type2: "flying"
  },
  {
    id: "145",
    backgroundPosition: "-17991px 0",
    type: "electric",
    type2: "flying"
  },
  {
    id: "146",
    backgroundPosition: "-18140px 0",
    type: "fire",
    type2: "flying"
  },
  {
    id: "147",
    backgroundPosition: "-18320px 0",
    type: "dragon",
    type2: null
  },
  {
    id: "148",
    backgroundPosition: "-18445px 0",
    type: "dragon",
    type2: null
  },
  {
    id: "149",
    backgroundPosition: "-18570px 0",
    type: "dragon",
    type2: "flying"
  },
  {
    id: "150",
    backgroundPosition: "-18695px 0",
    type: "psychic",
    type2: null
  },
  {
    id: "151",
    backgroundPosition: "-18820px 0",
    type: "psychic",
    type2: null
  }
];
export default {
  pokeClasses
};

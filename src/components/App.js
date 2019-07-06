import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
// import ShinyView from "./ShinyView";
import Unselectedview from "./UnselectedView";
import Pokemon from "../Pokemon";
import Type from "../Type";
// import PokeTypeList from "../PokeTypeList"
import TypeView from "./TypeView";
// import Type2 from "../Type2";
import DropDown from "./DropDown";
// import BillList from "./BillList";
// import TypeList from "./TypeList";

import "./styles/App.css";
// import { pokeClasses } from "../pokeClasses";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: "unselected",
      type: {},
      isNotShiny: true,
      names: [],
      typeName: [],
      intUrls: [],
      type2Exist: true,
      doubleDamageFrom: []
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    // this.handleTypeFilter = this.handleTypeFilter.bind(this);
    this.handleShinyClick = this.handleShinyClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  //handles type select from dropdown
  handleSelect = event => {
    fetch(`https://pokeapi.co/api/v2/type/${event}/`)
      .then(res => res.json())

      .then(data => {
        this.setState({ typeName: data.name });

        //sets the type
        const type = new Type(data);

        const bobRoss = data.damage_relations.double_damage_from[0].name;
        this.setState({ doubleDamageFrom: bobRoss });
        this.setState({ type });

        //gets all the info for each pokemon in that type,
        //reading the /v2/type/X/pokeApiData
        const pokeApiData = data.pokemon;
        // console.log(pokeApiData)

        //maps the pokemon that I have in the array in order to,
        //in theory, cross reference with the ones from the PokeAPI
        // const laura = pokeClasses.map(value => {
        //   return value.name.toLowerCase();
        // });
        // console.log(laura);

        //maps the names and urls for pokeAPI
        const mapNameData = p => p.pokemon.name;
        const mapApiData = p => p.pokemon.url;
        const apiNames = pokeApiData.map(mapNameData);
        const apiUrls = pokeApiData.map(mapApiData);

        // console.log(apiUrls);
        // var res = apiUrls.substr(1, 33);
        // console.log(res);

        // console.log(apiNames);
        // console.log(apiUrls);

        const sliceApiUrls = apiUrls.map(result => result.slice(34));
        // console.log(sliceApiUrls)

        const replaceSlicedApi = sliceApiUrls.map(result =>
          result.replace(/[^\d.-]/g, "")
        );
        // console.log(replaceSlicedApi)

        const parseIntUrls = replaceSlicedApi.map(result => parseInt(result));

        //       console.log(parseIntUrls);

        const limitParseInts = parseIntUrls.filter(result => result < 151);

        // console.log(limitParseInts)
        // const snow = parseInt(sliceApiUrls);
        const stringinfyInts = limitParseInts.map(result => String(result));
        // console.log(stringinfyInts)

        const intPics = stringinfyInts.map(result => result + ".png");
        this.setState({ intUrls: intPics });

        const reUrlInts = stringinfyInts.map(
          result => "https://pokeapi.co/api/v2/pokemon/" + result + "/"
        );
        // console.log(reUrlInts)
        // console.log(pokeApiData)
        const urlIntLength = reUrlInts.length;
        // console.log(urlIntLength)

        const limitNamesToGen1 = apiNames.slice(0, urlIntLength);
        // console.log(limitNamesToGen1)

        const gen1NamesOnly = Array.from(limitNamesToGen1);

        this.setState({ names: gen1NamesOnly });
      })

      .catch(err => console.log(err));
  };

  // handleTypeFilter = event => {
  //   this.setState({ names: event });
  // };

  handleShinyClick = e => {
    this.setState(state => ({ isNotShiny: !this.state.isNotShiny }));
  };
  handleOnClick = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });

        const typesCount = data.types.length;
        // console.log(typesCount);

        if (typesCount === 1) {
          this.setState(prevState => ({ type2Exist: false }));
        } else {
          this.setState(prevState => ({ type2Exist: true }));
        }

        // console.log(pokemon);
      })
      .catch(err => console.log(err));
  };

  render() {
    const unselected1 = this.state.pokemon === "unselected";
    // const isNotShiny1 = this.state.isNotShiny;
    // const castro = this.state.names;
    // console.log(castro)

    if (unselected1) {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <Unselectedview pokemon={this.state.pokemon} />
          <DropDown
            handleTypeFilter={this.handleTypeFilter}
            handleSelect={this.handleSelect}
            type={this.state.type}
            names={this.state.names}
          />
          <TypeView
            names={this.state.names}
            typeName={this.state.typeName}
            intUrls={this.state.intUrls}
          />
        </div>
      );
    } else {
      // else if (isNotShiny1) {
      //   return (
      //     <div className="App">
      //       <PokeList handleOnClick={this.handleOnClick} />
      //       <DetailView
      //         pokemon={this.state.pokemon}
      //         handleTypeClick={this.handleTypeClick}
      //         handleShinyClick={this.handleShinyClick}
      //       />
      //       <DropDown
      //         handleTypeFilter={this.handleTypeFilter}
      //         handleSelect={this.handleSelect}
      //         type={this.state.type}
      //         names={this.state.names}
      //         name={this.state.name}
      //       />
      //       <TypeView
      //      names={this.state.names}
      //       />

      //     </div>
      //   );
      // }

      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
            isNotShiny={this.state.isNotShiny}
            pokemonSelected={this.state.pokemonSelected}
            handleSelect={this.handleSelect}
            type2Exist={this.state.type2Exist}
          />
          <DropDown
            handleTypeFilter={this.handleTypeFilter}
            handleSelect={this.handleSelect}
            type={this.state.type}
            names={this.state.names}
            name={this.state.name}
          />
          <TypeView
            names={this.state.names}
            typeName={this.state.typeName}
            intUrls={this.state.intUrls}
          />
        </div>
      );
    }
  }
}

export default App;

// handleTypeFitlering(id) {
//   fetch(`http://pokeapi.co/api/v2/type/${id}`)
//     .then(res => res.json())
//     .then(data => {})
//     .catch(err => console.log(err));
// }

// handleTypeClick(type) {
//   fetch(`http://pokeapi.co/api/v2/type/${type}/pokemon/[0]/url/`)
//     .then(res => res.json())
//     .then(data => {
//       const type = new Pokemon(data);
//       this.setState({ type });
//     })
//     .catch(err => console.log(err));
//   console.log({ type });
// }

// render() {
//   const unselected1 = this.state.pokemon;
//   const isShiny1 = this.state.isShiny;
//   return (
//     <div className="App">
//       {unselected1 === "unselected" ? (
//         <div>
//           <PokeList handleOnClick={this.handleOnClick} />
//           <Unselectedview pokemon={this.state.pokemon} />
//           <DropDown handleSelect={this.handleSelect} type={this.state.type} />
//         </div>
//       ) : (
//         <div>
//           <PokeList handleOnClick={this.handleOnClick} />
//           <DetailView
//             pokemon={this.state.pokemon}
//             handleTypeClick={this.handleTypeClick}
//             handleShinyClick={this.handleShinyClick}
//           />
//           <DropDown handleSelect={this.handleSelect} type={this.state.type} />
//         </div>
//       )}
//       {isShiny1 ? (
//         <div>
//           <PokeList handleOnClick={this.handleOnClick} />
//           <DetailView
//             pokemon={this.state.pokemon}
//             handleTypeClick={this.handleTypeClick}
//             handleShinyClick={this.handleShinyClick}
//           />
//           <DropDown handleSelect={this.handleSelect} type={this.state.type} />
//         </div>
//       ) : (
//         <div>
//           <PokeList handleOnClick={this.handleOnClick} />
//           <ShinyView
//             pokemon={this.state.pokemon}
//             handleTypeClick={this.handleTypeClick}
//             handleShinyClick={this.handleShinyClick}
//           />
//           <DropDown handleSelect={this.handleSelect} type={this.state.type} />
//         </div>
//       )}
//     </div>
//   );
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//   if (prevProps.names.length != this.props.names.length) {
//     console.log("cool");
//   }
// }
// componentDidUpdate(prevProps, prevState, snapshot) {
//   // If we have a snapshot value, we've just added new items.
//   // Adjust scroll so these new items don't push the old ones out of view.
//   // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//   if (snapshot !== null) {
//     const list = this.listRef.current;
//     list.scrollTop = list.scrollHeight - snapshot;
//   }
// }
// handleSelect = id => {
//   fetch(`https://pokeapi.co/api/v2/type/${id}/`)
//     .then(res => res.json())

//     .then(data => {
//       const type = new Type(data);

//       this.setState({ type });
//     })

//     .catch(err => console.log(err));
//   // this.setState({ name: typeFilterName });
//   console.log(this.state.names);
// };

// const kiwi = pokeApiData.map(value=>{
//   return value.pokemon.url.toLowerCase()
// })
// console.log(kiwi)

// const ash = apiUrls.forEach((emotion) => emotion.slice(0,8))

// const ally = ash.slice(1)
// console.log(ash)
// console.log(ally)

// const angie = apiNames.filter(age=>age !== laura)
// console.log(angie)

// const suze = apiNames.filter(age=>age===angie)
// console.log(suze)

// function myFunction(){
//   apiUrls.slice(0,8)
// }

// const res = apiUrls.slice(0,8);
// console.log(res)

//set state of list of pokemon by type

//parses id in pokeClasses since they are strings and
//I don't feel like changing them all to intergers
// const idParsing = pokeClasses.map(value => {
//   return parseInt(value.id);
// });

// this.setState({numberz:roland})
// console.log(roland)
// console.log(idParsing);

// const chief = apiNames.filter(value => {
//   return value === laura;
// });
// console.log(chief);

// this.setState({ liz: chief });

// const ryan = lily.filter(value => {
//   return value.name.toLowerCase() === laura;
// });

// console.log(ryan);

// if (apiNames === laura) {
//   console.log("cool");
// }

// const mappingFunction3 = p => p.pokeClasses.id;

// if (apiUrls == "https://pokeapi.co/api/v2/pokemon/85/") {
// }

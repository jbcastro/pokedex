import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Unselectedview from "./UnselectedView";
import Pokemon from "../Pokemon";
import Type from "../Type";
import TypeView from "./TypeView";
import TypeMon from "./TypeMon";
import DropDown from "./DropDown";
import "./styles/App.css";

//The Codeslinger's creed
//I do not click with my hand; he who clicks with his hand has forgotten the face of his father
//I click with my eye
//
//I do not type with my hand; he who types with his hand has forgotten the face of his father
//I type with my mind
//
//I do not code with my computer; he who codes with his computer has forgotten the face of his father
//I code with my heart

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: "unselected",
      type: {},
      isNotShiny: true,
      names: [],
      typeName: [],
      intPics: [],
      type2Exist: true,
      doubleDamageFrom: [],
      reUrlInts: [],
      limitParseInts: []
    };

    //handleSelect sets the type of the pokemon as well as filters it
    //to just gen 1
    this.handleSelect = this.handleSelect.bind(this);

    //handleOnClick sets the pokemon state and gets the individual pokemon data
    this.handleOnClick = this.handleOnClick.bind(this);
    
    //handleShinyClick changes the pics from shiny to not shiny
    this.handleShinyClick = this.handleShinyClick.bind(this);
    
    
  }
  //handles type select from dropdown or when a type button is clicked in detail view
  handleSelect = event => {
    fetch(`https://pokeapi.co/api/v2/type/${event}/`)
      .then(res => res.json())

      .then(data => {
        //sets the type
        const type = new Type(data);
        this.setState({ type });

        //gets all the info for each pokemon in that type,
        //reading the /v2/type/X/pokeApiData
        const pokeApiData = data.pokemon;

        //maps the names and urls for pokeAPI
        const mapNameData = p => p.pokemon.name;
        const mapApiData = p => p.pokemon.url;
        const apiNames = pokeApiData.map(mapNameData);
        const apiUrls = pokeApiData.map(mapApiData);

       
        //slices the first p34 characters of the the api urls to be left with just a 
        //number ie "3/"
        const sliceApiUrls = apiUrls.map(result => result.slice(34));
        
        //removes the "/" from the end of the sliced api url
        const replaceSlicedApi = sliceApiUrls.map(result =>
          result.replace(/[^\d.-]/g, "")
        );
        
        //turns the sliced api to a number
        const parseIntUrls = replaceSlicedApi.map(result => parseInt(result));

        
        //filters the sliced api to only first 151 pokemon (gen1) then sets state for the
        //prop to be used in TypeMon
        const limitParseInts = parseIntUrls.filter(result => result < 151);
        this.setState({ limitParseInts: limitParseInts });
        
        //stringinfy the number in order to put it back into a url
        const stringinfyInts = limitParseInts.map(result => String(result));
        
        //turns the stringified number back into a url and sets state
        const reUrlInts = stringinfyInts.map(
          result => "https://pokeapi.co/api/v2/pokemon/" + result + "/"
        );
        this.setState({ reUrlInts: reUrlInts });
        
        //gets the length of the array in order to not render the pokemon that are not gen 1
        //for instance gen 1 has 5 fairy types so this function and the next one (limitNamesToGen1)
        //would slice the array to just the first 5, instead of the 59 that exist in all the pokemon universe 
        const urlIntLength = reUrlInts.length;
        const limitNamesToGen1 = apiNames.slice(0, urlIntLength);

        //makes and array and sets the state of the gen1 names in order to fill the list in Typemon
        const gen1NamesOnly = Array.from(limitNamesToGen1);
        this.setState({ names: gen1NamesOnly });
       
        //sets the state of intPics in an array to use to fetch the pics of the pokemon used for
        //specefic types in TypeMon
        const intPics = stringinfyInts.map(
          result =>
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            result +
            ".png"
        );
        this.setState({ intPics: intPics });


        
      })

      .catch(err => console.log(err));
  };


  //button that will show the shiny version of the pokemon
  handleShinyClick = e => {
    this.setState(state => ({ isNotShiny: !this.state.isNotShiny }));
  };

  //sets the pokemon from the pokelist to be seen in detail view
  handleOnClick = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        //sets state of pokemon
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });

        //checks to see if the pokemon has duel type then sets state
        //if it has 1 then it will not render a button in DetailView
        const typesCount = data.types.length;
        if (typesCount === 1) {
          this.setState(prevState => ({ type2Exist: false }));
        } else {
          this.setState(prevState => ({ type2Exist: true }));
        }

       
      })
      .catch(err => console.log(err));
  };
 

  render() {
    //if the user has not selected a pokemon it will render a picture of Ash
    const unselected1 = this.state.pokemon === "unselected";
    

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
           
            doubleDamageFrom={this.state.doubleDamageFrom}
            
            type={this.state.type}
            names={this.state.names}
            intPics={this.state.intPics}
            
          />
          <TypeMon
            names={this.state.names}
            intPics={this.state.intPics}
            limitParseInts={this.state.limitParseInts}
            handleOnClick={this.handleOnClick}
          />
        </div>
      );
    } else {
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
            handleMoveClick={this.handleMoveClick}
          />
          <DropDown
            handleTypeFilter={this.handleTypeFilter}
            handleSelect={this.handleSelect}
            type={this.state.type}
            names={this.state.names}
          />
          <TypeView
            
            doubleDamageFrom={this.state.doubleDamageFrom}
            
            type={this.state.type}
            names={this.state.names}
            intPics={this.state.intPics}
            
          />
          <TypeMon
            names={this.state.names}
            intPics={this.state.intPics}
            limitParseInts={this.state.limitParseInts}
            handleOnClick={this.handleOnClick}
          />
        </div>
      );
    }
  }
}

export default App;


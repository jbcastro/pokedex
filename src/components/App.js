import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import ShinyView from "./ShinyView";
import Unselectedview from "./UnselectedView";
import Pokemon from "../Pokemon";
import Type from "../Type";
// import Type2 from "../Type2";
import DropDown from "./DropDown";
import BillList from "./BillList";
import TypeList from "./TypeList";

import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "unselected",
      type: {},
      isNotShiny: true,

      names: {}

      // typesCount: "1"
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
    this.handleShinyClick = this.handleShinyClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id, typeFilterName) {
    fetch(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(res => res.json())
      .then(data => {
        const type = new Type(data);

        this.setState({ type });
        this.setState({ name: typeFilterName });
      })
      .catch(err => console.log(err));
  }
  handleTypeFilter(typeFilterName) {
    this.setState({ names: typeFilterName });
  }

  handleShinyClick() {
    this.setState({ isNotShiny: !this.state.isNotShiny });
  }
  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
        console.log(pokemon);
      })
      .catch(err => console.log(err));
  }
  // handleTypeFitlering(id) {
  //   fetch(`http://pokeapi.co/api/v2/type/${id}`)
  //     .then(res => res.json())
  //     .then(data => {})
  //     .catch(err => console.log(err));
  // }

  render() {
    const unselected1 = this.state.pokemon === "unselected";
    const isNotShiny1 = this.state.isNotShiny;

    // const typesCount = this.state.typesCount;

    if (unselected1) {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <Unselectedview pokemon={this.state.pokemon} />
          <DropDown
            handleSelect={this.handleSelect}
            handleTypeFilter={this.handleTypeFilter}
            type={this.state.type}
          />

          {/* <BillList /> */}
        </div>
      );
    } else if (isNotShiny1) {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
          <DropDown
            handleSelect={this.handleSelect}
            handleTypeFilter={this.handleTypeFilter}
            type={this.state.type}
          />{" "}
          {/* <BillList /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <ShinyView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
          <DropDown
            handleSelect={this.handleSelect}
            handleTypeFilter={this.handleTypeFilter}
            type={this.state.type}
          />{" "}
          {/* <BillList /> */}
        </div>
      );
    }
  }

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
}

export default App;

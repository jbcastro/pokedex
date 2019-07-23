import React from "react";
import PokeCell from "./PokeCell";
import { pokeClasses } from "../pokeClasses";
import "./styles/PokeList.css";

//this is from Juan Diego Jimenez where I intially started this pokedex
//https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
        type={pokeClass.type}

      />
    );
  });

  return <section className="poke-list">{cells}</section>;
};

export default PokeList;

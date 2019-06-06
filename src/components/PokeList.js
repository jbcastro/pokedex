import React from "react";
import PokeCell from "./PokeCell";
import { pokeClasses } from "../pokeClasses";
import "./styles/PokeList.css";

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    // console.log({ pokeClass });
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
        type={pokeClass.type}

        // pokeType={pokeClass.type}
      />
    );
  });

  return <section className="poke-list">{cells}</section>;
};

export default PokeList;

import React from "react";
import sprites from "../assets/sprites.png";
import "./styles/PokeCell.css";

//this is from Juan Diego Jimenez where I intially started this pokedex
//https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition, type, name } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return (
    <button
      onClick={() => handleOnClick(id)}
      style={style}
      className="poke-cell"
      id={id}
      type={type}
      name={name}
    />
  );
};

export default PokeCell;

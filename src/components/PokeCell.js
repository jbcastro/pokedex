import React from "react";
import sprites from "../assets/sprites.png";
import "./styles/PokeCell.css";

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition, type } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return (
    <button
      onClick={() => handleOnClick(id)}
      style={style}
      className="poke-cell"
      id={id}
      type={type}
    />
  );
};

export default PokeCell;

import React from "react";
import "./styles/DetailView.css";

const ShinyView = ({ pokemon, handleTypeClick, handleShinyClick }) => {
  const { id, name, type, moves, shiny } = pokemon;

  return (
    <section className="detail-view">
      <img src={shiny} className="sprite-image" alt="sprite" />

      <div className="data-wrapper">
        <h1 className="data-name">Name: {name}</h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        {/* <button onClick={() => handleTypeClick(type)}>Type : {type}</button> */}

        <p className="data-char">Move: {moves}</p>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  );
};

export default ShinyView;

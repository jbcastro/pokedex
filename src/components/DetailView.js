import React from "react";
import "./styles/DetailView.css";

const DetailView = ({ pokemon, handleTypeClick, handleShinyClick }) => {
  const { id, name, type, moves, sprite } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />

      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        <button onClick={() => handleTypeClick(type)}>Type : {type}</button>
        <p className="data-char">Move: {moves}</p>
      </div>
    </section>
  );
};

export default DetailView;

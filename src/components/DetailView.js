import React from "react";
import "./styles/DetailView.css";

const DetailView = ({
  pokemon,
  handleTypeClick,
  handleShinyClick,
  handleTypeFitlering
}) => {
  const { name, type, moves, sprite } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />

      <div className="data-wrapper">
        <h1 className="data-name">Name: {name}</h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        {/* <button onClick={() => handleTypeClick(type)}>Type : {type}</button> */}
        <p className="data-char">Move: {moves}</p>
        <p className="data-char">Type: {type}</p>
        {/* <button onClick={() => handleTypeFitlering()}>tytdssv </button> */}
      </div>
    </section>
  );
};

export default DetailView;

import React from "react";
import "./styles/DetailView.css";
import ash from "../img/ash.png";

//a view if a pokemon is unselected
const UnselectedView = ({ pokemon }) => {
  

  return (
    <section className="detail-view">
      <img src={ash} className="sprite-image" alt="ash" />
      <div className="data-wrapper">
        <h3 className="data-name">Not just the pokemon, but the pokewomon and pokechildren too!</h3>
      </div>
    </section>
  );
};

export default UnselectedView;

import React from "react";
import "./styles/DetailView.css";
import ash from "../img/ash.png";

const UnselectedView = ({ pokemon }) => {
  // const { id, name, type, moves } = pokemon;

  return (
    <section className="detail-view">
      <img src={ash} className="sprite-image" alt="ash" />
      <div className="data-wrapper">
        <h1 className="data-name">Choose a mon!</h1>
      </div>
    </section>
  );
};

export default UnselectedView;

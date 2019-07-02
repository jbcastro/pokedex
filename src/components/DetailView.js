import React from "react";
import "./styles/DetailView.css";
import Dropdown from "react-bootstrap/Dropdown";


const DetailView = ({
  pokemon,
  handleTypeClick,
  handleShinyClick,
  handleTypeFitlering
}) => {
  const { name, moves, sprite, type } = pokemon;
  // const { type } = type;
  
const moveList = moves.map(result=>

<li key={result.move.name}>

 {result.move.name}
  </li>
  
)
  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />

      <div className="data-wrapper">
        <h1 className="data-name">Name: {name}</h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        {/* <button onClick={() => handleTypeClick(type)}>Type : {type}</button> */}
        <p className="data-char">Type: {type}</p>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        moves
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item> {moveList}
              </Dropdown.Item>
              </Dropdown.Menu>
    </Dropdown>

        {/* <ul className="data-char">Move: {moves}</ul> */}


        {/* <button onClick={() => handleTypeFitlering()}>tytdssv </button> */}
      </div>
    </section>
  );
};

export default DetailView;

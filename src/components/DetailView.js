import React from "react";
import "./styles/DetailView.css";
import Dropdown from "react-bootstrap/Dropdown";

const DetailView = ({
  pokemon,
  handleShinyClick,
  isNotShiny,
  handleSelect,
  type2Exist,
}) => {
  const { name, moves, sprite, type, shiny, type2 } = pokemon;

  //gets the shiny status in order to set the shiny button
  const notShiny = isNotShiny;

  //gets info for type button click 1 and 2
  const handleSelectFromButton = type;
  const handleSelectFromButton2 = type2;

  //checks to see if type 2 exist in order to render type2 button or not
  const doesType2Exist = type2Exist;

  //maps the moves names for each pokemon
  const moveListNames = (
    <ul className="plain">
      {" "}
      {moves.map((result) => (
        <li key={result.move.name}>{result.move.name}</li>
      ))}
    </ul>
  );

  return (
    <section className="detail-view">
      <div className="data-wrapper">
        {/* choses which sprite to render whether it is shiny or not */}
        {notShiny ? (
          <img src={sprite} className="sprite-image" alt="sprite" />
        ) : (
          <img src={shiny} className="sprite-image" alt="shiny" />
        )}
        {/* buttons to handle the type click or each pokemon */}
        <button onClick={() => handleSelect(handleSelectFromButton)}>
          Type: {type}
        </button>
        {doesType2Exist ? (
          <button onClick={() => handleSelect(handleSelectFromButton2)}>
            Type2: {type2}
          </button>
        ) : (
          <h1 />
        )}
        <h1 className="data-name">{name}</h1>
        {/* dropdown of moves */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            moves
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item> {moveListNames}</Dropdown.Item>
          </Dropdown.Menu>
          {/* the shiny button is here to keep things inline at the moment */}
          <button onClick={() => handleShinyClick()}>Shiny </button>
        </Dropdown>
      </div>
    </section>
  );
};

export default DetailView;

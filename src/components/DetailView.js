import React from "react";
import "./styles/DetailView.css";
import Dropdown from "react-bootstrap/Dropdown";

const DetailView = ({
  pokemon,
  handleTypeClick,
  handleShinyClick,
  handleTypeFitlering,
  isNotShiny,
  handleSelect,
  type2Exist
}) => {
  const { name, moves, sprite, type, shiny, type2 } = pokemon;
  // const { type } = type;
  const isShiny = isNotShiny;
  const handleSelectFromButton = type;
  const handleSelectFromButton2 = type2;
  // console.log(isShiny);

  const doesType2Exist = type2Exist;

  // if ((type2Exist = false)){
  //   return (null);
  // }else{
  //   return (
  //     <button onClick={() => handleSelect(handleSelectFromButton2)}>
  //       Type2:{type2}
  //     </button>
  //   )
  // }
  // console.log(doesType2Exist);
  // console.log(type2);

  const moveListNames = (
    <ul className="plain">
      {" "}
      {moves.map(result => (
        <li key={result.move.name}>{result.move.name}</li>
      ))}
    </ul>
  );
  const moveListUrls = (
    <ul>
      {" "}
      {moves.map(result => (
        <li key={result.move.url}>{result.move.url}</li>
      ))}
    </ul>
  );

  return (
    <section className="detail-view">
      {isShiny ? (
        <img src={sprite} className="sprite-image" alt="sprite" />
      ) : (
        <img src={shiny} className="sprite-image" alt="shiny" />
      )}

      <div className="data-wrapper">
        <button onClick={() => handleSelect(handleSelectFromButton)}>
          Type:{type}
        </button>

        {doesType2Exist ? (
          <button onClick={() => handleSelect(handleSelectFromButton2)}>
            Type2:{type2}
          </button>
        ) : (
          <h1 />
        )}

        <h1 className="data-name">Name: {name}</h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        {/* <button onClick={() => handleTypeClick(type)}>Type : {type}</button> */}
        {/* <p className="data-char">Type: {type}</p> */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            moves
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item> {moveListNames}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </section>
  );
};

export default DetailView;

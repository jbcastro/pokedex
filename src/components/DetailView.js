import React from "react";
import "./styles/DetailView.css";
import Dropdown from "react-bootstrap/Dropdown";


const DetailView = ({
  pokemon,
  handleTypeClick,
  handleShinyClick,
  handleTypeFitlering, 
  isNotShiny,
  handleSelect
}) => {
  const { name, moves, sprite, type, shiny } = pokemon;
  // const { type } = type;
  const isShiny = isNotShiny;
  

const moveListNames =(
  <ul className="plain"> {moves.map(result=>

<li key={result.move.name}>

 {result.move.name}
 
  </li>
 
  
)}
</ul>
)
const moveListUrls =(
  <ul> {moves.map(result=>

<li key={result.move.url}>

 {result.move.url}
 
  </li>
 
  
)}
</ul>
)
console.log({moveListUrls})
  return (
    
    <section className="detail-view">
    {isShiny ? (
      <img src={sprite} className="sprite-image" alt="sprite" />
    ):(

    
      <img src={shiny} className="sprite-image" alt="shiny" />
    )
    }
      <div className="data-wrapper">
      <button onClick={({type})=>handleSelect()}>Type:{type}</button>
        <h1 className="data-name">Name: {name}</h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        {/* <button onClick={() => handleTypeClick(type)}>Type : {type}</button> */}
        {/* <p className="data-char">Type: {type}</p> */}
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        moves
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item> {moveListNames}
              </Dropdown.Item>
              </Dropdown.Menu>
    </Dropdown>

      </div>
    </section>
  );
};

export default DetailView;

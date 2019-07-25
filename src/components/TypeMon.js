import React from "react";
import "./styles/PokeList.css";
import "./styles/DetailView.css";


//get props for names, intPics, parseInts, and handleOnClick button
const TypeMon = props => {
  const names = props.names;
  const intPics = props.intPics;
  const parseInts = props.limitParseInts;
  const handleOnClick = props.handleOnClick;
  const typeName = props.typeName;
  const doubleDamageFrom = props.doubleDamageFrom

  
  //map the names and the corresponding parseInts  into a list in order to set the detailview 
  //with the pokemon in the TypeMon view instead of the pokecell
  const listItems = names.map((str, idx) => (
    <button
      key={idx}
      onClick={() => handleOnClick(parseInts[idx])}
      className="type-cell"
    >
      <li>
        {str}
        <img src={intPics[idx]} alt={str} />
      </li>
    </button>
  ));
  return (

    <div className="type-mon">
      <p>Type: {typeName}</p>
      <p>Weak Against: {doubleDamageFrom}</p>
      
      <ul>{listItems}</ul>
     
      
      </div>
    
  );
};



export default TypeMon;

import React from "react";
import "./styles/PokeList.css";

const TypeMon = props => {
  const intPics = props.intPics;
  // const intPics = intPics2.map(result => fetch(result));
  const names = props.names;

  // const trap = names.map(
  //   (str, idx) => str.toString() + intPics[idx].toString()
  // );
  // console.log(trap);
  return (
    <section className="poke-list">
      <ul>
        {names.map((str, idx) => (
          <li key={str}>
            {str}
            <img src={intPics[idx]} alt={str} />
          </li>
        ))}
      </ul>
      {/* <ul>
        {snoop.map(result => (
          <li key={result.name}>
            {result.name}
            <img src={result.intPics} alt="gf" /> 
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default TypeMon;

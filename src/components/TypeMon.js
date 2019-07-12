import React from "react";
import "./styles/TypeMon.css";

const TypeMon = props => {
  const intPics = props.intPics;
  // const intPics = intPics2.map(result => fetch(result));
  const names = props.names;

  const trap = names.map((str, idx) => str + intPics[idx]);
  console.log(trap);
  return (
    <section className="type-mon">
      <ul>
        {trap.map(result => (
          <li key={result}>
            {names}
            <img src={intPics} />
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

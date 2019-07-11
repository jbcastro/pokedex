import React from "react";
import "./styles/TypeMon.css";

const TypeMon = props => {
  const intPics = props.intPics;

  const names = props.names;
  return (
    <section className="type-mon">
      <ul>
        <button>
          {names.map(item => (
            <li key={item}>{item}</li>
          ))}
        </button>
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

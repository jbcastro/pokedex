import React from "react";
import "./styles/TypeView.css";

//shows the type name and what it takes double damage from
const TypeView = ({ type }) => {
  const { typeName, doubleDamageFrom } = type;

 

  return (
    <section className="type-view">
      <p>type: {typeName}</p>
      <p>weak against : {doubleDamageFrom}</p>
    </section>
  );
};

export default TypeView;


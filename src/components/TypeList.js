import React from "react";
import TypeCell from "./TypeCell";
import { pokeClasses } from "../pokeClasses";

const TypeList = ({ handleSelect }) => {
  const cellz = pokeClasses.map(value => {
    return (
      <TypeCell key={value.id} handleSelect={handleSelect} name={value.name} />
    );
  });
  return { cellz };
};

export default TypeList;

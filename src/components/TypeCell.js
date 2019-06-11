import React from "react";
import DropDown from "./DropDown";
const TypeCell = ({ typeClass, handleSelect }) => {
  const { name, id } = typeClass;
  return <button onclick={() => handleSelect(id)} name={name} />;
};
export default TypeCell;

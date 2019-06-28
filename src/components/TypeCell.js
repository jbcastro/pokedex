import React from "react";
import './styles/TypeView.css'

const TypeCell = ({handleSelect, typeClass})=>{
  const {id, name}=typeClass;
  console.log(typeClass)
  return(
    <ul 
    className ="type-cell"
    id={id}
    name={name}
    />
  )
}
export default TypeCell;

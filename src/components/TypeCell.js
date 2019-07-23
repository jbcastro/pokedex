import React from "react";
import './styles/TypeView.css'

//this is from Juan Diego Jimenez where I intially started this pokedex
//https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7

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

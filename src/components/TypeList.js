import React from "react";
import TypeCell from "./TypeCell"
import {pokeClasses} from "../pokeClasses"

const TypeList = ({}) => {
    const cellz = pokeClasses.map(typeClass => {
        console.log(cellz)
        return (
            <TypeCell
            key={pokeClass.id}
            name={pokeClass.id}
            />
        )
    })
    return <section className="type-list">{cellz}</section>
};
export default TypeList;



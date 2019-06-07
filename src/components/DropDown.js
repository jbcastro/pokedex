import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { pokeClasses } from "../pokeClasses";
import pokemon from "./App";
import BillList from "./BillList";

const DropDown = ({ type, handleSelect }) => {
  const bill = type.type;
  const typeFilter = pokeClasses.filter(steve => {
    return steve.type.toLowerCase() === bill;
  });
  // function danny(id, dan) {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       const dan = "1";
  //       console.log(dan + " dan");
  //       // const typeFilterId = typeFilter.map(value => {
  //       //   return value.id;
  //       // });
  //     });
  // }
  const typeFilterId = typeFilter.map(value => {
    return value.id;
  });
  console.log(typeFilterId);

  const gregg = typeFilterId => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${typeFilterId}`)
      .then(res => res.json())
      .then(data => {
        const connie = new BillList(data);
        console.log(connie);
      });
  };

  if (typeFilterId === !gregg) {
    console.log("petty");
  }

  // console.log(danny.dan);

  // console.log(typeFilterId);
  // console.log(typeFilter);
  console.log("bill " + bill);

  return (
    <div>
      <li>{gregg}</li>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={type => handleSelect(1)}>
            Normal
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(2)}>
            Fighting
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(3)}>
            Flying
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(4)}>
            Poison
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(5)}>
            Ground
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(6)}>Rock </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(7)}>Bug </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(8)}>
            Ghost{" "}
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(9)}>Steel</Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(10)}>Fire</Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(11)}>
            Water
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(12)}>
            Grass
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(13)}>
            Electric
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(14)}>
            Psychic
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(15)}>Ice</Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(16)}>
            Dragon
          </Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(17)}>Dark</Dropdown.Item>
          <Dropdown.Item onClick={type => handleSelect(18)}>
            Fairy
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;

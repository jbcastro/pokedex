import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const DropDown = ({ type, handleSelect }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={type => handleSelect(1)}>Normal</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(2)}>
          Fighting
        </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(3)}>Flying</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(4)}>Poison</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(5)}>Ground</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(6)}>Rock </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(7)}>Bug </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(8)}>Ghost </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(9)}>Steel</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(10)}>Fire</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(11)}>Water</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(12)}>Grass</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(13)}>
          Electric
        </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(14)}>
          Psychic
        </Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(15)}>Ice</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(16)}>Dragon</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(17)}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={type => handleSelect(18)}>Fairy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;

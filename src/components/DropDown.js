import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/TypeMon.css";

//this dropdown uses the handleSelect function in order to view the type

const DropDown = ({ handleSelect }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="dropdown"
      >
        Choose Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            handleSelect("normal");
          }}
        >
          Normal
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => {
            handleSelect("fighting");
          }}
        >
          Fighting
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("flying");
          }}
        >
          Flying
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("poison");
          }}
        >
          Poison
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("ground");
          }}
        >
          Ground
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("rock");
          }}
        >
          Rock
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("bug");
          }}
        >
          Bug
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("ghost");
          }}
        >
          Ghost
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("steel");
          }}
        >
          Steel
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("fire");
          }}
        >
          Fire
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("water");
          }}
        >
          Water
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("grass");
          }}
        >
          Grass
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("electric");
          }}
        >
          Electric
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("psychic");
          }}
        >
          Psychic
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("ice");
          }}
        >
          Ice
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("dragon");
          }}
        >
          Dragon
        </Dropdown.Item>
        
        {/* <Dropdown.Item
          onClick={() => {
            handleSelect("dark");
          }}
        >
          Dark
        </Dropdown.Item> 
        there is no dark in gen 1
        */}
        <Dropdown.Item
          onClick={() => {
            handleSelect("fairy");
          }}
        >
          Fairy
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;


import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { pokeClasses } from "../pokeClasses";
import pokemon from "./App";
import BillList from "./BillList";
import TypeList from "./TypeList";

const DropDown = ({ type, handleSelect, handleTypeFilter }) => {
  const bill = type.type;
  const typeFilter = pokeClasses.filter(steve => {
    return steve.type.toLowerCase() === bill;
  });

  const typeFilterName = typeFilter.map(value => {
    return value.name;
  });
  console.log(typeFilterName);

  console.log("bill " + bill);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            handleSelect(1);
            handleTypeFilter(typeFilterName);
          }}
        >
          Normal
        </Dropdown.Item>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleSelect(1);
              handleTypeFilter(typeFilterName);
            }}
          >
            Normal2
          </Dropdown.Item>
        </Dropdown.Menu>

        <Dropdown.Item
          onClick={() => {
            handleSelect(2);
            handleTypeFilter(typeFilterName);
          }}
        >
          Fighting
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(3);
            handleTypeFilter(typeFilterName);
          }}
        >
          Flying
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(4);
            handleTypeFilter(typeFilterName);
          }}
        >
          Poison
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(5);
            handleTypeFilter(typeFilterName);
          }}
        >
          Ground
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(6);
            handleTypeFilter(typeFilterName);
          }}
        >
          Rock
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(7);
            handleTypeFilter(typeFilterName);
          }}
        >
          Bug
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(8);
            handleTypeFilter(typeFilterName);
          }}
        >
          Ghost
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(9);
            handleTypeFilter(typeFilterName);
          }}
        >
          Steel
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(10);
            handleTypeFilter(typeFilterName);
          }}
        >
          Fire
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(11);
            handleTypeFilter(typeFilterName);
          }}
        >
          Water
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(12);
            handleTypeFilter(typeFilterName);
          }}
        >
          Grass
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(13);
            handleTypeFilter(typeFilterName);
          }}
        >
          Electric
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(14);
            handleTypeFilter(typeFilterName);
          }}
        >
          Psychic
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(15);
            handleTypeFilter(typeFilterName);
          }}
        >
          Ice
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(16);
            handleTypeFilter(typeFilterName);
          }}
        >
          Dragon
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(17);
            handleTypeFilter(typeFilterName);
          }}
        >
          Dark
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect(18);
            handleTypeFilter(typeFilterName);
          }}
        >
          Fairy
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;

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
// const setBillList = ({ typeFilterId, typeFilterName }) => {
//   typeFilterId = typeFilter.map(value => {
//     return value.id;
//   });
//   typeFilterName = typeFilter.map(value => {
//     return value.name;
//   });
// };
// console.log(setBillList);
// const typeFilterId = typeFilter.map(value => {
//   return value.id;
// });
// console.log(typeFilterId);
// const typeFilterName = typeFilter.map(value => {
//   return value.name;
// });
// console.log(typeFilterName);
// console.log(setBillList);

// const gregg = typeFilterId => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${typeFilterId}`)
//     .then(res => res.json())
//     .then(data => {
//       const connie = new BillList(data);
//       console.log(connie);
//     });
// };

// console.log(danny.dan);

// console.log(typeFilterId);
// console.log(typeFilter);
// console.log("bill " + bill);

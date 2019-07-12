import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/TypeMon.css";

const DropDown = ({ handleSelect }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <Dropdown.Item
          onClick={() => {
            handleSelect("dark");
          }}
        >
          Dark
        </Dropdown.Item>
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

// const bill = type.type;

// const typeFilter = pokeClasses.filter(steve => {
//   return steve.type.toLowerCase() === bill;
// });

// const typeFilterName = typeFilter.map(value => {
//   return value.name;
// });

// console.log("bill " + bill);

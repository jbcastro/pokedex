import React from "react";
import "./styles/PokeList.css";
import uniqueid from "uniqid";

const TypeMon = props => {
  const names = props.names;
  const intPics = props.intPics;
  const parseInts = props.limitParseInts;

  const handleOnClick = props.handleOnClick;

  const listItems = names.map((str, idx) => (
    <button onClick={() => handleOnClick(parseInts[idx])} className="type-cell">
      <li key={parseInts[idx]}>
        {str}
        <img src={intPics[idx]} />
      </li>
    </button>
  ));
  return (
    <section className="type-mon">
      <ul>{listItems}</ul>
    </section>
  );
};

// const TypeMon = props => {
//   const intPics = props.intPics;
//   // const intPics = intPics2.map(result => fetch(result));
//   const names = props.names;
//   const limitParseInts = props.limitParseInts;

//   const listItems = names.map((str, idx) => (
//     <button onClick={() => handleOnClick(id)} className="type-cell">
//       <li key={limitParseInts[idx]}>{str}</li>
//       <li key={limitParseInts[idx + 100]}>
//         <img src={intPics[idx]} alt={str} />
//       </li>
//     </button>
//   ));

//   return (
//     <section className="type-mon">
//       <ul>{listItems}</ul>
//     </section>
//   );
// };

export default TypeMon;

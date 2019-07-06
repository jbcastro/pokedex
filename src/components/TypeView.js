import React from "react";
import "./styles/TypeView.css";
// import img from './img'
// import char from "../img/char.png";
// import "./img/"
const TypeView = props => {
  const names = props.names;
  const intUrls = props.intUrls;
  const typeName = props.typeName;
  // const typeName = typeNamez
  // console.log(typeName)
  const imgLinks = (
    <ul className="plain">
      {intUrls.map(result => (
        <li key={result}>
          <img src={result} />
        </li>
      ))}
    </ul>
  );
  // console.log(imgLinks);
  const typeListItems = (
    <ul className="plain">
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
  // console.log(typeListItems);

  return (
    <section className="type-view">
      type: {typeName}
      {typeListItems}
      {imgLinks}
    </section>
  );
};

export default TypeView;

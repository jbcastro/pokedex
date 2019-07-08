import React from "react";
import "./styles/TypeView.css";
import { pokeClasses } from "../pokeClasses";
import bulbasaur from "../assets/bulbasaur.png";
import { arrayExpression } from "@babel/types";

const TypeView = props => {
  const names = props.names;
  const intUrls = props.intUrls;
  const typeName = props.typeName;
  const dubDamage0 = props.doubleDamageFrom;
  const reUrlInts = props.reUrlInts;
  const butt =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const steve = intUrls.map(result => String(result));
  // console.log(steve);
  // const buttass = intUrls.map(
  //   result =>
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
  //     result
  // );
  const buttass = steve.map(result => butt + result);
  // console.log(assbutt);

  // const buttass = assbutt.forEach(result => fetch(result));

  // console.log(buttass);
  // console.log(names);

  // const imgLinks = buttass.map(result => <li key={result} img src={result} />);

  // const typeListItems = names.map(name => <li key={name} />);
  // console.log(imgLinks);
  // console.log(typeListItems);

  // const boner = name => (
  //   <ul className="plain">
  //     {names.map(name => (
  //       <li key={name}>{name}</li>
  //     ))}
  //     {buttass.map(result => (
  //       <li key={result}>
  //         {name}
  //         <img src={result} />
  //       </li>
  //     ))}
  //   </ul>
  // );

  // console.log(typeListItems);

  // const homer = buttass.keys(buttass);
  // console.log(homer);
  // const merge = { ...names[0], ...buttass[0] };
  // console.log(merge);

  const marge = Object.keys(buttass);
  console.log(marge);

  const lisa = Object.keys(names);
  const maggie = lisa.map(result => result + { names });
  console.log(maggie);

  const merge = { ...marge, ...buttass };
  // console.log(merge);
  // const ginger = merge => (
  //   <ul className="plain">
  //     {merge.map(result => (
  //       <li key={result.id}>{result.names}</li>
  //     ))}
  //   </ul>
  // );
  // console.log(ginger);

  return (
    <section className="type-view">
      type: {typeName}
      weak against : {dubDamage0}
      {/* <ul>
        {names.map(name => (
          <TypeView key={name} value={name} />
        ))}
      </ul> */}
    </section>
  );
};

export default TypeView;

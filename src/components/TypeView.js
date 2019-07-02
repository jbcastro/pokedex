import React from "react";
import './styles/TypeView.css'

const TypeView = (
 props)=>{

const names = props.names;


const typeName = props.typeName;
// const typeName = typeNamez
// console.log(typeName)

const listItems = names.map((name)=>
<li key={name}>
{name}

</li>
)



  return(
    
    <section className="type-view">
    type: {typeName}
    
    
   {listItems}
   
    
    </section>
  )
  
}


export default TypeView



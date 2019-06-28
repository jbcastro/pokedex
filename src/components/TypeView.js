import React from "react";
import './styles/TypeView.css'

const TypeView = (
 props)=>{

const names = props.names;
const listItems = names.map((name)=>
<li key={name}>
{name}
</li>
)


  return(
    <ul>
    
   name:{listItems}
    
    </ul>
  )
  
}


export default TypeView



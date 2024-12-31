import React from 'react'
import { useState } from 'react'
import data from './data';
import './style.css'

function Accordian() {
const[selected,setSelected] =useState(null);
const[enableMultiSelection,setEnableMultiSelection] = useState(false);
const [multiple,setMultiple] = useState([]);

function handlesingleselection(getcurrentid){
setSelected(getcurrentid === selected ? null : getcurrentid)

}
function handlemultiselection(getcurrentid){
let cpymultiple = [...multiple];
const findindexofcurrentid = cpymultiple.indexOf(getcurrentid);

// console(findindexofcurrentid);
if(findindexofcurrentid === -1) cpymultiple.push(getcurrentid);
else cpymultiple.splice(findindexofcurrentid ,1);

  setMultiple(cpymultiple);

}
console.log(selected,multiple)
  return (
    <div className='wrapper'>
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi selection</button>
        <div className='accordian'>
{
    data && data.length > 0 ?
    data.map(dataitem=><div className='item'>
<div onClick={enableMultiSelection ? ()=>handlemultiselection(dataitem.id)
: ()=>handlesingleselection(dataitem.id)} className='title'>
    <h3>{dataitem.question}</h3>
    <span>+</span>
    </div>
{
  enableMultiSelection ?
  multiple.indexOf(dataitem.id) !== -1 &&
  <div className='content'>{dataitem.answer}</div> :
  selected === dataitem.id && <div className='content'> {dataitem.answer}</div>
}
    {/* {
      selected === dataitem.id ?(
        <div className='content'>{dataitem.answer}</div>)
        :null
    } */}
    </div>)
 : <div>No data</div>
}
        </div>
    </div>
  )
}

export default Accordian
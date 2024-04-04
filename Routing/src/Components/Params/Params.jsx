import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {
    let {name}=useParams();
    console.log(name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
0

export default Params
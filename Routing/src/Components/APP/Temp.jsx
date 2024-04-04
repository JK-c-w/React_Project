import React from "react";
import { useMyContext } from './My.jsx';

function Temp() {
    const { count, increment, decrement } = useMyContext();

  return (
    <div>Temp :{count}</div>
  )
}

export default Temp
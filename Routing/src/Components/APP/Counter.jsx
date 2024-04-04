// Counter.js
import React from 'react';
import { useMyContext } from './My.jsx';

function Counter() {
  const { count, increment, decrement } = useMyContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log(children);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <h1>hdafik</h1>
    <MyContext.Provider value={{ count, increment, decrement }}>
      <h1>MY CONTEXT</h1>
      {children}
    </MyContext.Provider>
   </> 
 );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

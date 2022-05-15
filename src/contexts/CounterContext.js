import React, { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const values = { count, increase, decrease };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;

import React, { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

const CounterDisplay = () => {
  const ctx = useContext(CounterContext);

  return <p>Count is: {ctx.count}</p>;
};

export default CounterDisplay;

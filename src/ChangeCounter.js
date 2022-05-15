import React, { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

const ChangeCounter = () => {
  const ctx = useContext(CounterContext);
  return (
    <>
      <button onClick={ctx.increase}>Increase</button>
      <button onClick={ctx.decrease}>Decrease</button>
    </>
  );
};

export default ChangeCounter;

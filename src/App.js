import React from "react";
import "./App.css";
import Conditional from "./Conditional";
import Form from "./Form";
import Text from "./Text";
import Title from "./Title";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  const data = [
    {
      name: "Gourav",
      age: 18,
    },
    {
      name: "Akshay",
      age: 19,
    },
    {
      name: "Soumya",
      age: 21,
    },
  ];
  return (
    <CounterContextProvider>
      {/* {data.map((a, b) => {
        return (
          <>
            <Text name={a.name} age={a.age} />
          </>
        );
      })}
      <Conditional />
      <Text name="Akashy" age="21" /> */}
      {/* <Form /> */}
      <Title />
    </CounterContextProvider>
  );
}

export default App;

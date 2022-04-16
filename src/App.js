import React from "react";
import "./App.css";
import Conditional from "./Conditional";
import Text from "./Text";

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
    <>
      {data.map((a, b) => {
        return (
          <>
            <Text name={a.name} age={a.age} />
          </>
        );
      })}
      <Conditional />
      <Text name="Akashy" age="21" />
    </>
  );
}

export default App;

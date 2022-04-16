import React from "react";

const Text = ({ name, age }) => {
  // const { name, age } = props;
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
};

export default Text;

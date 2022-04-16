import React from "react";

const Conditional = () => {
  const bool = false;

  return <>{bool && <p>Hello</p>}</>;
};

export default Conditional;

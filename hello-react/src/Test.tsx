import React from "react";
import Button from "./Button";

import som, { multiply } from "./utils/helpers";
import Avatar from "./Avatar";

interface TestProps {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

// Components werken met PascalCasing
const Test = (props: TestProps) => {
  const result = som(3, 5);
  const resultMulti = multiply(3, 5);

  return (
    <div style={{ backgroundColor: "red" }}>
      <p>Het resultaat van de som is: {result}</p>
      <p>Het resultaat van de vermenigvuldiging is: {resultMulti}</p>

      <Avatar {...props} />

      <Button>Vanuit Test component</Button>
    </div>
  );
};

export default Test;

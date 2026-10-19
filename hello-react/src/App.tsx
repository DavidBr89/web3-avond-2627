import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import List from "./List";

// import { Fragment } from "react";

import Test from "./Test";

function App() {
  const imageUrl =
    "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg";

  // JSX

  // const aDiv = document.createElement("div");
  // const aH2 = document.createElement("h2");
  // aH2.innerText = "Web 3";

  // const aP = document.createElement("p");
  // aP.innerText = "David Breckx";

  // aDiv.appendChild(aH2);
  // aDiv.appendChild(aP);

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div id="aDiv" className="divs">
        <h2>Web 3</h2>
        <p>David Breckx</p>
        <p>{counter}</p>

        <button
          onClick={() => {
            setCounter((prevValue) => prevValue - 1);
            setCounter((prevValue) => prevValue - 1);
            setCounter((prevValue) => prevValue - 1);
          }}>
          Verlaag vanuit App
        </button>

        <Counter updateCounter={setCounter} />
        <Counter updateCounter={setCounter} />

        <img></img>
        <Test url={imageUrl} width={100} height={100} />
      </div>
      <div>
        <p>2026-2027</p>
        <Button isActive={true} size={500} person={{ fName: "John" }}>
          <div>
            <img />
            <p>Icon Button</p>
          </div>
        </Button>
        <List />
      </div>
    </>
  );
}

export default App;

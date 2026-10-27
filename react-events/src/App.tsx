// import "./App.css";

// import { useEffect, useState } from "react";
import { useState } from "react";
import Button from "./shared/components/Button";
import EventList from "./features/events/components/EventList";

function App() {
  const [counter, setCounter] = useState(0);

  // console.log(counter);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     console.log("tick");
  //   }, 1000);

  //   // Cleanup functie
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <div>
      <EventList />

      <div className="bg-zinc-800 min-h-screen flex justify-between items-center p-8">
        <p className="text-3xl font-light text-white">{counter}</p>

        <Button
          onClick={() => {
            // console.log(1);
            setCounter((prevCounter) => prevCounter + 1);
          }}
          className="bg-amber-600">
          Test 1
        </Button>
        <Button>Test 2</Button>
      </div>
    </div>
  );
}

export default App;

// import "./App.css";

// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Button from "./shared/components/Button";
import { useNavigate } from "react-router";

function App() {
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  // console.log(counter);

  // useEffect(() => {
  //   console.log("test");
  // });

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("tick");
    }, 1000);

    // // Cleanup functie
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
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
        <Button
          onClick={() => {
            navigate("/events");
          }}>
          Ga naar events
        </Button>
      </div>
    </div>
  );
}

export default App;

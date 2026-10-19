import React, { useState, type Dispatch, type SetStateAction } from "react";

interface Person {
  id: number;
  fName: string;
  lName: string;
}

interface CounterProps {
  updateCounter: Dispatch<SetStateAction<number>>;
}

const Counter = ({ updateCounter }: CounterProps) => {
  const [person, setPerson] = useState<Person | null>(null);

  return (
    <div>
      <button
        onClick={() => {
          updateCounter((prevValue) => prevValue + 1);
        }}>
        Verhoog
      </button>
      <p>{person?.fName}</p>
      <button
        onClick={() => {
          setPerson({ id: 1, fName: "John", lName: "Doe" });
        }}>
        Laad persoon in state
      </button>
      <button
        onClick={() => {
          if (person !== null) {
            setPerson({ ...person, fName: "Jane" });
          }
        }}>
        Wijzig naam
      </button>
    </div>
  );
};

export default Counter;

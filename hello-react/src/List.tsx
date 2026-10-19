import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const arr: Item[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Tom" },
  { id: 4, name: "Els" },
  { id: 5, name: "Ann" },
];

const List = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleClick = () => {
    setItems([...items, { id: 6, name: "Jonathan" }]);
  };

  return (
    <>
      <ul>
        {arr.map((v) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
      <ul>
        {items.map((it) => (
          <li key={it.id}>{it.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Voeg element toe</button>
    </>
  );
};

export default List;

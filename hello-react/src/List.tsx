import React from "react";

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Tom" },
  { id: 4, name: "Els" },
  { id: 5, name: "Ann" },
];

const List = () => {
  return (
    <ul>
      {arr.map((v) => {
        return <li key={v.id}>{v.name}</li>;
      })}
    </ul>
  );
};

export default List;

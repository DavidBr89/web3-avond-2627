// type ButtonProps = {
//   text: string;
// } & PropsWithChildren;

import React, { type PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  // text: string;
  isActive?: boolean;
  onClick?: () => void;
  person?: {
    fName: string;
  };
  size?: number;
}

const Button = ({ size = 200, children, isActive, person }: IButtonProps) => {
  // if (isActive) {
  //   return (
  //     <button style={{ height: `${size}px`, backgroundColor: "blue" }}>
  //       {children}
  //     </button>
  //   );
  // }

  return (
    <>
      <button
        style={{
          height: `${size}px`,
          backgroundColor: isActive ? "blue" : "red",
        }}>
        {isActive ? children : "NIET ACTIEF"}
      </button>
      {person !== undefined && <p>{person.fName}</p>}
    </>
  );
};

export default Button;

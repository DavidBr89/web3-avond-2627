import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

// interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

// }

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 bg-sky-700 rounded-lg cursor-pointer hover:bg-sky-900 text-white font-extrabold",
        props.className,
      )}>
      {props.children}
    </button>
  );
};

export default Button;

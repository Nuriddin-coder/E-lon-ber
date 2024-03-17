import React from "react";
import clsx from "clsx";

export const Buttons = ({ children, variant, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("font-bold hover:scale-105 duration-200", {
        "px-5 py-3 rounded-[16px] bg-black text-white": variant === "primary",
        "px-5 py-3 rounded-[16px] border-[2px]  border-black bg-transparent text-black":
          variant === "outline",
        "px-5 pt-1 pb-1.5 rounded-[6px] bg-black text-white": variant === "third",
      })}
    >
      {children}
    </button>
  );
};

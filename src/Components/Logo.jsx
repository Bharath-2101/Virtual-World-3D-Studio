import React from "react";

const Logo = () => {
  return (
    <div className="h-[50%] aspect-square">
      <svg viewBox="0 0 50 50" className="h-full w-full">
        <circle
          cx="25"
          cy="25"
          r="23"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M25 8 L8 29 L27 29"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M25 42 L42 21 L23 21"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;

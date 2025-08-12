import React from "react";

const Anchor = () => {
  return (
    <svg height={30} width={30} viewBox="0 0 30 30">
      <circle
        cx={15}
        cy={15}
        r={3}
        stroke="black"
        fill="none"
        strokeWidth={2}
      />
      <line x1={15} x2={15} y1={12} y2={4} stroke="black" strokeWidth={2} />
      <line x1={15} x2={15} y1={18} y2={26} stroke="black" strokeWidth={2} />
      <line x1={18} x2={26} y1={15} y2={15} stroke="black" strokeWidth={2} />
      <line x1={4} x2={12} y1={15} y2={15} stroke="black" strokeWidth={2} />
    </svg>
  );
};

export default Anchor;

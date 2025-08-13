import React, { memo } from "react";

const Anchor = ({ size = 30, color = "black", strokeWidth = 2 }) => {
  return (
    <svg height={size} width={size} viewBox="0 0 30 30" aria-hidden="true">
      <circle
        cx={15}
        cy={15}
        r={3}
        stroke={color}
        fill="none"
        strokeWidth={strokeWidth}
      />
      <line
        x1={15}
        x2={15}
        y1={12}
        y2={4}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={15}
        x2={15}
        y1={18}
        y2={26}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={18}
        x2={26}
        y1={15}
        y2={15}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={4}
        x2={12}
        y1={15}
        y2={15}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default memo(Anchor);

import React, { ComponentPropsWithoutRef } from "react";

export const BurgerMenuIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      fill="none"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid"
      stroke="currentColor"
      {...props}
    >
      <g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </g>
    </svg>
  );
};

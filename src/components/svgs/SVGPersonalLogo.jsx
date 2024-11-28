import React from "react";

const SVGPersonalLogo = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width="24px"
      height="24px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-6.5 7h-2v7h2v-7zm-1-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5 9h-2v-3.5c0-.83-.67-1.5-1.5-1.5S13 13.67 13 14.5V17h-2v-7h2v1.25c.41-.59 1.09-1.25 2-1.25 1.66 0 3 1.34 3 3V17z" />
    </svg>
  );
};

export default SVGPersonalLogo;

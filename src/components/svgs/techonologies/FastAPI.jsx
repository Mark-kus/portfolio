import React from "react";

const FastAPI = ({ width = "full", height = "full" }) => {
  return (
    <svg
      fill="#009485"
      viewBox="-2.4 -2.4 28.80 28.80"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g
        id="SVGRepo_bgCarrier"
        stroke-width="0"
        transform="translate(3.24,3.24), scale(0.73)"
      >
        <rect
          x="-2.4"
          y="-2.4"
          width="28.80"
          height="28.80"
          rx="14.4"
          fill="#FFF"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="1.056"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"></path>
      </g>
    </svg>
  );
};

export default FastAPI;

import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function ThreePointsSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.width}
      viewBox="0 0 8 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20C5.10457 20 6 19.1046 6 18C6 16.8954 5.10457 16 4 16C2.89543 16 2 16.8954 2 18C2 19.1046 2.89543 20 4 20Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 34C5.10457 34 6 33.1046 6 32C6 30.8954 5.10457 30 4 30C2.89543 30 2 30.8954 2 32C2 33.1046 2.89543 34 4 34Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ThreePointsSvg;

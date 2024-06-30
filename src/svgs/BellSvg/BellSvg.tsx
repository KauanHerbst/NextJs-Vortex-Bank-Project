import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function BellSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 17.1667 2 19.5 2 19.5H23C23 19.5 19.5 17.1667 19.5 9Z"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5169 24.1667C14.3118 24.5203 14.0174 24.8138 13.6632 25.0179C13.3089 25.2219 12.9073 25.3293 12.4986 25.3293C12.0898 25.3293 11.6882 25.2219 11.334 25.0179C10.9797 24.8138 10.6853 24.5203 10.4802 24.1667"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default BellSvg;

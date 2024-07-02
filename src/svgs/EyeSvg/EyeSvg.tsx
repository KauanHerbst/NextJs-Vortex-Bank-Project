import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function EyeSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33325 15.9999C1.33325 15.9999 6.66659 5.33325 15.9999 5.33325C25.3333 5.33325 30.6666 15.9999 30.6666 15.9999C30.6666 15.9999 25.3333 26.6666 15.9999 26.6666C6.66659 26.6666 1.33325 15.9999 1.33325 15.9999Z"
        stroke="black"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        stroke="black"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default EyeSvg;

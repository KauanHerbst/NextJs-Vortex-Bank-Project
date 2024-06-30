import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function MenuSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 33 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.5 8.33325H2"
        stroke="white"
        stroke-width="3.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.5 2H2"
        stroke="white"
        stroke-width="3.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.5 14.6667H2"
        stroke="white"
        stroke-width="3.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.5 21H2"
        stroke="white"
        stroke-width="3.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default MenuSvg;

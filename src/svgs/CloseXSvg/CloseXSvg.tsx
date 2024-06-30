import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function CloseXSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2L2 22"
        stroke="white"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 2L22 22"
        stroke="white"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CloseXSvg;

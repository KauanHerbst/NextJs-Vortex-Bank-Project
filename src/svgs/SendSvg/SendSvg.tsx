import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function SendSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.383 1L9.72266 11.6604"
        stroke="white"
        stroke-width="1.93825"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.3825 1L13.5986 20.3825L9.72211 11.6604L1 7.78386L20.3825 1Z"
        stroke="white"
        stroke-width="1.93825"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SendSvg;

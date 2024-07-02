import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function MedalSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.width}
      viewBox="0 0 32 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6818 29.3636C23.2381 29.3636 29.3636 23.2381 29.3636 15.6818C29.3636 8.12556 23.2381 2 15.6818 2C8.12556 2 2 8.12556 2 15.6818C2 23.2381 8.12556 29.3636 15.6818 29.3636Z"
        stroke="black"
        stroke-width="3.90909"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.27418 27.1941L5.90918 45L15.6819 39.1364L25.4546 45L23.0896 27.1746"
        stroke="black"
        stroke-width="3.90909"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default MedalSvg;

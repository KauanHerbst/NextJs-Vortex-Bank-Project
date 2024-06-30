import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function HouseSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.width}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7.84816L9.51906 2L17.0381 7.84816V17.0381C17.0381 17.4813 16.8621 17.9063 16.5487 18.2196C16.2354 18.533 15.8104 18.709 15.3672 18.709H3.6709C3.22775 18.709 2.80275 18.533 2.4894 18.2196C2.17604 17.9063 2 17.4813 2 17.0381V7.84816Z"
        stroke="white"
        stroke-width="2.33926"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.0127 18.709V10.3545H12.0254V18.709"
        stroke="white"
        stroke-width="2.33926"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HouseSvg;

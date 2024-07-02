import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function InformationSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5 56C44.1355 56 56 44.1355 56 29.5C56 14.8645 44.1355 3 29.5 3C14.8645 3 3 14.8645 3 29.5C3 44.1355 14.8645 56 29.5 56Z"
        stroke="black"
        stroke-width="5.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7886 21.5501C22.4116 19.7791 23.6413 18.2856 25.26 17.3343C26.8786 16.3831 28.7816 16.0353 30.6321 16.3527C32.4825 16.6701 34.1609 17.6322 35.37 19.0685C36.5791 20.5048 37.2409 22.3227 37.2381 24.2001C37.2381 29.5001 29.2881 32.1501 29.2881 32.1501"
        stroke="black"
        stroke-width="5.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.5005 42.75H29.5268"
        stroke="black"
        stroke-width="5.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default InformationSvg;

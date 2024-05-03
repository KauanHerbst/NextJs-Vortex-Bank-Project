import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function ApprovedSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49 23.8972V26.0132C48.9972 30.9729 47.3911 35.7989 44.4215 39.7714C41.4518 43.7438 37.2775 46.6499 32.5213 48.0561C27.7651 49.4624 22.6817 49.2935 18.0293 47.5747C13.3769 45.8559 9.4047 42.6792 6.70521 38.5184C4.00571 34.3576 2.72352 29.4357 3.04986 24.4867C3.37619 19.5377 5.29358 14.8267 8.51604 11.0564C11.7385 7.28615 16.0934 4.65854 20.9312 3.5655C25.7691 2.47246 30.8306 2.97254 35.361 4.99117"
        stroke="white"
        stroke-width="4.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.0001 7.61353L26.0001 30.6365L19.1001 23.7365"
        stroke="white"
        stroke-width="4.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ApprovedSvg;

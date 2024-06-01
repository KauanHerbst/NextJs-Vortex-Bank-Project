import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function ApprovedBlueSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76 36.7086V40.0206C75.9956 47.7837 73.4818 55.3374 68.8336 61.5552C64.1854 67.7729 57.6518 72.3215 50.2073 74.5226C42.7627 76.7237 34.8061 76.4594 27.5241 73.7691C20.242 71.0788 14.0248 66.1065 9.79946 59.594C5.57416 53.0815 3.56725 45.3776 4.07804 37.6313C4.58882 29.885 7.58994 22.5114 12.6338 16.6101C17.6777 10.7088 24.494 6.59598 32.0663 4.88513C39.6385 3.17428 47.561 3.95702 54.652 7.11661"
        stroke="#007BFF"
        stroke-width="7.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M76.0002 11.2207L40.0002 47.2567L29.2002 36.4567"
        stroke="#007BFF"
        stroke-width="7.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ApprovedBlueSvg;

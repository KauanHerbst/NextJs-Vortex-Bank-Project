import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function BankSvg(Props: SvgProps) {
  return (
    <svg
      className={Props.class}
      width={Props.width}
      height={Props.width}
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 43H42.2926M5.18292 36.4512H40.1096M9.54876 36.4512V25.5366M18.2804 36.4512V25.5366M27.0121 36.4512V25.5366M35.7438 36.4512V25.5366M22.6463 12.4541L22.6624 12.4394M42.2926 18.9879L27.2872 5.64971C25.645 4.19008 24.824 3.46029 23.8975 3.18312C23.0811 2.93896 22.2114 2.93896 21.395 3.18312C20.4686 3.46029 19.6476 4.19008 18.0055 5.64971L3 18.9879H42.2926Z"
        stroke="white"
        stroke-width="4.36584"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default BankSvg;

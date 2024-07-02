import { SvgProps } from '@/interfaces/svgprops';
import React from 'react';

function ClosedEyeSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.width}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.64 26.6399C24.1536 28.5352 21.126 29.5852 18 29.6363C7.81818 29.6363 2 17.9999 2 17.9999C3.80929 14.6281 6.31874 11.6823 9.36 9.35993M14.9455 6.71265C15.9467 6.4783 16.9717 6.36115 18 6.36356C28.1818 6.36356 34 17.9999 34 17.9999C33.1171 19.6517 32.0641 21.2068 30.8582 22.6399M21.0836 21.0836C20.6841 21.5123 20.2024 21.8562 19.6671 22.0946C19.1319 22.3331 18.554 22.4614 17.9681 22.4717C17.3822 22.4821 16.8002 22.3743 16.2569 22.1548C15.7135 21.9354 15.22 21.6087 14.8056 21.1943C14.3912 20.78 14.0646 20.2864 13.8451 19.743C13.6256 19.1997 13.5179 18.6177 13.5282 18.0318C13.5385 17.4459 13.6668 16.8681 13.9053 16.3328C14.1438 15.7975 14.4876 15.3158 14.9164 14.9163"
        stroke="black"
        stroke-width="2.90909"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 2L34 34"
        stroke="black"
        stroke-width="2.90909"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ClosedEyeSvg;

import { SvgProps } from '@/interfaces/svgprops';

function SuitCaseSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 61 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.5 14.0002H8.5C5.46243 14.0002 3 16.4627 3 19.5002V47.0002C3 50.0378 5.46243 52.5002 8.5 52.5002H52.5C55.5376 52.5002 58 50.0378 58 47.0002V19.5002C58 16.4627 55.5376 14.0002 52.5 14.0002Z"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M41.5 52.5V8.5C41.5 7.04131 40.9205 5.64236 39.8891 4.61091C38.8576 3.57946 37.4587 3 36 3H25C23.5413 3 22.1424 3.57946 21.1109 4.61091C20.0795 5.64236 19.5 7.04131 19.5 8.5V52.5"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SuitCaseSvg;

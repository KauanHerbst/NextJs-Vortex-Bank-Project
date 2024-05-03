import { SvgProps } from '@/interfaces/svgprops';

function CalendarSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 47 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6667 7.58301H7.58333C5.05203 7.58301 3 9.63504 3 12.1663V44.2497C3 46.781 5.05203 48.833 7.58333 48.833H39.6667C42.198 48.833 44.25 46.781 44.25 44.2497V12.1663C44.25 9.63504 42.198 7.58301 39.6667 7.58301Z"
        stroke="white"
        stroke-width="4.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.7915 3V12.1667"
        stroke="white"
        stroke-width="4.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4585 3V12.1667"
        stroke="white"
        stroke-width="4.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 21.333H44.25"
        stroke="white"
        stroke-width="4.58333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CalendarSvg;

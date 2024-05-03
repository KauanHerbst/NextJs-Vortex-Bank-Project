import { SvgProps } from '@/interfaces/svgprops';

function PadlockSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 47 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1113 23.5V14.3889C12.1113 11.3684 13.3112 8.47156 15.4471 6.33573C17.5829 4.1999 20.4797 3 23.5002 3C26.5207 3 29.4175 4.1999 31.5534 6.33573C33.6892 8.47156 34.8891 11.3684 34.8891 14.3889V23.5"
        stroke="#007BFF"
        stroke-width="4.55556"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.4444 23.5H7.55556C5.03959 23.5 3 25.5396 3 28.0556V44C3 46.516 5.03959 48.5556 7.55556 48.5556H39.4444C41.9604 48.5556 44 46.516 44 44V28.0556C44 25.5396 41.9604 23.5 39.4444 23.5Z"
        stroke="#007BFF"
        stroke-width="4.55556"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PadlockSvg;

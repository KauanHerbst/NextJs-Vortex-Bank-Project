import { SvgProps } from '@/interfaces/svgprops';

function ArrowUpWhiteSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 93 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 89.0995L85 8"
        stroke="white"
        stroke-width="14.9672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8H85V89.0995"
        stroke="white"
        stroke-width="14.9672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowUpWhiteSvg;

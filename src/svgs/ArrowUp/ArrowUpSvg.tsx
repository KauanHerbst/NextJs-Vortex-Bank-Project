import { SvgProps } from "@/interfaces/svgprops";

function ArrowUpSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 93 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.21558 89L85.1211 8"
        stroke="#007BFF"
        stroke-width="14.9538"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.21558 8H85.1211V89"
        stroke="#007BFF"
        stroke-width="14.9538"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowUpSvg;

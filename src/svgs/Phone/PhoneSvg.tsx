import { SvgProps } from '@/interfaces/svgprops';

function PhoneSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 50 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.1751 4H10.0292C6.69936 4 4 6.69936 4 10.0292V58.2626C4 61.5924 6.69936 64.2918 10.0292 64.2918H40.1751C43.5049 64.2918 46.2043 61.5924 46.2043 58.2626V10.0292C46.2043 6.69936 43.5049 4 40.1751 4Z"
        stroke="#007BFF"
        stroke-width="6.02918"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.8145 50.5859H23.8361"
        stroke="#007BFF"
        stroke-width="5.62125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PhoneSvg;

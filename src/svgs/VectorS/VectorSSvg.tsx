import { SvgProps } from '@/interfaces/svgprops';

function VectorSSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 38 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.6137 3.14746H12.8467C10.4002 3.14746 8.05384 4.11934 6.32389 5.84928C4.59395 7.57923 3.62207 9.92554 3.62207 12.3721C3.62207 14.8186 4.59395 17.1649 6.32389 18.8948C8.05384 20.6248 10.4002 21.5967 12.8467 21.5967H26.0247C28.4712 21.5967 30.8175 22.5685 32.5474 24.2985C34.2774 26.0284 35.2493 28.3747 35.2493 30.8213C35.2493 33.2678 34.2774 35.6141 32.5474 37.344C30.8175 39.074 28.4712 40.0459 26.0247 40.0459H3.62207"
        stroke="#007BFF"
        stroke-width="5.2712"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default VectorSSvg;

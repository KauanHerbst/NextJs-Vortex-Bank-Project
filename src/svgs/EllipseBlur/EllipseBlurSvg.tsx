import { SvgProps } from "@/interfaces/svgprops";

function EllipseBlurSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 1296 1296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bif_227_243)">
        <circle
          cx="648"
          cy="648"
          r="299"
          fill="url(#paint0_linear_227_243)"
          fill-opacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_bif_227_243"
          x="0.985046"
          y="0.985046"
          width="1294.03"
          height="1294.03"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="70.585" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_227_243"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_227_243"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="49.1026"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_innerShadow_227_243"
          />
          <feOffset dy="12.2757" />
          <feGaussianBlur stdDeviation="81.5893" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0 1 0 0 0 0.33 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_227_243" />
          <feGaussianBlur
            stdDeviation="174.007"
            result="effect3_foregroundBlur_227_243"
          />
        </filter>
        <linearGradient
          id="paint0_linear_227_243"
          x1="1225.18"
          y1="-19.6312"
          x2="479.421"
          y2="914.042"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.149472" stop-color="#59B5FF" />
          <stop offset="0.354836" stop-color="#59B5FF" />
          <stop offset="0.649597" stop-color="#3E7FB3" />
          <stop offset="0.914962" stop-color="#356D99" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default EllipseBlurSvg;

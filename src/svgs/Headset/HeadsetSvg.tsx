import { SvgProps } from '@/interfaces/svgprops';

function HeadsetSvg(Props: SvgProps) {
  return (
    <svg
      width={Props.width}
      height={Props.height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 39.6667V25C3 19.1652 5.31785 13.5695 9.44365 9.44365C13.5695 5.31785 19.1652 3 25 3C30.8348 3 36.4305 5.31785 40.5563 9.44365C44.6821 13.5695 47 19.1652 47 25V39.6667"
        stroke="white"
        stroke-width="4.88889"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47 42.1111C47 43.4078 46.4849 44.6513 45.5681 45.5681C44.6512 46.4849 43.4077 47 42.1111 47H39.6667C38.3701 47 37.1265 46.4849 36.2097 45.5681C35.2929 44.6513 34.7778 43.4078 34.7778 42.1111V34.7778C34.7778 33.4812 35.2929 32.2377 36.2097 31.3208C37.1265 30.404 38.3701 29.8889 39.6667 29.8889H47V42.1111ZM3 42.1111C3 43.4078 3.51508 44.6513 4.43192 45.5681C5.34877 46.4849 6.59227 47 7.88889 47H10.3333C11.6299 47 12.8735 46.4849 13.7903 45.5681C14.7071 44.6513 15.2222 43.4078 15.2222 42.1111V34.7778C15.2222 33.4812 14.7071 32.2377 13.7903 31.3208C12.8735 30.404 11.6299 29.8889 10.3333 29.8889H3V42.1111Z"
        stroke="white"
        stroke-width="4.88889"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HeadsetSvg;
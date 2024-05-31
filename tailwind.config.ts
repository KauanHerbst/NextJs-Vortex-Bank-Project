import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#007BFF',
        'blue-white-1': '#2D99FF',
        'blue-white-2': '#59B5FF',
        'blue-black-1': '#0062DC',
        'blue-black-2': '#003596',
        'purple-black-primary': '#0C0113',
        'purple-black-1': '#0B0011',
        'purple-black-2': '#0A000F',
        'white-black-primary': '#E3E0E0',
        'auxiliary-green': '#84F671',
        'auxiliary-red': '#DA6E6E',
        'auxiliary-white-blue': '#B3D0F5',
        'auxiliary-white-purple': '#E6CFF3',
        'auxiliary-white-purple-black': '#A483B8',
        'gradient-blue-start': '#010231',
        'gradient-blue-end': '#030697',
      },
    },
  },
  plugins: [],
};
export default config;

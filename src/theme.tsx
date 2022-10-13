import { extendTheme, keyframes } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }
// #e040fb
export const keyframe11 = keyframes`
0% {
  background: radial-gradient(#7928CA 5%, #FF0080 45%, #7928CA 100%);
}
80% {
  background: radial-gradient(#FF0080 10%, #7928CA 45%, #FF0080 70%);
}
`;

export const glowing = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

export const keyframe2 = keyframes`
from, 20%, 53%, 80%, to {
  // bgGradient: linear-gradient(to right, #7928CA, #FF0080);
  // background: linear-gradient(to-l, #7928CA, #FF0080);
  background: linear-gradient(90deg, #7928CA, #FF0080);
  // background: radial-gradient( #000 0%, #fff 100%);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}`;
// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// })
const GlowButton = {
  baseStyle: {
  }
};
export const themeColors = {
  pink: '#e040fb',
  pink2: '#DE38C8',
  pink3: '#d500f9',
  green: '#5AD8A6',
  blue: '#5B8FF9',
  orange: '#FF9F40',
};

const theme = extendTheme({
  components: {
    GlowButton,
  },
  colorScheme: {
    pink: {
      bg: '#d500f9'
    },
    default: {
      bg: 'white',
      brand: '#1A202C',
      focus: '#0070f3',
      text: '#2D3748',
      'accent-1': '#0070f3',
      'accent-2': '#1a936f',
      'accent-3': '#f6993f',
      'accent-4': '#E07628',
    },
    dark: {
      bg: 'gray.800',
      brand: '#1A202C',
      focus: '#0070f3',
      text: '#2D3748',
      'accent-1': '#0070f3',
      'accent-2': '#1a936f',
      'accent-3': '#f6993f',
      'accent-4': '#E07628',
    },
  },
  colors: {
    purple: {
      50: '#f3e5ff',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#512da8', //'#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
      'A100': '#ea80fc',
      'A200': '#e040fb',
      'A400': '#d500f9',
      'A700': '#aa00ff',
    },
    pink: {
      500: '#DE38C8',
    }
  },
  fonts: {},
  fontSizes: {},
  sizes: {
    // ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      maxW: '100%',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  // breakpoints: {
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  // },
});

export default theme
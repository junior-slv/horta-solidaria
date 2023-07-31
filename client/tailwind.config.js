module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'yellow': '#FFBB3A',
      'red': {
        '50': '#FEE2E2',
        '100': '#FECACA',
        '200': '#FCA5A5',
        '300': '#F87171',
        '400': '#EF4444',
        '500': '#DC2626',
        '600': '#B91C1C',
        '700': '#991B1B',
        '800': '#7F1D1D',
        '900': '#6B1414',
      },
      'gray': '#BBBBBB',
      'black': '#252525',
      'white': '#FFFFFF',
      'extra-light': '#FCFCFC',
      'off-white': '#F7F7F7',
      'beige': '#DED8BC',
      'darkGreen': '#609B57',
      'lightGreen': '#72B854',
      'lightGreenOpacity': '#72b854cc',
      'transparent': 'rgba(0,0,0,0.0)',
      'lightBlue': '#7280FF',
      'darkBlue': 'rgba(17, 38, 146, 0.68)',
      'lightGray': '#F5F5F5',
      'darkGray': '#9C9C9C',
      'darkerGray': '#747474',
      'purple': '#A63EEA',
      'orange': '#FF9100',
      'pink': '#FF6BDA',
      'cyan': '#00FFFF',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};

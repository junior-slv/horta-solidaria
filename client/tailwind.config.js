/** @type {import('tailwindcss').Config} */
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
      'red': '#FF0000',
      'gray': '#BBBBBB',
      'black': '#000000',
      'white': '#FFFFFF',
      'beige': '#DED8BC',
      'darkGreen': '#609B57',
      'lightGreen': '#72B854',
      'lightGreenOpacity': '72b854cc',
      'transparent': 'rgba(0,0,0,0.0)',
      'lightBlue' : '#7280FF',
      'darkBlue'  : 'rgba(17, 38, 146, 0.68)',
      'lightGray': '#F5F5F5',
      'darkGrey': '#9C9C9C',
    },
    fontFamily: {
      'poppins': ['poppins'],
    },
  },
  plugins: [],
}

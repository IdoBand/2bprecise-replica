/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      backgroundImage : {
        section10: 'url("/nurse-and-patient-walking-in-facility.jpg")'
      },
      colors: {
        dark: '#1f1a19',
        light: '#f5f5f5',
        purple: '#743393',
        purple2: 'rgb(107 33 168)',
        magenta: '#b647ba',
        turquoise: 'rgb(45 212 191)',
        grayBubble: '#464646',
        footerBG: '#292e31',
        dnaGroup1: '#00FFFF',
        dnaGroup2: '#38B1FC',
        dnaGroup3: '#7063F9',
      },
    },
    screens: {
      "3xl": { max: "1535px" },
      "2xl": { max: "1480px" },
      "xl": { max: "1201px" },
      "lg": { max: "1000px" },
      "md": { max: "767px" },
      "sm": { max: "639px" },
      "xs": { max: "479px" },
  },
  },
  plugins: [],
}
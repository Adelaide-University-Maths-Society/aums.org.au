module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    fontFamily: {
      'headings': ['"Alegreya Sans SC"', 'sans'],
      'body'    : ['Poppins', 'serif'],
    },
    extend: {
      colors: {
	'dark-blue': '#1B425A',
	'light-blue': '#9AC1D9',
	'orange': '#F2913D', 
	'yellow': '#ECE46F',
      },
    },
  },
  plugins: [],
}

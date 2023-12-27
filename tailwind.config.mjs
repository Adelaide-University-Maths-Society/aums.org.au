/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['"Alegreya Sans SC"', defaultTheme.fontFamily.sans],
				'body'    : ['Poppins', defaultTheme.fontFamily.serif],
			},
			colors: {
				'text': '#ffffff',
				'background': '#193c51',
				'primary': '#ECE46F',
				'secondary': '#a5cce4',
				'accent': '#ffa600',
			},
		},
	},
	plugins: [],
}

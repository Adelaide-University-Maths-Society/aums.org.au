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
				'sec': {
					'50': '#f3f7fc',
					'100': '#e7f0f7',
					'200': '#c9dfee',
					'300': '#a5cce4',
					'400': '#62a7ce',
					'500': '#3e8cb9',
					'600': '#2d709c',
					'700': '#255a7f',
					'800': '#224d6a',
					'900': '#214159',
					'950': '#162a3b',
				},
				'bg': {
					'50': '#eefbfd',
					'100': '#d3f3fa',
					'200': '#ace6f5',
					'300': '#73d2ed',
					'400': '#33b5dd',
					'500': '#1798c3',
					'600': '#1679a4',
					'700': '#196385',
					'800': '#1d526d',
					'900': '#193c51',
					'950': '#0d2c3f',
				},				
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",		
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			keyframes: {
				zoom: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.1)" },
				},
			},
			animation: {
				zoom: "zoom 7s ease-in-out forwards",
			},
			backgroundPosition: {
				"y-20": "center 20%",
				"y-50": "center 50%",
				"y-80": "center 80%",
			},
		},
	},
	plugins: [],
};

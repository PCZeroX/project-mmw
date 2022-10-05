/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit": "repeat(auto-fit, minmax(16rem, 1fr))",
				"auto-fill":
					"repeat(auto-fill, minmax(16rem, 1fr))",
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				roboto: "'Roboto', sans-serif",
				raleway: "'Raleway', sans-serif",
				lato: "'Lato', sans-serif",
			},
		},
		screens: {
			xs: { min: "360px" },
			xsTo: { max: "360px" },
			sm: { min: "640px" },
			smTo: { max: "640px" },
			md: { min: "768px" },
			mdTo: { max: "768px" },
			lg: { min: "1024px" },
			lgTo: { max: "1024px" },
			xl: { min: "1280px" },
			xlTo: { max: "1280px" },
			"2xl": { min: "1440px" },
			"2xlTo": { max: "1440px" },
		},
	},
	plugins: [],
};

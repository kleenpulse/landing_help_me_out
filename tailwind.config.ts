import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				nav: "0 1px 4px rgba(0, 0, 0, 0.14)",
			},
			colors: {
				primary: "#120B48",
				primDark: "#100A42",
				heading: "#141414",
			},
			fontFamily: {
				Work: ["var(--font-work-sans)"],
				Sora: ["var(--font-sora)"],
				Inter: ["var(--font-inter)"],
			},
		},
	},
	plugins: [],
};
export default config;

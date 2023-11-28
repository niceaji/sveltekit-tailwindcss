/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	safelist: [{ pattern: /bg-./ }, { pattern: /from-./ }, { pattern: /to-./ }],
	theme: {
		extend: {}
	},
	plugins: []
};

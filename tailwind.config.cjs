module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('./src/lib/plugin')
	],
	'headwind.runOnSave': true,
	theme: {
		extend: {}
	}
};

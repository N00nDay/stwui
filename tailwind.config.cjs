module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/forms'), require('./src/lib/plugin')],
	'headwind.runOnSave': true,
	theme: {
		extend: {}
	},
	stwui: {
		themes: ['light', 'dark']
	}
};

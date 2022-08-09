const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	],
	'headwind.runOnSave': true,
	theme: {
		extend: {
			colors: {
				primary: colors.blue[600],
				'primary-hover': colors.blue[700],
				danger: colors.red[600],
				'danger-hover': colors.red[700]
			}
		}
	}
};

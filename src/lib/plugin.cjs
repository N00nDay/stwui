// @ts-nocheck
const plugin = require('tailwindcss/plugin');
const customColors = require('./colors.cjs');

const namedStyles = {};

customColors.forEach((color) => {
	namedStyles[`.bg-${color.key}`] = { backgroundColor: color.value };
	namedStyles[`.text-${color.key}`] = { color: color.value };
});

module.exports = plugin.withOptions((options) => {
	return function ({ addUtilities }) {
		addUtilities(namedStyles);
	};
});

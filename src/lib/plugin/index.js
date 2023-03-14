/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
const colors = require('./colors/index');
const base = require('./base/index');
const components = require('./components/index');
const themes = require('./colors/themes');
const colorFunctions = require('./colors/functions');

const mainFunction = ({ addBase, addComponents, config }) => {
	// inject @base style
	if (config('stwui.base') != false) {
		addBase(base);
	}

	// inject @components style
	const file = components;
	addComponents(file);

	const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
	themeInjector;
};

module.exports = require('tailwindcss/plugin')(mainFunction, {
	theme: {
		extend: {
			colors,
			boxShadow: {
				'negative-sm': '0 -1px 2px 0 rgb(0 0 0 / 0.05);',
				negative: '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1);',
				'negative-md': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);',
				'negative-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);',
				'negative-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1);',
				'negative-2xl': '0 -25px 50px -12px rgb(0 0 0 / 0.25);'
			},
			scale: {
				flip: '-1'
			},
			transitionProperty: {
				size: 'height, width',
				spacing: 'margin, padding',
				reveal: 'transform, opacity'
			}
		}
	}
});

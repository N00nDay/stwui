const plugin = require('tailwindcss/plugin');

// module.exports = plugin(function () {}, {
// 	theme: {
// extend: {
// 	colors: {
// 		transparent: 'transparent',
// 		current: 'currentColor',
// 		primary: '#2563eb',
// 		'primary-hover': '#1d4ed8',
// 		'primary-content': '#ffffff',
// 		default: '#ffffff',
// 		'default-hover': '#f3f4f6',
// 		'default-content': '#1f2937',
// 		danger: '#dc2626',
// 		'danger-hover': '#b91c1c',
// 		'danger-content': '#ffffff'
// 	}
// }
// 	}
// });

const twPlugin = plugin.withOptions(
	function (options) {
		return function ({ addBase, addUtilities, matchUtilities, addComponents, addVariant, theme }) {
			/**
			 * Add base styles
			 * https://tailwindcss.com/docs/plugins#adding-base-styles
			 */
			// addBase({
			//   'h1': { fontSize: theme('fontSize.2xl') },
			//   'h2': { fontSize: theme('fontSize.xl') },
			// })
			/**
			 * Static utilities
			 * https://tailwindcss.com/docs/plugins#static-utilities
			 */
			// addUtilities({
			//   '.content-hidden': {
			//     'content-visibility': 'hidden',
			//   },
			//   '.content-visible': {
			//     'content-visibility': 'visible',
			//   },
			// })
			/**
			 * Dynamic utilities
			 * https://tailwindcss.com/docs/plugins#dynamic-utilities
			 */
			// matchUtilities(
			//   {
			//     tab: value => ({
			//       tabSize: value
			//     }),
			//   },
			//   { values: theme('tabSize') }
			// )
			/**
			 * Adding components
			 * https://tailwindcss.com/docs/plugins#adding-components
			 */
			// addComponents({
			//   [`.${className}`]: {
			//     padding: '.5rem 1rem',
			//     fontWeight: '600',
			//   },
			// })
			/**
			 * Add variants
			 * https://tailwindcss.com/docs/plugins#adding-variants
			 */
			// addVariant('optional', '&:optional')
			// addVariant('foo', ctx => {
			//   // Do stuff with ctx
			//   return `.foo ${ctx.container.nodes[0].selector}`
			// })
		};
	},
	function (options) {
		/**
		 * Provide default values
		 */
		return {
			theme: {
				extend: {
					colors: {
						transparent: 'transparent',
						current: 'currentColor',
						primary: '#2563eb',
						'primary-hover': '#1d4ed8',
						'primary-content': '#ffffff',
						default: '#ffffff',
						'default-hover': '#f3f4f6',
						'default-content': '#1f2937',
						danger: '#dc2626',
						'danger-hover': '#b91c1c',
						'danger-content': '#ffffff'
					}
				}
			}
		};
	}
);

module.exports = twPlugin;

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
	function ({ addComponents }) {
		addComponents({
			'.col': {
				'min-height': '1px',
				flex: '0 0 auto',
				float: 'left',
				position: 'relative',
				'padding-right': 0,
				'padding-left': 0,
				display: 'block',
				'box-sizing': 'border-box'
			},
			'.col-0': {
				display: 'none !important'
			},
			'.col-1': {
				width: '4.16666667%'
			},
			'.col-2': {
				width: '8.33333333%'
			},
			'.col-3': {
				width: '12.5%'
			},
			'.col-4': {
				width: '16.66666667%'
			},
			'.col-5': {
				width: '20.83333333%'
			},
			'.col-6': {
				width: '25%'
			},
			'.col-7': {
				width: '29.16666667%'
			},
			'.col-8': {
				width: '33.33333333%'
			},
			'.col-9': {
				width: '37.5%'
			},
			'.col-10': {
				width: '41.66666667%'
			},
			'.col-11': {
				width: '45.83333333%'
			},
			'.col-12': {
				width: '50%'
			},
			'.col-13': {
				width: '54.16666667%'
			},
			'.col-14': {
				width: '58.33333333%'
			},
			'.col-15': {
				width: '62.5%'
			},
			'.col-16': {
				width: '66.66666667%'
			},
			'.col-17': {
				width: '70.83333333%'
			},
			'.col-18': {
				width: '75%'
			},
			'.col-19': {
				width: '79.16666667%'
			},
			'.col-20': {
				width: '83.33333333%'
			},
			'.col-21': {
				width: '87.5%'
			},
			'.col-22': {
				width: '91.66666667%'
			},
			'.col-23': {
				width: '95.83333333%'
			},
			'.col-24': {
				width: '100%'
			}
		});
	},
	{
		darkMode: 'class',
		theme: {
			extend: {
				boxShadow: {
					negative: '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);'
				},
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
					'danger-content': '#ffffff',
					'dark-primary': '#2A303C',

					'light-surface': '#ffffff',
					'light-background': '#F0F2F5',
					'light-content': '#050505',
					'light-secondary-content': 'rgba(0, 0, 0, 0.65)',
					'light-icon': '#050505',
					'light-icon-background': '#E4E6EB',
					'light-icon-background-hover': 'rgba(0, 0, 0, 0.05)',
					'light-primary-button': '#1B74E4',
					'light-primary-button-hover': '#77A7FF',

					'dark-surface': '#242526',
					'dark-background': '#18191A',
					'dark-content': '#ffffff',
					'dark-secondary-content': 'rgba(255, 255, 255, .85)',
					'dark-icon': '#ffffff',
					'dark-icon-background': 'rgba(255,255,255,.1)',
					'dark-icon-background-hover': 'rgba(255, 255, 255, 0.1)'
				}
			}
		}
	}
);

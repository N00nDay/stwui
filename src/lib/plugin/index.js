/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
	function ({ addComponents, addBase }) {
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
		addBase({
			"[type='text']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='email']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='url']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='password']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='number']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='date']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='datetime-local']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='month']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='search']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='tel']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='time']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='week']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			'[multiple]:focus': {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			'textarea:focus': {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			'select:focus': {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='checkbox']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='radio']:focus": {
				outline: 'unset',
				'outline-offset': 'unset',
				'box-shadow': 'unset',
				'border-color': 'unset'
			},
			"[type='checkbox']:checked:focus": {
				'border-color': '#2563eb'
			},
			"[type='radio']:checked:focus": {
				'border-color': '#2563eb'
			},
			'.light-border': {
				'border-color': 'rgba(25,25,25,0.05)'
			},
			'.dark-border': {
				'border-color': 'rgba(89,90,92,0.35)'
			},
			'.light-border-base': {
				'border-color': 'rgba(25,25,25,0.1)'
			},
			'.dark-border-base': {
				'border-color': 'rgba(89,90,92,0.4)'
			}
		});
	},
	{
		darkMode: 'class',
		theme: {
			extend: {
				boxShadow: {
					'negative-sm': '0 -1px 2px 0 rgb(0 0 0 / 0.05);',
					negative: '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1);',
					'negative-md': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);',
					'negative-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);',
					'negative-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1);',
					'negative-2xl': '0 -25px 50px -12px rgb(0 0 0 / 0.25);'
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
					'light-border': '#E4E6EB',

					'dark-surface': '#242526',
					'dark-background': '#18191A',
					'dark-content': '#ffffff',
					'dark-secondary-content': 'rgba(255, 255, 255, .85)',
					'dark-icon': '#ffffff',
					'dark-icon-background': '#404040',
					// 'dark-icon-background-hover': '#404040',
					// 'dark-icon-background': 'rgba(255,255,255,.1)',
					'dark-icon-background-hover': 'rgba(255, 255, 255, 0.1)',
					'dark-border': '#404040',

					'info-content': '#1d4ed8',
					'dark-info-content': '#eff6ff',
					'info-background': '#3b82f6',
					'info-secondary-content': '#2563eb',
					'dark-info-secondary-content': '#bfdbfe',
					'info-icon': '#60a5fa',

					'success-content': '#166534',
					'dark-success-content': '#f0fdf4',
					'success-background': '#22c55e',
					'success-secondary-content': '#15803d',
					'dark-success-secondary-content': '#bbf7d0',
					'success-icon': '#4ade80',

					'error-content': '#991b1b',
					'dark-error-content': '#fef2f2',
					'error-background': '#ef4444',
					'error-secondary-content': '#b91c1c',
					'dark-error-secondary-content': '#fecaca',
					'error-icon': '#f87171',

					'warn-content': '#854d0e',
					'dark-warn-content': '#fefce8',
					'warn-background': '#eab308',
					'warn-secondary-content': '#a16207',
					'dark-warn-secondary-content': '#fef08a',
					'warn-icon': '#facc15'
				}
			}
		}
	}
);

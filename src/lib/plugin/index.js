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
			},
			'button.btn.xs': {
				'padding-left': '0.625rem',
				'padding-right': '0.625rem',
				'padding-top': '0.375rem',
				'padding-bottom': '0.375rem',
				'font-size': '0.75rem',
				'line-height': '1rem'
			},
			'button.btn.sm': {
				'padding-left': '0.75rem',
				'padding-right': '0.75rem',
				'padding-top': '0.45rem',
				'padding-bottom': '0.45rem',
				'font-size': '0.875rem',
				'line-height': '1.25rem'
			},
			'button.btn.md': {
				'padding-left': '0.75rem',
				'padding-right': '0.75rem',
				'padding-top': '0.55rem',
				'padding-bottom': '0.55rem',
				'font-size': '0.875rem',
				'line-height': '1.25rem'
			},
			'button.btn.lg': {
				'padding-left': '1rem',
				'padding-right': '1rem',
				'padding-top': '0.5rem',
				'padding-bottom': '0.5rem',
				'font-size': '1rem',
				'line-height': '1.5rem'
			},
			'button.btn.xl': {
				'padding-left': '1rem',
				'padding-right': '1rem',
				'padding-top': '0.75rem',
				'padding-bottom': '0.75rem',
				'font-size': '1rem',
				'line-height': '1.5rem'
			},
			'button.btn.default': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'--tw-text-opacity': '1',
				color: 'rgb(31 41 55 / var(--tw-text-opacity))',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(255 255 255 / var(--tw-bg-opacity))',
				'border-width': '1px',
				'border-color': 'rgba(25,25,25,0.05)'
			},
			'button.btn.default:hover': {
				'--tw-border-opacity': '1',
				'border-color': 'rgb(29 78 216 / var(--tw-border-opacity))',
				'--tw-text-opacity': '1',
				color: 'rgb(29 78 216 / var(--tw-text-opacity))'
			},
			'.dark button.btn.default': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)',
				'border-color': 'rgba(89,90,92,0.35)'
			},
			'button.btn.primary': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(37 99 235 / var(--tw-bg-opacity))',
				'--tw-text-opacity': '1',
				color: 'rgb(255 255 255 / var(--tw-text-opacity))',
				'border-style': 'none'
			},
			'.dark button.btn.primary': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)'
			},
			'button.btn.danger': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'border-style': 'none',
				'--tw-text-opacity': '1',
				color: 'rgb(255 255 255 / var(--tw-text-opacity))',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(220 38 38 / var(--tw-bg-opacity))'
			},
			'.dark button.btn.danger': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)'
			},

			'button.btn.ghost': {
				'border-style': 'none',
				'border-color': 'transparent',
				color: 'rgba(0, 0, 0, 0.65)',
				'--tw-shadow': '0 0 #0000',
				'--tw-shadow-colored': '0 0 #0000',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'background-color': 'transparent'
			},
			'button.btn.ghost:hover': {
				'--tw-text-opacity': '1',
				color: 'rgb(5 5 5 / var(--tw-text-opacity))'
			},
			'.dark button.btn.ghost': {
				color: 'rgba(255, 255, 255, .85)'
			},
			'.dark button.btn.ghost:hover': {
				'--tw-text-opacity': '1',
				color: 'rgb(29 78 216 / var(--tw-text-opacity))'
			},
			'button.btn.link': {
				'border-style': 'none',
				'border-color': 'transparent',
				'--tw-shadow': '0 0 #0000',
				'--tw-shadow-colored': '0 0 #0000',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'background-color': 'transparent',
				'--tw-text-opacity': '1',
				color: 'rgb(37 99 235 / var(--tw-text-opacity))'
			},
			'button.btn.link:hover': {
				'--tw-text-opacity': '1',
				color: 'rgb(29 78 216 / var(--tw-text-opacity))'
			},
			'button.btn.text': {
				'border-color': 'transparent'
			},
			'button.btn.dark': {
				'--tw-text-opacity': '1',
				color: 'rgb(255 255 255 / var(--tw-text-opacity))',
				'border-style': 'none',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(42 48 60 / var(--tw-bg-opacity))',
				outline: '2px solid transparent',
				'outline-offset': '2px',
				'--tw-ring-offset-shadow':
					'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
				'--tw-ring-shadow':
					'var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
			},
			'button.btn:disabled:not(.primary):not(.danger):not(.ghost):not(.link):not(.text)': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'--tw-text-opacity': '1',
				color: 'rgb(31 41 55 / var(--tw-text-opacity))',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(255 255 255 / var(--tw-bg-opacity))',
				'border-width': '1px',
				'--tw-border-opacity': '1',
				'border-color': 'rgb(228 230 235 / var(--tw-border-opacity))',
				opacity: '0.7'
			},
			'button.btn:disabled:not(.primary):not(.danger):not(.ghost):not(.link):not(.text):hover': {
				'--tw-text-opacity': '1',
				color: 'rgb(31 41 55 / var(--tw-text-opacity))',
				'--tw-border-opacity': '1',
				'border-color': 'rgb(228 230 235 / var(--tw-border-opacity))'
			},
			'button.btn:disabled:not(.primary):not(.danger):not(.ghost):not(.link):not(.text):active:hover':
				{
					'--tw-scale-x': '1',
					'--tw-scale-y': '1',
					transform:
						'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
				},
			'.dark button.btn:disabled:not(.primary):not(.danger):not(.ghost):not(.link):not(.text)': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)'
			},
			'button.btn.primary:disabled': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(37 99 235 / var(--tw-bg-opacity))',
				'--tw-text-opacity': '1',
				color: 'rgb(255 255 255 / var(--tw-text-opacity))',
				opacity: '0.7'
			},
			'button.btn.primary:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'.dark button.btn.primary:disabled': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)'
			},
			'button.btn.danger:disabled': {
				'--tw-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'--tw-shadow-colored':
					'0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'--tw-text-opacity': '1',
				color: 'rgb(255 255 255 / var(--tw-text-opacity))',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(220 38 38 / var(--tw-bg-opacity))',
				opacity: '0.7'
			},
			'button.btn.danger:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'.dark button.btn.danger:disabled': {
				'--tw-shadow-color': '#000',
				'--tw-shadow': 'var(--tw-shadow-colored)'
			},
			'button.btn.ghost:disabled': {
				'border-style': 'none',
				'border-color': 'transparent',
				'--tw-shadow': '0 0 #0000',
				'--tw-shadow-colored': '0 0 #0000',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'background-color': 'transparent',
				opacity: '0.7'
			},
			'button.btn.ghost:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'button.btn.link:disabled': {
				'border-style': 'none',
				'border-color': 'transparent',
				'--tw-shadow': '0 0 #0000',
				'--tw-shadow-colored': '0 0 #0000',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				'background-color': 'transparent',
				'--tw-text-opacity': '1',
				color: 'rgb(37 99 235 / var(--tw-text-opacity))',
				opacity: '0.7'
			},
			'button.btn.link:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'button.btn.text:disabled': {
				'border-color': 'transparent',
				opacity: '0.7'
			},
			'button.btn.text:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'button.btn.circle': {
				'border-radius': '9999px'
			},
			'button.btn.square': {
				'border-radius': '0px'
			},
			'button.btn.rounded': {
				'border-radius': '0.375rem'
			},
			'button.btn.pill': {
				'border-radius': '1.5rem'
			},

			'button.btn.circle.xs': {
				padding: '0.25rem',
				height: '30px',
				width: '30px'
			},

			'button.btn.circle.sm': {
				padding: '0.25rem',
				height: '38px',
				width: '38px'
			},

			'button.btn.circle.md': {
				padding: '0.5rem',
				height: '38px',
				width: '38px'
			},

			'button.btn.circle.lg': {
				padding: '0.75rem',
				height: '42px',
				width: '42px'
			},

			'button.btn.circle.xl': {
				padding: '1rem',
				height: '50px',
				width: '50px'
			},

			'button.btn.circle.fab': {
				padding: '1.25rem',
				height: '58px',
				width: '58px'
			},
			'button.btn-group:disabled': {
				'--tw-text-opacity': '1',
				color: 'rgb(31 41 55 / var(--tw-text-opacity))',
				'--tw-bg-opacity': '1',
				'background-color': 'rgb(255 255 255 / var(--tw-bg-opacity))',
				'border-width': '1px',
				'--tw-border-opacity': '1',
				'border-color': 'rgb(228 230 235 / var(--tw-border-opacity))',
				opacity: '0.7'
			},
			'button.btn-group:disabled:hover': {
				'--tw-text-opacity': '1',
				color: 'rgb(31 41 55 / var(--tw-text-opacity))',
				'--tw-border-opacity': '1',
				'border-color': 'rgb(228 230 235 / var(--tw-border-opacity))'
			},
			'button.btn-group:disabled:active:hover': {
				'--tw-scale-x': '1',
				'--tw-scale-y': '1',
				transform:
					'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
			},
			'a.link': {
				'text-decoration-line': 'underline',
				color: '#2563eb'
			},
			'a.link:hover': {
				color: '#1d4ed8'
			}
		});
		addBase({
			h1: {
				'font-weight': '800',
				'font-size': '2.25em',
				'line-height': '1.1111111'
			},
			h2: {
				'font-weight': '700',
				'font-size': '1.5em',
				'line-height': '1.3333333'
			},
			h3: {
				'font-weight': '600',
				'font-size': '1.25em',
				'line-height': '1.6'
			},
			h4: {
				'font-weight': '600',
				'line-height': '1.5'
			},
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
			},
			"input[type='range']": {
				'-webkit-appearance': 'none',
				position: 'relative',
				'border-radius': '1.5rem',
				'background-color': 'transparent',
				overflow: 'hidden',
				width: '100%'
			},
			"input[type='range']::before": {
				content: '',
				width: '100%',
				height: '0.5rem',
				'border-radius': '0.5rem',
				position: 'absolute',
				'background-color': 'rgb(240, 242, 245)',
				top: '50%',
				transform: 'translateY(-50%)'
				// 'transition-property': 'all',
				// 'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
				// 'transition-duration': '150ms'
			},
			".dark input[type='range']::before": {
				'background-color': 'rgb(24, 25, 26)'
			},
			"input[type='range']::-webkit-slider-runnable-track": {
				height: '1.5rem',
				width: '100%',
				'border-radius': '0.5rem'
			},
			"input[type='range']::-moz-range-track": {
				height: '1.5rem',
				width: '100%',
				'border-radius': '0.5rem'
			},
			"input[type='range']::-webkit-slider-thumb": {
				'background-color': 'rgb(255, 255, 255)',
				position: 'relative',
				height: '1.5rem',
				width: '1.5rem',
				border: 'none',
				'border-radius': '9999px',
				'-webkit-appearance': 'none',
				top: '50%',
				transform: 'translateY(-50%)',
				cursor: 'pointer'
			},
			".dark input[type='range']::-webkit-slider-thumb": {
				'background-color': 'rgb(36, 37, 38)'
			},
			"input[type='range']::-moz-range-thumb": {
				'background-color': 'rgb(255, 255, 255)',
				position: 'relative',
				height: '1.5rem',
				width: '1.5rem',
				border: 'none',
				'border-radius': '9999px',
				'-webkit-appearance': 'none',
				top: '50%',
				transform: 'translateY(-50%)',
				cursor: 'pointer'
			},
			".dark input[type='range']::-moz-range-thumb": {
				'background-color': 'rgb(36, 37, 38)'
			},
			"input[type='range'].info::-webkit-slider-thumb": {
				color: '#3b82f6',
				'box-shadow':
					'0 0 0 3px #3b82f6 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].warn::-webkit-slider-thumb": {
				color: '#eab308',
				'box-shadow':
					'0 0 0 3px #eab308 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].error::-webkit-slider-thumb": {
				color: '#ef4444',
				'box-shadow':
					'0 0 0 3px #ef4444 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].success::-webkit-slider-thumb": {
				color: '#22c55e',
				'box-shadow':
					'0 0 0 3px #22c55e inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].info::-moz-range-thumb": {
				color: '#3b82f6',
				'box-shadow':
					'0 0 0 3px #3b82f6 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].warn::-moz-range-thumb": {
				color: '#eab308',
				'box-shadow':
					'0 0 0 3px #eab308 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].error::-moz-range-thumb": {
				color: '#ef4444',
				'box-shadow':
					'0 0 0 3px #ef4444 inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			"input[type='range'].success::-moz-range-thumb": {
				color: '#22c55e',
				'box-shadow':
					'0 0 0 3px #22c55e inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem'
			},
			'body .tippy-box': {
				'background-color': 'rgba(242, 242, 242, 0.85)',
				color: '#050505',
				border: '1px solid rgba(25,25,25,0.05)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
			},
			'.dark body .tippy-box': {
				'background-color': 'rgba(64, 64, 64, 0.7)',
				color: '#ffffff',
				border: '1px solid rgba(89,90,92,0.35)',
				'box-shadow':
					'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), #000'
			},
			'.isOff': {
				animation: 'none !important'
			},
			'.isOff *': {
				animation: 'none !important'
			},
			'::-webkit-scrollbar': {
				width: '0.5rem'
			},
			'::-webkit-scrollbar-track': {
				'background-color': 'rgba(25,25,25,0.05)'
			},
			'.dark ::-webkit-scrollbar-track': {
				'background-color': 'rgba(89,90,92,0.15)'
			},
			'::-webkit-scrollbar-thumb': {
				'border-radius': '9999px',
				'background-color': 'rgba(5, 5, 5, 0.15)'
			},
			'.dark ::-webkit-scrollbar-thumb': {
				'background-color': 'rgba(250, 250, 250,0.15)'
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
					'light-border': 'rgba(25,25,25,0.05)',
					'light-border-base': 'rgba(25,25,25,0.1)',

					'dark-surface': '#242526',
					'dark-background': '#18191A',
					'dark-content': '#ffffff',
					'dark-secondary-content': 'rgba(255, 255, 255, .85)',
					'dark-icon': '#ffffff',
					'dark-icon-background': '#404040',
					'dark-icon-background-hover': 'rgba(255, 255, 255, 0.1)',
					'dark-border': 'rgba(89,90,92,0.35)',
					'dark-border-base': 'rgba(89,90,92,0.4)',

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
	}
);

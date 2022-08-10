const plugin = require('tailwindcss/plugin');

module.exports = plugin(function () {}, {
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
});

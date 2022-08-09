const colors = require('tailwindcss/colors');

const customColors = [
	{
		key: 'transparent',
		value: 'transparent'
	},
	{
		key: 'current',
		value: 'currentColor'
	},
	{
		key: 'primary',
		value: colors.blue[600]
	},
	{
		key: 'primary-hover',
		value: colors.blue[700]
	},
	{
		key: 'primary-content',
		value: colors.white
	},
	{
		key: 'default',
		value: colors.white
	},
	{
		key: 'default-hover',
		value: colors.gray[100]
	},
	{
		key: 'default-content',
		value: colors.gray[800]
	},
	{
		key: 'danger',
		value: colors.red[600]
	},
	{
		key: 'danger-hover',
		value: colors.red[700]
	},
	{
		key: 'danger-content',
		value: colors.white
	}
	// {
	// 	key: 'info',
	// 	value:
	// },
	// {
	// 	key: 'success',
	// 	value:
	// },
	// {
	// 	key: 'warning',
	// 	value:
	// },
	// {
	// 	key: 'error',
	// 	value:
	// }
];

module.exports = customColors;

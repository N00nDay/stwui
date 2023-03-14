function withOpacityValue(variable, fallbackColor) {
	return ({ opacityValue }) => {
		let fallbackColorValue = '';
		if (fallbackColor) {
			fallbackColorValue = `, var(${fallbackColor})`;
		}
		if (opacityValue === undefined) {
			return `hsl(var(${variable}${fallbackColorValue}))`;
		}
		return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
	};
}

let colorObject = {
	transparent: 'transparent',
	current: 'currentColor',

	primary: withOpacityValue('--primary'),
	'primary-hover': withOpacityValue('--primary-hover'),
	'primary-content': withOpacityValue('--primary-content'),

	default: withOpacityValue('--default'),
	'default-hover': withOpacityValue('--default-hover'),
	'default-content': withOpacityValue('--default-content'),

	danger: withOpacityValue('--danger'),
	'danger-hover': withOpacityValue('--danger-hover'),
	'danger-content': withOpacityValue('--danger-content'),

	dark: withOpacityValue('--dark'),
	'dark-hover': withOpacityValue('--dark-hover'),
	'dark-content': withOpacityValue('--dark-content'),

	surface: withOpacityValue('--surface'),

	background: withOpacityValue('--background'),

	content: withOpacityValue('--content'),
	'secondary-content': withOpacityValue('--secondary-content'),

	border: withOpacityValue('--border'),

	hover: withOpacityValue('--hover'),

	icon: withOpacityValue('--icon'),
	'icon-background': withOpacityValue('--icon-background'),
	'icon-background-hover': withOpacityValue('--icon-background-hover'),

	info: withOpacityValue('--info'),
	'info-content': withOpacityValue('--info-content'),
	'info-secondary-content': withOpacityValue('--info-secondary-content'),
	'info-icon': withOpacityValue('--info-icon'),

	success: withOpacityValue('--success'),
	'success-content': withOpacityValue('--success-content'),
	'success-secondary-content': withOpacityValue('--success-secondary-content'),
	'success-icon': withOpacityValue('--success-icon'),

	error: withOpacityValue('--error'),
	'error-content': withOpacityValue('--error-content'),
	'error-secondary-content': withOpacityValue('--error-secondary-content'),
	'error-icon': withOpacityValue('--error-icon'),

	warn: withOpacityValue('--warn'),
	'warn-content': withOpacityValue('--warn-content'),
	'warn-secondary-content': withOpacityValue('--warn-secondary-content'),
	'warn-icon': withOpacityValue('--warn-icon')
};

module.exports = colorObject;

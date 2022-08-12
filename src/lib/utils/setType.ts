export interface Types {
	default: string;
	primary: string;
	danger: string;
	ghost: string;
	link: string;
	text: string;
	'default-disabled'?: string;
	'primary-disabled'?: string;
	'danger-disabled'?: string;
	'ghost-disabled'?: string;
	'link-disabled'?: string;
	'text-disabled'?: string;
}

export default function setType(
	classes: string,
	isDisabled: boolean,
	type: string,
	types: Types
): string {
	switch (type) {
		case 'primary':
			if (isDisabled) {
				classes += types['primary-disabled'];
			} else {
				classes += types.primary;
			}
			break;
		case 'danger':
			if (isDisabled) {
				classes += types['danger-disabled'];
			} else {
				classes += types.danger;
			}
			break;
		case 'ghost':
			if (isDisabled) {
				classes += types['ghost-disabled'];
			} else {
				classes += types.ghost;
			}
			break;
		case 'link':
			if (isDisabled) {
				classes += types['link-disabled'];
			} else {
				classes += types.link;
			}
			break;
		case 'text':
			if (isDisabled) {
				classes += types['text-disabled'];
			} else {
				classes += types.text;
			}
			break;
		default:
			if (isDisabled) {
				classes += types['default-disabled'];
			} else {
				classes += types.default;
			}
	}

	return classes;
}

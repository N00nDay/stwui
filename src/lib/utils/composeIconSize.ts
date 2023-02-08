export function composeIconSize(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab') {
	let iconSize = '';
	if (size === 'xs') {
		iconSize = '16px';
	} else if (size === 'sm') {
		iconSize = '18px';
	} else if (size === 'md') {
		iconSize = '20px';
	} else if (size === 'lg') {
		iconSize = '24px';
	} else if (size === 'xl') {
		iconSize = '28px';
	} else if (size === 'fab') {
		iconSize = '34px';
	}
	return iconSize;
}

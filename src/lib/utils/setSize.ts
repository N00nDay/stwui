export interface Sizes {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

export default function setSize(classes: string, size: string, sizes: Sizes): string {
	switch (size) {
		case 'xs':
			classes += sizes.xs;
			break;
		case 'sm':
			classes += sizes.sm;
			break;
		case 'md':
			classes += sizes.md;
			break;
		case 'lg':
			classes += sizes.lg;
			break;
		case 'xl':
			classes += sizes.xl;
			break;
		default:
			classes += sizes.md;
	}

	return classes;
}

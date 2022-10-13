export const carouselSlide = `interface Slide {
	id: string;
	src: string;
	alt?: string;
}`;

export const locale = `type Locale = {
	weekdays?: string[];
	months?: string[];
	weekStartsOn?: number;
};`;

export const lightboxAction = `interface LightboxAction {
	icon: MaterialIcon;
	action: () => void;
}`;

export const tableColumn = `interface TableColumn {
	label: string;
	column: string;
	placement: 'left' | 'center' | 'right';
}`;

export const timelineItem = `interface TimelineItem {
	type?: 'comment';
	avatar?: string;
	creator: string;
	created: Date;
	description: string;
	icon?: MaterialIcon;
}`;

export const tooltipConfig = `interface TooltipConfig {
	allowHTML?: boolean;
	animation?: 'scale';
	appendTo?: Element;
	arrow?: boolean | string | SVGElement;
	disabled?: boolean;
	content?: string | Element;
	delay?: number | [number, number];
	duration?: number | [number, number];
	hideOnClick?: boolean | 'toggle';
	ignoreAttributes?: boolean;
	inertia?: boolean;
	interactive?: boolean;
	maxWidth?: number | 'none';
	moveTransition?: string;
	offset?: [number, number];
	placement?:
		| 'top'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end'
		| 'auto'
		| 'auto-start'
		| 'auto-end';
	theme?: string;
	trigger?: string;
	triggerTarget?: Element | Element[];
	zIndex?: number;
}`;

export const formatNumber = `interface FormatNumber {
	notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
	style?: 'decimal' | 'currency' | 'percent' | 'unit';
}`;

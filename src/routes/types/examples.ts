export const carouselSlide = `interface Slide {
	id: string;
	src: string;
	alt?: string;
}`;

export const dropResult = `interface DropResult {
	accepted: File[];
	rejected: File[];
}`;

export const locale = `type Locale = {
	weekdays?: string[];
	months?: string[];
	weekStartsOn?: number;
};`;

export const lightboxAction = `interface LightboxAction {
	data: string (IconData);
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
	icon?: string (IconData);
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

export const iconData = `
export const menu = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';
export const account = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>';
`;

export const twSizes = `
type TwSizes =
	| '0'
	| '0.5'
	| '1'
	| '1.5'
	| '2'
	| '2.5'
	| '3'
	| '3.5'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '14'
	| '16'
	| '20'
	| '24'
	| '28'
	| '32'
	| '36'
	| '40'
	| '44'
	| '48'
	| '52'
	| '56'
	| '60'
	| '64'
	| '72'
	| '80'
	| '96';
`;

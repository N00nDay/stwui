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

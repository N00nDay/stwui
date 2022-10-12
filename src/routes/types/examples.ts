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

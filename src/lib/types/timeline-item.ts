import type { MaterialIcon } from './';

export interface TimelineItem {
	type?: 'comment';
	avatar?: string;
	creator: string;
	created: Date;
	description: string;
	icon?: MaterialIcon;
}

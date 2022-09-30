import type MaterialIcons from './material-icons';

export interface TimelineItem {
	type?: 'comment';
	avatar?: string;
	creator: string;
	created: Date;
	description: string;
	icon?: MaterialIcons;
}

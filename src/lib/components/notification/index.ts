import OriginalNotification from './Notification.svelte';
import OriginalContent from './Content.svelte';
import OriginalLeading from './Leading.svelte';
import Avatar from './Avatar.svelte';
import Description from './Description.svelte';
import Extra from './Extra.svelte';
import Title from './Title.svelte';
import Icon from '../icon/Icon.svelte';

const Notification = OriginalNotification as NotificationStatic;
Notification.Leading = OriginalLeading as LeadingStatic;
Notification.Leading.Avatar = Avatar;
Notification.Leading.Icon = Icon;
Notification.Content = OriginalContent as ContentStatic;
Notification.Content.Title = Title;
Notification.Content.Description = Description;
Notification.Extra = Extra;

export default Notification;

export interface NotificationStatic {
	new (...args: ConstructorParameters<typeof OriginalNotification>): OriginalNotification;
	Leading: LeadingStatic;
	Content: ContentStatic;
	Extra: typeof Extra;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Avatar: typeof Avatar;
	Icon: typeof Icon;
}

export interface ContentStatic {
	new (...args: ConstructorParameters<typeof OriginalContent>): OriginalContent;
	Title: typeof Title;
	Description: typeof Description;
}

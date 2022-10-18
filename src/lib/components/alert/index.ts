import OriginalAlert from './Alert.svelte';
import Icon from './Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import OriginalLeading from './Leading.svelte';

const Alert = OriginalAlert as AlertStatic;
Alert.Title = Title;
Alert.Description = Description;
Alert.Leading = OriginalLeading as LeadingStatic;
Alert.Leading.Icon = Icon;

export default Alert;

export interface AlertStatic {
	new (...args: ConstructorParameters<typeof OriginalAlert>): OriginalAlert;
	Title: typeof Title;
	Description: typeof Description;
	Leading: LeadingStatic;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}

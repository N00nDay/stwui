import OriginalAlert from './Alert.svelte';
import Icon from '../icon/Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import OriginalLeading from './Leading.svelte';
import Extra from './Extra.svelte';

const Alert = OriginalAlert as AlertStatic;
Alert.Title = Title;
Alert.Description = Description;
Alert.Leading = OriginalLeading as LeadingStatic;
Alert.Leading.Icon = Icon;
Alert.Extra = Extra;

export default Alert;

export interface AlertStatic {
	new (...args: ConstructorParameters<typeof OriginalAlert>): OriginalAlert;
	Title: typeof Title;
	Description: typeof Description;
	Leading: LeadingStatic;
	Extra: typeof Extra;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}

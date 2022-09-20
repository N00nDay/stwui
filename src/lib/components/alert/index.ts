import OriginalAlert from './Alert.svelte';
import Title from './Title.svelte';
import Icon from './Icon.svelte';
import Description from './Description.svelte';

export interface AlertStatic {
	new (): OriginalAlert;
	Title: typeof Title;
	Description: typeof Description;
	Icon: typeof Icon;
}

const Alert = OriginalAlert as AlertStatic;
Alert.Title = Title;
Alert.Description = Description;
Alert.Icon = Icon;

export default Alert;

import OriginalAlert from './Alert.svelte';
import Icon from './Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';

const Alert = OriginalAlert as AlertStatic;
Alert.Icon = Icon;
Alert.Title = Title;
Alert.Description = Description;

export default Alert;

export interface AlertStatic {
	new (...args: ConstructorParameters<typeof OriginalAlert>): OriginalAlert;
	Icon: typeof Icon;
	Title: typeof Title;
	Description: typeof Description;
}

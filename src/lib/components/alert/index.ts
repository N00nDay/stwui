import OriginalAlert from './Alert.svelte';
import Icon from '../icon/Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import Extra from './Extra.svelte';

const Alert = OriginalAlert as AlertStatic;
Alert.Title = Title;
Alert.Description = Description;
Alert.Leading = Icon;
Alert.Extra = Extra;

export default Alert;

export interface AlertStatic {
	new (...args: ConstructorParameters<typeof OriginalAlert>): OriginalAlert;
	Title: typeof Title;
	Description: typeof Description;
	Leading: typeof Icon;
	Extra: typeof Extra;
}

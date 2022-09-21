import OriginalAlert from './Alert.svelte';
import Title from './Title.svelte';
import Icon from './Icon.svelte';
import Description from './Description.svelte';

// FIXME: this interface removes the errors below but causes
// "Expected 0 arguments, but got 1." error when imported into external applications

// export interface AlertStatic extends OriginalAlert {
// 	new (): OriginalAlert;
// 	Title: typeof Title;
// 	Description: typeof Description;
// 	Icon: typeof Icon;
// }

// const Alert = OriginalAlert as AlertStatic;
const Alert = OriginalAlert;
Alert.Title = Title;
Alert.Description = Description;
Alert.Icon = Icon;

export default Alert;

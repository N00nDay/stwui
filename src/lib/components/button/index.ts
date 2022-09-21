import OriginalButton from './Button.svelte';
import Group from './Group.svelte';
import Loader from './Loader.svelte';

// FIXME: this interface removes the errors below but causes
// "Expected 0 arguments, but got 1." error when imported into external applications

// export interface ButtonStatic extends OriginalButton {
// 	new (): OriginalButton;
// 	Group: typeof Group;
// 	Loader: typeof Loader;
// }

// const Button = OriginalButton as ButtonStatic;
const Button = OriginalButton;
Button.Group = Group;
Button.Loader = Loader;

export default Button;

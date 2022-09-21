import OriginalButton from './Button.svelte';
import Group from './Group.svelte';
import Loader from './Loader.svelte';

// export interface ButtonStatic {
// 	new (): OriginalButton;
// 	Group: typeof Group;
// 	Loader: typeof Loader;
// }

// const Button = OriginalButton as ButtonStatic;
const Button = OriginalButton;
Button.Group = Group;
Button.Loader = Loader;

export default Button;

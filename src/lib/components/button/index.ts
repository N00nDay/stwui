import OriginalButton from './Button.svelte';
import Group from './Group.svelte';
import Loader from './Loader.svelte';

const Button = OriginalButton as ButtonStatic;
Button.Group = Group;
Button.Loader = Loader;

export default Button;

export interface ButtonStatic {
	new (...args: ConstructorParameters<typeof OriginalButton>): OriginalButton;
	Group: typeof Group;
	Loader: typeof Loader;
}

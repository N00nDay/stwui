import OriginalButton from './Button.svelte';
import Loader from './Loader.svelte';
import Icon from './Icon.svelte';

const Button = OriginalButton as ButtonStatic;
Button.Loader = Loader;
Button.Icon = Icon;
Button.Leading = Icon;
Button.Trailing = Icon;

export default Button;

export interface ButtonStatic {
	new (...args: ConstructorParameters<typeof OriginalButton>): OriginalButton;
	Loader: typeof Loader;
	Icon: typeof Icon;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}

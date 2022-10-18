import OriginalButton from './Button.svelte';
import Loader from './Loader.svelte';

const Button = OriginalButton as ButtonStatic;
Button.Loader = Loader;

export default Button;

export interface ButtonStatic {
	new (...args: ConstructorParameters<typeof OriginalButton>): OriginalButton;
	Loader: typeof Loader;
}

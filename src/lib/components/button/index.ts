import OriginalButton from './Button.svelte';
import Group from './Group.svelte';
import Loader from './Loader.svelte';

// type ButtonType = {
// 	new (): OriginalButton;
// 	Group: typeof Group;
// 	Loader: typeof Loader;
// };

// const Button = OriginalButton as ButtonType;
const Button = OriginalButton;
Button.Group = Group;
Button.Loader = Loader;
export default Button;

// export { default as Button } from './Button.svelte';
// export { default as ButtonLoader } from './Loader.svelte';
// export { default as ButtonGroup } from './Group.svelte';

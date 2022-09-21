import OriginalButton from './Button.svelte';
import Group from './Group.svelte';
import Loader from './Loader.svelte';

interface Button {
	new (): OriginalButton;
	Group: typeof Group;
	Loader: typeof Loader;
}
export declare const Button: {
	new (): Button;
	Group: typeof Group;
	Loader: typeof Loader;
};

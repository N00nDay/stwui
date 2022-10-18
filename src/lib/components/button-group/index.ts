import OriginalButtonGroup from './ButtonGroup.svelte';
import OriginalButton from './Button.svelte';
import Loader from './Loader.svelte';
import Icon from './Icon.svelte';

const ButtonGroup = OriginalButtonGroup as ButtonGroupStatic;
ButtonGroup.Button = OriginalButton as ButtonStatic;
ButtonGroup.Button.Loader = Loader;
ButtonGroup.Button.Icon = Icon;
ButtonGroup.Button.Leading = Icon;
ButtonGroup.Button.Trailing = Icon;

export default ButtonGroup;

export interface ButtonGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalButtonGroup>): OriginalButtonGroup;
	Button: ButtonStatic;
}

export interface ButtonStatic {
	new (...args: ConstructorParameters<typeof OriginalButton>): OriginalButton;
	Button: ButtonStatic;
	Loader: typeof Loader;
	Icon: typeof Icon;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}

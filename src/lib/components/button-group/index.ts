import OriginalButtonGroup from './ButtonGroup.svelte';
import OriginalButton from './Button.svelte';
import Loader from './Loader.svelte';
import OriginalLeading from './Leading.svelte';
import OriginalTrailing from './Trailing.svelte';
import Icon from './Icon.svelte';

const ButtonGroup = OriginalButtonGroup as ButtonGroupStatic;
ButtonGroup.Button = OriginalButton as ButtonStatic;
ButtonGroup.Button.Loader = Loader;
ButtonGroup.Button.Leading = OriginalLeading as LeadingStatic;
ButtonGroup.Button.Trailing = OriginalTrailing as TrailingStatic;
ButtonGroup.Button.Icon = Icon;
ButtonGroup.Button.Leading.Icon = Icon;
ButtonGroup.Button.Trailing.Icon = Icon;

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
	Leading: LeadingStatic;
	Trailing: TrailingStatic;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}

export interface TrailingStatic {
	new (...args: ConstructorParameters<typeof OriginalTrailing>): OriginalTrailing;
	Icon: typeof Icon;
}

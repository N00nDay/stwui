import OriginalInput from './Input.svelte';
import Label from './Label.svelte';
import OriginalLeading from './Leading.svelte';
import OriginalTrailing from './Trailing.svelte';
import Icon from '../icon/Icon.svelte';

const Input = OriginalInput as InputStatic;
Input.Label = Label;
Input.Leading = OriginalLeading as LeadingStatic;
Input.Trailing = OriginalTrailing as TrailingStatic;
Input.Leading.Icon = Icon;
Input.Trailing.Icon = Icon;

export default Input;

export interface InputStatic {
	new (...args: ConstructorParameters<typeof OriginalInput>): OriginalInput;
	Label: typeof Label;
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

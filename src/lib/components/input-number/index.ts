import OriginalInputNumber from './InputNumber.svelte';
import Label from './Label.svelte';
import OriginalLeading from './Leading.svelte';
import OriginalTrailing from './Trailing.svelte';
import Icon from '../icon/Icon.svelte';

const InputNumber = OriginalInputNumber as InputNumberStatic;
InputNumber.Label = Label;
InputNumber.Leading = OriginalLeading as LeadingStatic;
InputNumber.Trailing = OriginalTrailing as TrailingStatic;
InputNumber.Leading.Icon = Icon;
InputNumber.Trailing.Icon = Icon;

export default InputNumber;

export interface InputNumberStatic {
	new (...args: ConstructorParameters<typeof OriginalInputNumber>): OriginalInputNumber;
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
